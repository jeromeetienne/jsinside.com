title: Better.js For Functions
output: index.html
--

<style>.slide-content{width: 1024px;}</style>
<style>.slide-content pre code {font-size:160%;}</style>
<style>.slide-content pre {background-color:lightgrey;}</style>
<style>.slide-content code {font-size:120%;}</style>
<style>h1 {margin-top:50px;}</style>
<base target='_blank'/>

# Better.js For Functions

--

### What Can Better.js Do For Your Functions?

* Verify strong typing to arguments and return value.

* Support private if this property belongs to a class.


--

# An Example
## Show, Don't Tell

--

### Without Better.js

Let's take our usual ```add``` function.

```
function add(num1, num2){
    var value = num1 + num2
    return value
}
```

Let's try a wrong return type without better.js

```
add(3, 'two');
// return '3two'
```

**Error Not Detected**

--

### With Better.js

* Types of ```num1, num2``` are verified at every usage.
* Types of returned ```value``` are verified at every usage.
* If ```add``` is a private function of a class,
* better.js can ensure it is called only from this class.

```
function add(num1, num2){
    var value = num1 + num2
    return value
}
```

--

### Strong Typing on Return Value With Better.js

Overload ```add``` function with a better.js specification.

```
add = Bjs.Function(add, {
    return : Number
})
```

Let's try to use it incorrectly.

```
add(3, 'two');
// Exception 'invalid type for returned value.'
```

**Error Detected Thanks To Better.js**

--

### Strong Typing On Arguments

Let's add ```arguments``` in better.js specification.

```
add = Bjs.Function(add, {
    arguments : [Number, Number],
    return : Number
})
```

Let's try to use it incorrectly.

```
add(3, 'two');
// Exception 'invalid type for returned value.'
```

**Error Detected Thanks To Better.js**

--

## Let's pack it up.

--

### What Have We Learned ?


![Better.js Functions Features Summary](images/betterjs-function-features-summary.png)

See Details in [Better.js Function Documentation](http://betterjs.org/docs/betterjs-function.html)

--

# The End



