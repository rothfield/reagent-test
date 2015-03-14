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



  (def app-state (atom 
                   {:strain-names []
                    :strain-data 
                    {:markers ["met" "lac"]
                     :name "s1" 
                     :copy-details-flag false
                     }
                    }    ))


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



  (defn copy-details-div[]
    (log "entering copy-details-div, app-state is")
    (log @app-state)
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


(defn oldcopy-details-div[]
  [:div
   [:table
    {:border "0"}
    [:tbody
     [:tr.statusBar [:td " "]]
     [:tr
      [:td.lbl
       "Enter name of existing (non-plasmid;phage; or F' containing Strain)."
       [:br]
       "All information from this Strain (except for Remarks) will be copied to the current new Strain."]]
     [:tr [:td.lbl "Enter existing Strain name"]]
     [:tr
      [:td
       [:input
        {:data-autocomplete
         "http://gene-tracker.com:3000/demo/strains/strain_name_autocomplete?variety_id=1",
         :type "text",
         :size "15",
         :name "[copy_details]name"}]]]]]
   [:div.button_row
    [:input#copy_details_submit_btn
     {:value "OK", :type "submit", :name "copy_details_submit"}

     ]
    [:input#copy_details_cancel_btn
     {:value "Cancel",
      :type "button",
      :name "copy_details_cancel"
      :on-click #(swap! app-state 
                        assoc-in 
                        [:strain-data :copy-details-flag] false)
      }]]
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
  [:input {:class "marker_entry" :maxlength "15"
           :size "20" :type "text" :value m}] 
  )

(defn marker-input-list [items]
  [:ul
   (for [item items]
     ^{:key item} [marker-input item])])

(defn markers[markers-list]
  [:div {:id "markers_div"}
   "markers here"]
  )

(defn strain[]
  [:div [:h2 "New Strain page"]
   [:div "This strain has"
    "markers" ]
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
              (log "load-strain-names callback")
              (if err
                (log "error getting strain names") 
                (let [
                      res (obj-to-hash raw-res) 
                      rows (:rows res)
                      docs (map :doc rows)
                      names (sort (map :name docs))
                      ]
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
;;(create-sample-data)   
  (load-strain-names)
  (hook-browser-navigation!)
  (let [container (.getElementById js/document "container")
        ]
    (.log js/console "container" (pr-str container))
    (if container
      (reagent/render-component [current-page] container)
      )
    ))

;;(.log js/console (pr-str [1 2 3 4]))


