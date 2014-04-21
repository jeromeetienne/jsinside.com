title: How To Install Three.js Boilerplate With Yeoman
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

# How To Install Three.js Boilerplate With Yeoman

## <a href='http://twitter.com/jerome_etienne'>@jerome_etienne</a>

--

### What is Yeoman ?

* "scaffolding tool for modern webapps"
* [homepage](http://yeoman.io/)

#### install yeoman

```
sudo npm install -g yo
```

--

### What is THREE.js boilerplate ?

* to run your own three.js project
* in a few seconds
* designed for fast bootstrap
* designed for good practices

--

### Install Yeoman Generator For Boilerplate

just use this line 
```
sudo npm install -g generator-threejs-boilerplate
```

--

### Generate Your First Boilerplate


#### 1. Create a folder for your three.js project

```
mkdir mythreejsproject
cd mythreejsproject
```

#### 2. Generate your three.js boilerplate

```
yo threejs-boilerplate
```

Take the default one


--

### Show Me The Code

* Lets look in ```index.html```

```
subl index.html
```

--

### Tuning Boilerplate To Your Needs

* with/without [require.js](http://requirejs.org/)
* with/without WebGL detection
* with/without window resize

