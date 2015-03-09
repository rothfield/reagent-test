(ns reagent-test.app
  (:require [reagent.core :as reagent :refer [atom]]
            [reagent.session :as session]
            [secretary.core :as secretary :include-macros true]
            [goog.events :as events]
            [goog.history.EventType :as EventType]
            [cljsjs.react :as react])
  (:import goog.History))

(def strain-data (atom {:markers ["met" "lac"]
                        :name "s1" 
                        :copy-details-flag true
                        }))
(defn copy-details-did-mount []
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
                           (clj->js {:source available-tags}))))))

(defn copy-details-div[]
  (if (:copy-details-flag @strain-data)
    [:div.ui-widget
     [:label {:for "copy_from_strain"} 
      "Enter name of existing (non-plasmid;phage; or F' containing Strain)."
      [:br]
      "All information from this Strain (except for Remarks) will be copied to the current new Strain."]
     [:input#copy_from_strain]
   [:div.button_row
    [:input#copy_details_submit_btn
     {:value "OK", :type "submit", :name "copy_details_submit"}

     ]
    [:input#copy_details_cancel_btn
     {:value "Cancel",
      :type "button",
      :name "copy_details_cancel"
      :on-click #(swap! strain-data (assoc-in @strain-data [:copy-details-flag] false)) 
      }]]]
    )
  )

(defn copy-details-component[]
  (reagent/create-class {:render copy-details-div
                         :component-did-mount copy-details-did-mount}
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
      :on-click #(swap! strain-data (assoc-in @strain-data [:copy-details-flag] false)) 
      }]]
   ]
  )


;; -------------------------
;; Views

(defn copy-details-button[]
  [:input#copy_details_show_btn.details_button
   {:value "Copy Details From Existing Strain...",
    :type "button",
    :on-click #(swap! strain-data :e(assoc-in @strain-data [:copy-details-flag] true)) 
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
   [:div "This strain has" (-> @strain-data :markers count) 
    "markers" ]
   [copy-details-button]
   [copy-details-component]
   [marker-input-list (-> @strain-data :markers)]
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
(defn init []
  (hook-browser-navigation!)
  (reagent/render-component [current-page] (.getElementById js/document "container")))
