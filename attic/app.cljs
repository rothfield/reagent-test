(ns reagent-test.app
  (:require-macros 
    [cljs.core.async.macros :as m :refer [go alt!]])
  (:require [reagent.core :as reagent :refer [atom]]
            [cljs.core.async :as async :refer [<! >! timeout chan]]
            [clj-pouchdb.core :as pouchdb-core]
            [reagent.session :as session]
            [secretary.core :as secretary :include-macros true]
            [goog.events :as events]
            [goog.history.EventType :as EventType]
            [cljsjs.react :as react])
  (:import goog.History))



(defn my-log[x]
  (.log js/console x)) 

(defn log[& my-args]
  (dorun (map 
           #(my-log (.stringify js/JSON (clj->js %)))
           my-args)))



(def app-state 
  (atom 
    {
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
      }
     }
    ))

(defn copy-strain-input-did-mount []
  (.log js/console "in copy-strain-input-did-mount") 
  (js/$ (fn []
          (let [available-tags ["ActionScript"
                                "AppleScript"
                                "Asp"
                                "BASIC"
                                "C"
                                "C++"
                                "Clojure"
                                "COBOL"
                                "ColdFusion"
                                "Erlang"
                                "Fortran"
                                "Groovy"
                                "Haskell"
                                "Java"
                                "JavaScript"
                                "Lisp"
                                "Perl"
                                "PHP"
                                "Python"
                                "Ruby"
                                "Scala"
                                "Scheme"]]
            (.autocomplete (js/$ "#copy_from_strain") 
                           (clj->js {:source (:strain-names @app-state)
                                     }))))))

(defn copy-strain-input[]
  [:input#copy_from_strain]
  )

(defn copy-strain-input-component[]
  (reagent/create-class {:render copy-strain-input
                         :component-did-mount copy-strain-input-did-mount}
                        ))
(defn species-select[species-list current-value]
  [:select#strain_variety_id
   {:name "variety"}
   [:option]
   (for [item species-list]
     (let [selected (= current-value item)]
       [:option (:name item)(:selected (if selected "selected" ""))]
       ))])

(defn species-div[]
  ;(if (get-in @app-state [:strain-data :change-species-flag])
  [species-select (:species-list @app-state)]
  )


(defn copy-details-div[]
  (when false
    (log "entering copy-details-div, app-state is")
    (log @app-state)
    )
  (if (get-in @app-state [:strain-data :copy-details-flag])
    [:div.ui-widget
     [:label {:for "copy_from_strain"} 
      "Enter name of existing (non-plasmid;phage; or F' containing Strain)."
      [:br]
      "All information from this Strain (except for Remarks) will be copied to the current new Strain."]
     [copy-strain-input-component]
     [:div.button_row
      [:input#copy_details_submit_btn
       {:class "btn btn-primary" :value "OK", :type "submit", :name "copy_details_submit"}

       ]
      [:input#copy_details_cancel_btn
       {:value "Cancel",
        :class "btn btn-secondary"
        :type "button",
        :name "copy_details_cancel"
        :on-click #(swap! app-state assoc-in
                          [:strain-data :copy-details-flag] false) 
        }]]]
    )
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


;; -------------------------
;; Views

(defn copy-details-button[]
  [:input#copy_details_show_btn.details_button
   {:value "Copy Details From Existing Strain...",
    :type "button",
    :on-click #(swap! app-state
                      assoc-in 
                      [:strain-data :copy-details-flag] true) 
    :name "copy_details_show"}
   ]
  )

(defn marker-input[m]
  [:li.list-group-item 
   [:input {:class "marker_entry" :maxlength "15"
            :size "20" :type "text" :value m}] 
   ]
  )


(defn marker-input-list [items]
  [:ul.list-group.marker-input-list
   [:li.list-group-item 
    [:h4.list-group-item-heading "Markers"]
    ]
   (for [item items]
     ^{:key item} [marker-input item])]
  )


(defn strain[]
  [:div [:h2 "New Strain page"]
   [:div "This strain has"
    "markers" ]
   [species-div]
   [copy-details-button]
   [copy-details-component]
   [marker-input-list (get-in @app-state [:strain-data :markers])]
   [my-modal-div]
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
;; Routes
(secretary/set-config! :prefix "#")

(secretary/defroute "/strains/new" []
  (session/put! :current-page #'strain))

(secretary/defroute "/" []
  (session/put! :current-page #'home-page))

(secretary/defroute "/about" []
  (session/put! :current-page #'about-page))

;; -------------------------
;; History
;; must be called after routes have been defined
(defn hook-browser-navigation! []
  (doto (History.)
    (events/listen
      EventType/NAVIGATE
      (fn [event]
        (secretary/dispatch! (.-token event))))
    (.setEnabled true)))

;; -------------------------
;; Initialize app

(defn- obj-to-hash
  "Convert a JS object to a hash, yielding nil for nil JS object"
  [obj]
  (if obj (js->clj obj :keywordize-keys true) {}))

(defn- hash-to-obj
  "Convert a CLJS structure to a JS object, yielding empty JS object for nil input"
  [obj]
  (let [jso (or (clj->js obj) (js-obj))]
    jso))



;;https://github.com/davber/clj-pouch
(defn create-db
  "Create a new PouchDB database given optional name and options"
  [& [name & [options]]]
  (js/PouchDB. name (hash-to-obj options)))


(def db (create-db "gt3"))


(defn- hash-to-obj
  "Convert a CLJS structure to a JS object, yielding empty JS object for nil input"
  [obj]
  (let [jso (or (clj->js obj) (js-obj))]
    jso))

(defn load-strain-names[]
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
                  (swap! app-state assoc-in [:strain-names] names) 
                  )))))





(defn create-sample-data[]
  ;; Seems to work OK
  (doall (map
           #(go
              (let [res (<! (pouchdb-core/post-doc db {:type "strain" :name (str "Strain" %)})) 
                    ]
                ))
           (range 100) 
           )))

(defn init []
  (session/put! :current-page #'strain)
  (load-strain-names)
  (.log js/console "init")
  (hook-browser-navigation!)
  (let [container 
        (.getElementById js/document "container")
        ]
    (if container

      (reagent/render-component [current-page] 
                                container)
      )))

;;(.log js/console (pr-str [1 2 3 4]))

;;(create-sample-data)   

