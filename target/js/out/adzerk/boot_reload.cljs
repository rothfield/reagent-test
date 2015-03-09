(ns adzerk.boot-reload (:require [adzerk.boot-reload.client :as client] reagent-test.app))
(when-not (client/alive?) (client/connect "ws://localhost:45232" {:on-jsload (fn* [] (reagent-test.app/init))}))