title: Better.js Installation In Browser
output: index.html
--

<style>.slide-content{width: 1024px;}</style>
<style>.slide-content pre code {font-size:160%;}</style>
<style>.slide-content pre {background-color:lightgrey;}</style>
<style>.slide-content code {font-size:120%;}</style>
<style>h1 {margin-top:50px;}</style>
<base target='_blank'/>

# Better.js Installation In Browser

--

### How To Install Better.js in Browser

* Install it in your project.
* Include it in your page.
* Use it in your application.

--

### How To Install It? Download From Github

* Download it from [better.js github repository](http://github.com/jeromeetienne/better.js/)
* take ***/build/better.js*** folder as usual
* [direct link](https://raw.githubusercontent.com/jeromeetienne/better.js/master/build/better.js)

--

### How To Install It? Via Bower Package

* [bower](http://bower.io) package manager 
done by [twitter](http://twitter.com)
* bower is like "npm but for brower"

```
bower install better.js
```

--

### How To Include It In Your Code?

With the usual [script tag](https://developer.mozilla.org/en/docs/Web/HTML/Element/script)

```
<!doctype html>
<script src="better.js"></script>
<script>
    // .. put your code here
</script>
```
--

# An Example
## Just to check that it's working

--

### Let's Have A Function in a Page

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

1. Install it via download From [better.js github repository](http://github.com/jeromeetienne/better.js/)

1. Install it with bower using **bower install better.js**

1. Include it in your page with **< script src="better.js">< /script> **

1. Simple Example of Better.js Function in browser.

--

# The End

