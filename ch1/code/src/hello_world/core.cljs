(ns hello-world.core)

(defn hello-world
  ([] (hello-world "world"))
  ([name] (str "Hello, " name "!")))

(defn create-text-input []
  (let [input (.createElement js/document "input")]
    (-> input
        (.setAttribute "type" "text"))
    input))

(defn create-button [text on-click]
  (let [button (.createElement js/document "button")]
    (set! (.-textContent button) text)
    (.addEventListener button "click" on-click)
    button))

(defn create-on-click [text-box]
  (fn [event]
    (.preventDefault event)
    (js/alert (if (empty? (.-value text-box))
                (hello-world)
                (hello-world (.-value text-box))))))

(defn -main [& args]
  (let [text-input (create-text-input)
        button (create-button "Say Hello!" (create-on-click text-input))
        main (.querySelector js/document "main")
        form (.createElement js/document "form")]
    (.appendChild form text-input)
    (.appendChild form button)
    (.appendChild main form)))
