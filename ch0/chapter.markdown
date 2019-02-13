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

Also I HATE FRAMEWORKS.

### Install Clojure

On a Mac:

`brew install clojure`

### Project structure.

Let's just rip off the [ClojureScript Quick Start](https://clojurescript.org/guides/quick-start)

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

### No I'm not going to explain Lisp to you

There are literally _hundreds_ of tutorials out there that explain how Lisp
syntax works and looks. Go read them.

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

You should now see the `println` we put into our program. But more excitingly
your browser should open on a webpage. And the command line will now be a
ClojureScript REPL that controls that page.

[^1]: or minutes...
