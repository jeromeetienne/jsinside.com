title: What Can Better.JS Do For You ?
output: index.html
--


<style>.slide-content{width: 1024px;}</style>
<style>.slide-content pre code {font-size:160%;}</style>
<style>.slide-content pre {background-color:lightgrey;}</style>
<style>.slide-content code {font-size:120%;}</style>
<style>h1 {margin-top:50px;}</style>
<base target='_blank'/>


# What Can Better.JS Do For You ?

--

### Faster Bug Fixes

Verify for your code for a whole new class of bugs!

* ```private``` to be sure your code comes from where it's intended.
* ```strong typing``` to know when people are sending you garbage.

***Faster bug fixes => Better Code***

--

### Better Code Monitoring

* Garbage collector monitoring

* Global Variables motitoring 

***More accurate measures => Better decisions*** 

--


### Pure 100% Javascript

* No compilation step **=>** Faster dev cycle.

* No new language to learn **=>** No training for webdevs.

* 100% Javascript **=>** Easier to integrate in your code.

--

## Let's see some code!

--

### An Example Of Strong Typing For Function

First let's do a function to do an addition

```
var add = function(n1,n2){
    return n1+n2
}
```

Misusing it with string

```
add(3, 'two')
// return '3two'
```

**Error Not Detected in Plain Javascript**

--

### Using This Function

Overload add with a better.js function

```
add = Bjs.Function(add, {
    arguments : [Number, Number]
})
```

Using it with the wrong type of arguments

```
add(3, 'two');
// Exception Thrown Invalid Type for Argument 2. 
// It should be Number
```

**Error Detected thanks to Better.js**

--

### Benefits of Better.js

* Detect a new class of bugs! 
* unauthorized access to private properties and functions
* Strong Typing for Variable Types.

**Helps You Write a Better Javascript**

--

## Ok exactly, which features are available ?

--

### Better Classes

![Better.js Class Features Summary](images/betterjs-class-features-summary.png)

--

### Better Functions

![Better.js Functions Features Summary](images/betterjs-function-features-summary.png)

--

### Better Properties

![Better.js Property Features Summary](images/betterjs-property-features-summary.png)

--

# The End

