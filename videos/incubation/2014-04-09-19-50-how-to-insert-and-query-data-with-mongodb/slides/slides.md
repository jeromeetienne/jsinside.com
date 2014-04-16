title: How To Insert and Query Data with MongoDB
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

# How To Insert and Query Data with MongoDB

## <a href='http://twitter.com/jerome_etienne'>@jerome_etienne</a>

--

## Supposed to have mongoDB install and running :)

--

### Having Fun with Mongo Shell

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

### Query Documents

```
db.testData.find()
```

return all documents

--

### More data to insert

```
db.testData.insert({ x : 1 })
```

```
db.testData.insert({ x : 3 })
```

```
db.testData.insert({ x : 5 })
```

--

### Find All documents in your database

```
db.testData.find()
```

--

### Find documents in your database

based on equality

```
db.testData.find({ name: 'mongo' })
```

```
db.testData.find({ x: 3 })
```


--

### How to Handle Cursor

**Useful to process each record**

Let's create a cursor.

```
var cursor = db.testData.find()
```

To go thru all the documents

```
while ( c.hasNext() ) printjson( c.next() )
```

--

### How to Handle Pagination

You can limit the amount of document to find

```
db.testData.find().limit(3)
```

Or you can skip the first document

```
db.testData.find().skip(1)
```

To get the page 2, do something like 

```
db.testData.find().skip(10*2).limit(10)
```
