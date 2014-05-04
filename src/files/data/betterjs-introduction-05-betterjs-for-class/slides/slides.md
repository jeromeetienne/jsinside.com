title: Better.js For Class
output: index.html
--

<style>.slide-content{width: 1024px;}</style>
<style>.slide-content pre code {font-size:160%;}</style>
<style>.slide-content pre {background-color:lightgrey;}</style>
<style>.slide-content code {font-size:120%;}</style>
<style>h1 {margin-top:50px;}</style>
<base target='_blank'/>

# Better.js For Class

--

### What Can Better.js Do For Your Classes?

* Verify strong typing of your class properties.

* Verify strong typing of your constructor arguments.

* Support private for properties and functions.

--

# An Example
## Show, Don't Tell

--

### Private Without Better.js

Private only based on convention.

```
var Cat = function(name){
  this._name  = name
}
```

Let's try to use it incorrectly.

```
var cat = new Cat('kitty')
console.log('name is', cat._name)
// display 'name is kitty'
```

**Error Not Detected in Plain Javascript**

--

### Private With Better.js

Make a better.js for your class.

```
Cat = Bjs.Class(Cat, {
  privatize : true
})
```

Let's try to use it incorrectly.

```
var cat = new Cat('kitty')
console.log('name is', cat._name)
// display 'name is kitty'
```

**Error Detected thanks to better.js**

--

### Strong Typing for Arguments With Better.js

Let's overload the class with a better.js

```
Cat = Bjs.Class(Cat, {
    arguments : [String]
})
```

Let's try to use it incorrectly.

```
var cat = new Cat()
// Exception thrown "Invalid arguments 0 - Should be String"
```

**Error Detected thanks to better.js**

--

### Strong Typing for Properties With Better.js

Let's overload the class with a better.js

```
Cat = Bjs.Class(Cat, {
    properties : {
        _name   : String,
    }
})
```

Let's try to use it incorrectly.

```
var cat = new Cat(99)
// Exception thrown "Invalid property ._name - Should be String"
```

**Error Detected thanks to better.js**

--

## Let's pack it up.

--

### What Have We Learned ?

![Better.js Class Features Summary](images/betterjs-class-features-summary.png)

See Details in [Better.js Class Documentation](http://betterjs.org/docs/betterjs-class.html)

--

# The End



