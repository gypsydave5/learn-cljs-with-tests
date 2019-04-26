# Chapter 0: Getting Something Up and Running

This chapter aims to get us up and running with a ClojureScript project. By the
end of it you should:

- be able to start using Clojure
- be able to compile ClojureScript to JavaScript
- interact with the browser through a ClojureScript REPL
- know a little bit about how to set up a Clojure project using `deps.edn`

### Build Tools

Other tutorials and guides to Clojure and ClojureScript start with installing a
build tool called Leiningen, then some sort of framework for browser interaction
(usually Figwheel), and then some framework for DOM manipulation (Om or
Reagent). These are all good things and worth learning, but this tutorial will
deliberately avoid all of the above in favour of trying to keep things as bare
bones as possible. The dangers of starting with a lot of tooling already in
place is that it can easily become confusing and overwhelming, and it's harder
to understand which bits are important.

### The ClojureScript Quick Start
A lot of what follows will be based on [ClojureScript Quick
Start](https://clojurescript.org/guides/quick-start), and I am going to repeat
that content here. We will diverge eventually.

### No I'm not going to explain Lisp to you

There are literally _hundreds_ of tutorials out there that explain how Lisp
syntax works and looks, and how to learn Clojure. If I spend all the time here
explaining what all the parenthese mean we'll never get anywhere.

### I have no idea how to do this on Windows

If you're on a Windows machine you may be able to follow this with some minor
tweaks. Or some major tweaks. I'm sorry, I just don't know. Good luck.

### Install Clojure

On a Mac:

`brew install clojure`

### Project structure.

For now we'll use the same structure as [ClojureScript Quick Start](https://clojurescript.org/guides/quick-start)

```
hello-world        # Our project folder
├─ src             # The CLJS source code for our project
│  └─ hello_world  # Our hello_world namespace folder
│     └─ core.cljs # Our main file
└─ deps.edn        # (macOS/Linux only) A file for listing our dependencies
```

### Goal

What we want to achieve here is a simple DOM manipulation with
ClojureScript. The sort of thing that should be bread and butter to a JavaScript
developer:

```javascript
const div = document.querySelector("div")
div.textContent = "Hello, ClojureScript!"
```


### Writing ClojureScript

Inside `core.cljs` we can write (as per the Quick Start tutorial):

```clojure
(ns hello-world.core)

(println "Hello!")
```

This sets up a _namespace_ for this program using the `ns` macro. If you're from
another programming language, think 'package' or 'module'. It's just a way of
organizing your code.

`println` is a function that prints a line. Well duh.

### Dependencies

We're going to use Clojure to compile the ClojureScript to JavaScript. Clojure
has a library to do this - `cljs.main`. We'll tell Clojure to use `cljs.main` to
compile our incredible small program. But first we need to tell Clojure to get
hold of `cljs.main`, which is contained in the `org.clojure/clojurescript`. We
can declare this dependency in the `deps.edn` file.

Add the following to your `deps.edn` file:

```
{:deps {org.clojure/clojurescript {:mvn/version "1.10.516"}}}
```

This declares the dependency on `org.clojure/clojurescript`. When we compile our
program it will be automatically downloaded and added to the Clojure dependencies

### Compilation
At the command line:

```bash
clj --main cljs.main --compile hello-world.core
```

After a few seconds[^1], as if by magic, an `out` directory will appear. Inside
that you will find, among many other things, a `main.js` file. This is the entry
point for the program.

### The REPL

Now try

```bash
clj --main cljs.main --compile hello-world.core --repl
```

Your browser should open on a placeholder webpage that looks like:

And the command line will now be a ClojureScript REPL that controls that is
attached to that page, looking like:

```
Hello, world
ClojureScript 1.10.516
cljs.user=>
```

Look - there's that `println` we asked for, so we know that our file has been
evaluated!

The REPL tells you which namespace it's in befor the `=>` prompt - `cljs.user`
is the default user namespace for a ClojureScript REPL and is similar to the
`user` namespace in Clojure.

The webpage tells us to try out the connection `(js/alert "Hello CLJS!")` in the
REPL, which is the equivalent of `alert("HELLO THERE")` in JavaScript.

When we evaluate it the webpage your browser is open on will now pop up with an
`alert` box. Success!

### Getting some DOM to manipulate

The webpage also suggests we add an `index.html` file in 'the REPL launch
directory', which in our case is the `out` directory. We'll stick a bit of extra
HTML in there to play with:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <script src="out/main.js" type="text/javascript"></script>
    <main><h1>Change Me</h1></main>
  </body>
</html>
```

If we reload the page we should see the title 'Change Me'. Well, what are we
waiting for!

### Manipulate that DOM

We can slowly build up the commands we want to use to change the text in the
DOM. First off, let's get hold of the `h1` element.

In ClojureScript we can access the same JavaScript functions we already know and
love - we just need to put the same words in a different order. This:

```javascript
document.querySelector("h1")
```

becomes this:

```clojure
(.querySelector js/document "h1")
```

 To call the `querySelector` method on the `document` object, we put the name of the method
first with a leading `.`, follow it with `js/document` - which gets us the
`document` object - and then finally pass it the argument to the method -
`"h1"`.

If we evaluate that ClojureScript in the REPL we should be told that we've got a
`HTMLHeadingElement`. To make our lives easier, let's store a reference to it in
a var:

```clojurescript
(def heading (.querySelector js/document "h1"))
```

Which makes sense. Just to check, we might want to see what the `textContent` of
that element is. In JavaScript:

```javascript
heading.textContent
```

is easy. ClojureScript wraps the idea of get/set fields on a JavaScript object
with function named after the field. To get the content of `textContent` we evaluate the
following:

```clojurescript
(.-textContent heading)
```

Which should evaluate to `"Change Me"`.

To set the value of `textContent` we evaluate.

```javascript
(set! (.-textContent heading) "Hello CLJS!")
```

If you still have the browser window open you should be able to see the heading
text change.

## Homework

All of the DOM selection and manipulation functions and methods you're used to
using in JavaScript are available in ClojureScript. Experiment with using them
all to create a few different elements on a webpage. Most of the JavaScript
primitives translate pretty directly over to a ClojureScript primitive - one
gotcha is the `HTMLCollection` interface (as it is in JavaScript), as returned
by methods such as `getElementsByTagName`. To turn this into a ClojureScript
sequence, use the `array-seq` function.

Have fun!

[^1]: or minutes...
