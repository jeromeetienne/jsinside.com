title: How To Create Your First Project with Express.js
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

# How To Create Your First Project with Express.js

## <a href='http://twitter.com/jerome_etienne'>@jerome_etienne</a>

--

## You are supposed to have node and npm already

--

## no ? install them i'll wait :)

# [node.js site](http://nodejs.org/)

--

### What is express.js

* [expressjs.com](http://expressjs.com)
* MVC framework in [node.js](http://nodejs.org)

--

### Install express.js

Let's install express itself

```
sudo npm -g install express
```

--

## It is now installed! :)

--

### Let's generate our first project

Use this line 

```
express myapps
```

* It will create a directory ```myapps```
* with a default express configuration

--

### Finish installations

Use those lines

```
cd myapps
npm install
```

* It will install the dependancies

--

### Ready to run it!

Use this command to launch the server

```
node app.js
```

and go to [http://127.0.0.1:3000](http://127.0.0.1:3000) to see it live! :)

--

### Customize Config for Template Engine

* express default to jade. 
* add [ejs](http://embeddedjs.com/) engine support (defaults to jade)
```
express --ejs myapps
``` 
* add [jshtml](https://github.com/elmerbulthuis/jshtml) engine support (defaults to jade)
```
express --jshtml myapps
``` 
* add [hogan.js](http://twitter.github.io/hogan.js/) engine support
```
express --hogan myapps
``` 
--

### Customize Config for CSS Engine

* express default to plain css. 
* add [less](http://lesscss.org/) support
```
express --css less myapps
``` 
* add [stylus](http://learnboost.github.io/stylus/) support
```
express --css stylus myapps
``` 

--

### Packing It Up

* you learned how to install express.js
* you learned how to generate your first project
* you learned how to customized your project

**Excelent!**

Let's look again at [http://127.0.0.1:3000](http://127.0.0.1:3000)!










