title: How to Add Strong Typing To Your Function with Better.js
output: index.html
author:
  name: "Jerome Etienne"
  twitter: "@jerome_etienne"
  url: "http://jetienne.com"
--

<style>.slide-content{width: 1024px;}</style>
<style>.slide-content code {font-size:150%;}</style>
<style>h1 {margin-top:50px;}</style>
<base target='_blank'/>

# How to Add Strong Typing To Your Function with Better.js

## <a href='http://twitter.com/jerome_etienne'>@jerome_etienne</a>

--

### What is better.js

* it helps you check the correctness of your code
* helps you find bugs earlier
* works on node.js and browser
* [http://betterjs.org](http://betterjs.org)

**Easier and Faster to write Safer javascript**

--

### Let's install it

```
npm install better.js
```

```
 <script src='better.js'></script>
```

```
bower install better.js
```

--

## Today we focus on strong typing and function

--

### First lets define a function

* Let's pick a simple function
* which convert a number to a string

```
var Bjs	= require('better.js')
var numberToString = function(myNumber){
	return String(myNumber)
}
```

--

## Nothing that impressive...

--

## Let's review the type of this function

--

### Type Of This Function

* receives a ```Number``` as arguments
* returns a ```String``` value

```
var numberToString = function(myNumber){
	return String(myNumber)
}
```

--

### Give It A Try

With naive javascript

```
numberToString(3) // return "3"
```

Good

```
numberToString("three") // return "three"
```

**BAD** the error isn't detected by javascript

--

## How to improve that

--

### a Better.js for this function

```
numberToString = Bjs.Function(numberToString, {
	arguments	: [Number],
	return		: String,
})
```

* Better.js overloads the origin function
* It makes sure your specification is followed

**It isn't, better.js will notify you immediatly**

--

## What then ?

--

### Let's see

to run after adding the better.js to your function

```
numberToString(3) // return "3"
```

Good, legit usage so better.js let you thru


```
numberToString("three") // Throw Exception "Arguments 1 should be a Number but is of type String"
```

**Excelent** The error is immediatly detected and you are notified

--

### Conclusion 

Thanks to better.js 
* you find bug earlier
* you get notified of new class of bugs, variable type bug
* they were silently ignored before

**Better.js helps you write better code**
