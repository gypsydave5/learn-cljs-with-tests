(ns hello-world.core-test
  (:require [hello-world.core :as h]
            [cljs.repl :refer [doc source]]
            [clojure.test :refer [is deftest run-tests]]))

(deftest hello-world-no-name
  (is (= "Hello, world!" (h/hello-world))))

(deftest hello-world-with-name
  (is (= "Hello, Bob!" (h/hello-world "Bob"))))

(run-tests)
