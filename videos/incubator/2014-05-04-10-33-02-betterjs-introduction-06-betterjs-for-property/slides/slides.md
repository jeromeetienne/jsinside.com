title: Better.js For Property
output: index.html
--

<style>.slide-content{width: 1024px;}</style>
<style>.slide-content pre code {font-size:160%;}</style>
<style>.slide-content pre {background-color:lightgrey;}</style>
<style>.slide-content code {font-size:120%;}</style>
<style>h1 {margin-top:50px;}</style>
<base target='_blank'/>

# Better.js For Property


--

### What Can Better.js Do For Your Properties?

* Verify the strong typing of your property.

* Support private if this property belongs to a class.

--

# An Example
## Show, Don't Tell

--

### Property Type Without Better.js

Let's define a simple object with a ```name``` property which is a string.

```
var foo = {
    name : 'jsinside'
};
```

Wrong type without better.js

```
foo.name = 99
// now foo.name is equal to 99
```

**Error Not Detected**

--

### Strong Typing With Better.js

Overload ```name``` property with a better.js specification.

```
Bjs.Property(foo, 'name', {
  type  : String,
})
```

Let's try a wrong type with better.js

```
foo.name = 99
// Exception 'invalid type for property name.'
```

**Error Detected Thanks To Better.js**

--

### Private Properties without Better.js

* Let's do a Cat class.
* It got a private property class.

```
var Cat = function(name){
  this._name = name
}
```

Simply rely on conventions.

--

### Private Properties without Better.js

Let's use it from outside the class.

```
var cat = new Cat('kitty')
console.log(cat._name)
// display 'kitty'
```

**Error Not Detected in Plain Javascript**

--


### Private Properties with Better.js

Let's add a better.js specification at the end of the constructor.

```
var Cat = function(name){
    this._name = name
    
    Bjs.Property(this, '_name', {
        private : true
    })
}
```

--

### Private Properties with Better.js

Invalid usage with better.js

```
var cat = new Cat('kitty')
console.log(cat._name)
// Exception thrown access to private property "_name"
```

**Error Detected thanks to better.js**


--

## Let's pack it up.

--

### What Have We Learned ?

![Better.js Property Features Summary](images/betterjs-property-features-summary.png)

See Details in [Better.js Property Documentation](http://betterjs.org/docs/betterjs-property.html)

--

# The End




