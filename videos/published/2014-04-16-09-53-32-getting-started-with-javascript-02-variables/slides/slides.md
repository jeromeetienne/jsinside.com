title: Variables In Javascript
output: index.html
--

<style>.slide-content{width: 1024px;}</style>
<style>.slide-content code {font-size:150%;}</style>
<style>h1 {margin-top:50px;}</style>
<base target='_blank'/>

# Variables In Javascript
## <a href='http://twitter.com/jerome_etienne'>@jerome_etienne</a>


--

### What Is a Variable ?

Here is a definition in human terms

> **"A variable is a place with a name which stores a value"**

Not clear yet ? Don't worry it's simpler than it looks.

--

### An Example of Variable

* Let's say our variable is named ```myNumber```
* It stores the value 3
* So it contains the number 3, simple enough.

```
var myNumber = 3;
```


--

## Let's have a closer look at the code

--

### A Closer Look at Variables

* First we do the **declaration**.
* In javascript, you do that with ```var```.

```
var myNumber;
```

--

### Storing a value in a variable

* Then we do the **assignation**.
* In javascript, you do that with ```=```

```
myNumber = 3;
```

--

### Fetch the value from a variable

* Then we do the **fetching**.
* In javascript, you do that with the name of the variable.
* with ```myNumber```, in our case.

```
console.log('My number is', myNumber);

// Display 'My number is 3'
```

--

## What if i don't want to store a number ?

--

### Variables Got Types

Here is a definition in human terms

> **"The type of a variable is the category of its value."**

Not clear yet ? Don't worry it's simpler than it looks

--

## Which kind of types are possible ?

--

### Variable Type in Javascript

* **Number**: to store values like *100* or *3.14*.
* **String**: to store text like *"Hello"*.
* **Boolean**: to store true or false, very binary :)
* **Array**: to store lists of values which may be of different types.
* **Object**: to store collections of values by their names.

--

## Let's pack it up.

--

### What Have We Learned ?

* A variable is a place with a name which stores a value.
* How to declare variables with ```var```
* How to store values in it and fetch them back later.
* Those values got types!

Our next video will detail variable types.

--

# The End
