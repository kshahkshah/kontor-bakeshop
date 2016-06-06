(defproject kontor-bakeshop "0.1.0-SNAPSHOT"
  :description "Kontor Point of Sale Demo"
  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.170"]
                 [org.omcljs/om "1.0.0-alpha34"]
                 [figwheel-sidecar "0.5.0-SNAPSHOT" :scope "test"]]
  :plugins [[lein-cljsbuild "1.1.0"]])