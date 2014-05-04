title: Better.js Introduction
output: index.html
--


<style>.slide-content{width: 1024px;}</style>
<style>.slide-content pre code {font-size:160%;}</style>
<style>.slide-content pre {background-color:lightgrey;}</style>
<style>.slide-content code {font-size:120%;}</style>
<style>h1 {margin-top:50px;}</style>
<base target='_blank'/>

# Better.js Introduction

## <a href='http://twitter.com/jerome_etienne'>@jerome_etienne</a>

--

### What Is Better.js

**"Library to help you write a better javascript"**

* [Better.js homepage](http://betterjs.org) - [github repository](https://github.com/jeromeetienne/better.js/)
* Released under MIT license
* Works in node.js and in browser
* 6k after min+gzip

--

## How Does It Helps Me Write Better Javascript ?

--

### How Better.js Helps Write Better Javascript ?

1. With better.js, you specify how your code is intented to run.

1. You run with better.js during your test phase.

1. better.js verifies your code running according to specifications.

1. You find bugs earlier.

In spirit, **better.js is a test tool** like jshint, like mocha, qunit.

--

### What is Revolutionary in Better.js ?

* Better.js extends javascript in revolutionary ways.

* Thus support features never seen in javascript.

* Such as **private members** and **strong typing**.

**Thus find new classes of bugs in your app!!**

--

## How Does It Look In Practice ?

--

### An Basic Example

Say you got a basic ```add``` function

```
function add(num1, num2){
    return num1 + num2;
}
```

--

### An Basic Example (bis)

Here is the better.js specification for it - Dont worry, details will come later

```
add = Bjs.Function(add, {
    arguments: [Number, Number],    // arguments strong typing
    return : Number                 // return value strong typing
})
```

**Better.js ensures the specification is respected!**


--

### An Basic Example - See By Yourself

When your code is used properly, all it ok.

```
console.log('3+2=', add(3,2))
// display 3+2=5
```

When your code is misued, error is immediatly notified!

```
console.log('3+2=', add(3,'two'))
// Exception Thrown AssertionError: argument[1] type is invalid.
```

**Discover a whole type of bugs!!**

--

## Ok, better.js seems interesting, what is the content of this course ?

--

### Course Topics

* What Better.js can do for you ?

* Better.js Installation In Browser.

* Better.js Installation In Node.js.

--

### Course Topics (bis)

* Better.js For **Functions**.

* Better.js For **Properties**.

* Better.js For **Classes**.

--

# The End

