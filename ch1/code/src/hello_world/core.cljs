(ns hello-world.core)

(defn hello-world
  ([] (hello-world "world"))
  ([name] (if (empty? name)
            (hello-world)
            (str "Hello, " name "!"))))

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

(defn create-on-click [text-box text-fn]
  (fn [event]
    (.preventDefault event)
    (text-fn (.-value text-box))))

(defn create-form [on-click-text-handler]
  (let [text-input (create-text-input)
        button (create-button "Say Hello!" (create-on-click text-input on-click-text-handler))
        form (.createElement js/document "form")]
    (.appendChild form text-input)
    (.appendChild form button)
    form))

(defn -main [& args]
  (let [form (create-form #(js/alert (hello-world %1)))
        main (.querySelector js/document "main")]
    (.appendChild main form)))
