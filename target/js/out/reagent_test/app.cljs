(ns reagent-test.app
  (:require-macros 
    [cljs.core.async.macros :as m :refer [go alt!]])
  (:require [reagent.core :as reagent :refer [atom]]
            [cljs.core.async :as async :refer [<! >! timeout chan]]
            [clj-pouchdb.core :as pouchdb-core]
            [reagent.session :as session]
            [goog.events :as events]
            [goog.history.EventType :as EventType]
            [cljsjs.react :as react])
  )


(defn- obj-to-hash
  "Convert a JS object to a hash, yielding nil for nil JS object"
  [obj]
  (if obj (js->clj obj :keywordize-keys true) {}))

(defn- hash-to-obj
  "Convert a CLJS structure to a JS object, yielding empty JS object for nil input"
  [obj]
  (let [jso (or (clj->js obj) (js-obj))]
    jso))



(defn my-log[x]
  (.log js/console x)) 

(defn log[& my-args]
  (dorun (map 
           #(my-log (.stringify js/JSON (clj->js %)))
           my-args)))



(defonce app-state 
  (atom 
    {
     :_id "app-state"
     :species-list
     [
      {:name "E.coli"
       :type "Bacteria"}
      {:name "Salmonella"
       :type "Bacteria"}
      ]

     :strain-names []
     :strain-data 
     {:markers ["met" "lac"]
      :species "E.coli"
      :name "s1" 
      :copy-details-flag false
      :change-species-flag false
      }
     }
    ))

;;https://github.com/davber/clj-pouch
;;
(defn create-db
  "Create a new PouchDB database given optional name and options"
  [& [name & [options]]]
  (js/PouchDB. name (hash-to-obj options)))

(def db (create-db "gt8"))
(def remote-db (create-db "http://localhost:5984/gt8"))

(defn load-strain-names[]
  (.allDocs db (hash-to-obj {:include_docs true
                             })
            (fn[err raw-res]
              (if err
                (log "ERROR")
                (let [res (js->clj raw-res)
                      ;; tricky. have to use doall to get the lazy sequence
                      ;; in memory

                      snames 
                      (->> (get res "rows") 
                           (map #(get % "doc"))
                           (filter #(= "strain" (get % "type")))
                           (map #(get % "name"))
                           doall
                           )
                      ]
                  (log "snames")
                  (log (count snames))
                  ;    (log "totalrows")
                  ;    (get res "total_rows")
                  (.autocomplete (js/$ "#copy_from_strain")
                                 (clj->js {:source snames}))

                  ;;     (.autocomplete (js/$ "#copy_from_strain") 
                  ;;                   ["aaa" "aab"])
                  ;; (hash-to-obj {"source" snames}))
                  )))))

(defn save-app-state[]
  (log "entering save-app-state")
  (log "app-state is")
  (log @app-state)
  (go
    (let [res (<! (pouchdb-core/put-doc db @app-state))
          new-rev (get res :rev)
          ]
      (log "new-rev:")
      (log new-rev)

      (log "response for put-doc, save-app-state is")
      (log res)
      (swap! app-state assoc "_rev" (get res :rev))
      (log "app-state after swap!")
      (log @app-state)
      )
    ))




;; -------------------------
;; Views


(defn remarks[current-value]
  [:div.form-group
   [:label {:for "comment"} "Remarks:"]
   [:textarea#remarks.form-control 
    {:rows "8"
     :value current-value
     :on-change 
     #(do (let [new-val
                (-> % .-target .-value)
                ]
            (log "new-val")
            (log new-val)
            (swap! app-state assoc-in
                   [:strain-data :remarks]
                   new-val)
            ) 
          )
     }
    ]]
  )
(defn copy-strain-input-did-mount []
  (.log js/console "in copy-strain-input-did-mount") 
  (let [snames (load-strain-names)]
    (.log js/console snames)
    ))
(defn copy-strain-input[]
  [:input#copy_from_strain]
  )

(defn copy-strain-input-component[]
  (reagent/create-class {:render copy-strain-input
                         :component-did-mount copy-strain-input-did-mount}
                        ))

(defn species-select[species-list current-value change-species-flag]
  [:select#species-select
   {:defaultValue current-value
    :name "variety"
    :on-change 
    #(do 
       (swap! app-state 
              assoc-in
              [:strain-data :species] 
              (-> % .-target .-value)
              )
       (swap! app-state 
              assoc-in
              [:strain-data :change-species-flag] false) 
       )
    }
   [:option]
   (for [item species-list]
     [:option {:key (:name item)
               :value (:name item)}  (:name item)]
     )])

(defn species-div[species-list current-value change-species-flag]
  (if-not change-species-flag
    [:div.form-group
     [:label {:style {:width "100px"}} "Species"]
     [:span 
      current-value
      ]
     [:button.btn.btn-sm.btn-info 
      {:type "button"
       :on-click #(swap! app-state
                         assoc-in 
                         [:strain-data :change-species-flag] true) 
       } "Change species"]
     ] 
    [:div
     [:label {:style {:width "100px"}} "Species"]
     [:label{:for "species-select"}  "Change species to:"]
     [species-select species-list current-value change-species-flag]
     ]))




(defn copy-details-div[]
  (log "entering copy-details-div")
  (when false
    (log "entering copy-details-div, app-state is")
    (log @app-state)
    )
  [:div.ui-widget
   [:label {:for "copy_from_strain"} 
    "Enter name of existing (non-plasmid;phage; or F' containing Strain)."
    [:br]
    "All information from this Strain (except for Remarks) will be copied to the current new Strain."]
   [copy-strain-input-component]
   [:div.button_row
    [:input#copy_details_submit_btn
     {:class "btn btn-primary" :value "OK", :type "submit", 
      :name "copy_details_submit"
      :on-click 
      #(swap! app-state assoc-in
              [:strain-data :copy-details-flag] false) 
      }
     ]
    [:input#copy_details_cancel_btn
     {:value "Cancel",
      :class "btn btn-secondary"
      :type "button",
      :name "copy_details_cancel"
      :on-click 
      #(swap! app-state assoc-in
              [:strain-data :copy-details-flag] false) 
      }]]]

  )

(defn my-modal-div[]
  [:div#myModal.modal.fade
   {:aria-hidden "true",
    :aria-labelledby "myModalLabel",
    :role "dialog",
    :tabIndex "-1"}
   [:div.modal-dialog
    [:div.modal-content
     [:div.modal-header
      [:button.close
       {:aria-label "Close", :data-dismiss "modal", :type "button"}
       [:span {:aria-hidden "true"} "×"]]
      [:h4#myModalLabel.modal-title "Modal title"]]
     [:div.modal-body "\n        ...\n      "]
     [:div.modal-footer
      [:button.btn.btn-default
       {:data-dismiss "modal", :type "button"}
       "Close"]
      [:button.btn.btn-primary {:type "button"} "Save changes"]]]]]
  )


(defn open-modal-component[]
  (reagent/create-class {:render my-modal-div}))

(defn copy-details-component[]  
  (reagent/create-class {:render copy-details-div
                         }
                        ))

(defn change-species-section[]
  [:div
   "Species"
   ]
  )





(defn save-button[]
  [:button#saveButton.btn-primary
   {
    :on-click #(save-app-state)
    :type "button"}
   "Save"]
  )

(defn copy-details-button[]
  [:input#copy_details_show_btn.details_button
   {:value "Copy Details From Existing Strain...",
    :type "button",
    :on-click 
    #(swap! app-state
            assoc-in 
            [:strain-data :copy-details-flag] true) 
    :name "copy_details_show"}
   ]
  )

(defn marker-input[m my-key]
  (log (str "my-key is " my-key))
  [:li.list-group-item.marker-input {:key my-key}
   [:input 
    {
     :on-change 
     #(do (swap! app-state assoc-in
                 [:strain-data :markers my-key]
                 (-> % .-target .-value)
                 ) 
          (log (deref app-state)))

     :class "marker_entry" :maxLength "15"
     :size "20" :type "text" :value m}] 
   ]
  )

(defn marker-input-list [items]
     [:ul.form-group.list-group.marker-input-list
      [:li.list-group-item
      [:label.list-group-item-heading "Markers"]
      "    "
      [:button#myButton.btn-info.btn-xs
       {:autoComplete "off",
        :on-click 
        #(swap! app-state
                update-in 
                [:strain-data :markers]
                conj "") 
        :type "button"}
       "Add marker"]
       ]
   (map-indexed
     (fn[idx itm]
         ^{:key idx} [marker-input itm idx]
         )
     items)
   ]
  )

(defn old-marker-input-list [items]
  [:ul.list-group.marker-input-list
   [:li.list-group-item 
    [:label.list-group-item-heading "Markers"]
    "    "
    [:button#myButton.btn-info.btn-xs
     {:autoComplete "off",
      :type "button"}
     "Add marker"]
    ]
   (map-indexed
     (fn[idx itm]
       ^{:key idx} [marker-input itm idx])
     items)
   ]
  )


(defn strain[]
  [:form.form-vertical [:h2 "New Strain page"]
   [species-div
    (:species-list @app-state)
    (get-in @app-state [:strain-data :species])
    (get-in @app-state [:strain-data :change-species-flag])
    ]
   [copy-details-button]
   (if (get-in @app-state [:strain-data :copy-details-flag])
     [copy-details-component]
     )
   [marker-input-list (get-in @app-state [:strain-data :markers])]
   [remarks (get-in @app-state [:strain-data :remarks])]
   [my-modal-div]
   [save-button]
   [:div [:a {:href "#/about"} "go to about page"]]])


(defn home-page []
  [:div [:h2 "Welcome to test-reagent"]
   [:div [:a {:href "#/strains/new"} "New Strain"]]
   [:div [:a {:href "#/about"} "go to about page"]]

   ])

(defn about-page []
  [:div [:h2 "About test-reagentjjj"]
   [:div [:a {:href "#/"} "go to the home page"]]])

(defn current-page []
  (.log js/console "entering current-page, current-page is")
  (log (session/get :current-page))
  [:div [(session/get :current-page)]])

;; -------------------------

;; -------------------------
;; Initialize app





(defn- hash-to-obj
  "Convert a CLJS structure to a JS object, yielding empty JS object for nil input"
  [obj]
  (let [jso (or (clj->js obj) (js-obj))]
    jso))


(defn old-load-strain-names[]
  (.allDocs db (hash-to-obj {"include_docs" true}) 
            (fn [err raw-res] 
              (when false
                (log "load-strain-names callback"))
              (if err
                (log "error getting strain names") 
                (let [
                      res (obj-to-hash raw-res) 
                      rows (:rows res)
                      docs (map :doc rows)
                      names (sort (map :name docs))
                      ]
                  (when false
                    (log "names")
                    (log names))
                  names
                  ;; (swap! app-state assoc-in [:strain-names] names) 
                  )))))






(defn load-app-state[]
  (log "load-app-state")
  (go
    (let [res (<! (pouchdb-core/get-doc db "app-state"))]
      (log "load app-state:response is")
      (log res)
      (reset! app-state res)
      (log "app-state is")
      (log @app-state)
      )            
    )
  )
(defn create-sample-data[]
  (log "creating sample data")
  ;; Seems to work OK
  (doall (map
           #(go
              (let [res (<! (pouchdb-core/post-doc db {:type "strain" :name (str "Strain" %)})) 
                    ]
                ))
           (range 111) 
           )))

(defn zzcreate-sample-data[]
  (log "creating sample data")
  ;; Seems to work OK
  (dotimes [n 400] 
    (go
      (let [res (<! (pouchdb-core/post-doc db {:type "strain" :name (str "Strain" n)})) 
            ]
        ))
    ))

(defn init []
  (.sync db remote-db (hash-to-obj {:live true}))
  ;  (save-app-state)
  (load-app-state)
  ;;(create-sample-data)
  (.log js/console "init")
  (reagent/render-component [strain] 
                            (.getElementById js/document "container"))
  )


