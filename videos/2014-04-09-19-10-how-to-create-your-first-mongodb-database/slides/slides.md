title: How To Create Your First MongoDB database
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

# How To Create Your First MongoDB database

## <a href='http://twitter.com/jerome_etienne'>@jerome_etienne</a>

--

### What is MongoDB

* [NoSQL](http://en.wikipedia.org/wiki/NoSQL) database
* open source
* [http://www.mongodb.org/](http://www.mongodb.org/) the homepage

--

### How to Install It

* [install it on MaxOSx](http://docs.mongodb.org/manual/tutorial/install-mongodb-on-os-x/)
* [install it on Linux](http://docs.mongodb.org/manual/tutorial/install-mongodb-on-ubuntu/)
* [install it on Window](http://docs.mongodb.org/manual/tutorial/install-mongodb-on-windows/)

--

### Launch MongoDB

Let's create a place for mongoDB to store its data

```
mkdir mongoData
```

Now launch mongod itself 

```
mongod --dbpath mongoData
```

--

### MongoDB is now installed!

--

### Let's Have Fun with Mongo Shell

just type this line in a terminal 

```
mongo
```

All in javascript! Yeah :)

--

### Mongo Shell Commands

Here is a few commands

* ```show dbs```: to show the list of all databases
* ```use mydb```: to create/use the database name *mydb*
* ```db``` : to show current database

--

### Mongo Insert data

mongo calls them **document**

```
db.testData.insert({
	name : "mongo"
})
```

--

### Show all data

```
db.testData.find()
```
