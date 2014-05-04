title: Better.js Installation In Node.js
output: index.html
--

<style>.slide-content{width: 1024px;}</style>
<style>.slide-content pre code {font-size:160%;}</style>
<style>.slide-content pre {background-color:lightgrey;}</style>
<style>.slide-content code {font-size:120%;}</style>
<style>h1 {margin-top:50px;}</style>
<base target='_blank'/>

# Better.js Installation In Node.js

--

### How To Install Better.js in Node.js?

* Install it in your project.
* Include it in your code.
* Use it in your application.

--

### How To Install It?

Using the usual npm install line.

```
npm install better.js
```
--

### How To Include It In Your Code?

Using the usual require() line

```
var Bjs = require('better.js')
```

--

# An Example
## Just to check that it's working

--

### Let's Have A Function

A simple add function to add numbers.

```
function add(n1,n2){
    return n1+n2
}
```

--

### Let's Overload This Function With Better.js

Overload add with a better.js function.

```
add = Bjs.Function(add, {
    arguments : [Number, Number]
})
```

Let's try a wrong return type with better.js

```
add(3, 'two');
// Exception 'invalid type for returned value.'
```

**Working OK**

--

## Let's pack it up.

--

### What Have We Learned ?

1. use ```npm install better.js``` to install better.js

1. Simple Example of Better.js Function in node.js

--

# The End

