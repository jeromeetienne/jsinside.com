title: How to use Threex Game Extension for Three.js
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

# How to use Threex Game Extension for Three.js

## <a href='http://twitter.com/jerome_etienne'>@jerome_etienne</a>

--

### What is THREEx ?

* [homepage](http://jeromeetienne.github.io/threex/)
* many extensions already - 40 and counting
* all dedicated to help you write games in three.js

--

### How to find a THREEx game extension

* ```bower search threex.```
* from [homepage](http://jeromeetienne.github.io/threex)

--

### How to install THREEx game extensions

* [bower](http://bower.io/) - from twitter
* plain .zip file from github

--

### How to use a THREEx game extension

* with ```script``` 

```
 <script src='path/to/threex.extension/threex.extension.js'></script>
 // ... here add other files you may need
```

--

### How to use a THREEx game extension

* with require.js

```
require(['path/to/threex.extension/package.require.js'], function(){
	// ... your code goes here
})
```

--

### General

* All documented in the README.md. [threex.oimo](https://github.com/jeromeetienne/threex.oimo)
* license are typically MIT, so no worry