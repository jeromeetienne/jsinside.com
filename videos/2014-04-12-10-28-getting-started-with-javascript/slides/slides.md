title: Getting Started With Javascript 
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

# Getting Started With Javascript

## <a href='http://twitter.com/jerome_etienne'>@jerome_etienne</a>

--

## So you want to code? 

--

### What Is Code? 

* Code is [programming computers](http://en.wikipedia.org/wiki/Computer_programming).
* Instructions to make it do what you want. 
* Computers run those instructions very fast.

Over [110 million per second](http://en.wikipedia.org/wiki/Instructions_per_second)!

--

### How Useful Is Programming?

* You can do your own webiste.
* You can do your own application.
* You can control those computers you see everywhere.

TODO find the quote on programming is the new literacy.

--

## So, which kind of programming language are we gonna learn?

# The best one!

--

### What Is Javacript?

* Javascript is a programming language. 
* Running everywhere: server or browser. 
* It's used in any webpage you visit.

--

# The Basics of Javascript

--

### Ok, Let's Write Our First Javascript

* Open a web browser. 
* Open a Javascript console (cmd+alt+i)
* Type this line. 


```
console.log("Hello, world!")
```

* Hello World! appears. 
* You did your first code. Congratulations!

--

# META 

--

### Comment Your Javascript!

* A comment is a text which describes what you do.
* You can write it in human language. Lucky you! :)

Single line comment

```
// this is a single line comment. 
```

Multi line comment 

```
/* 
   This is a multi 
   line comment.
*/
```

--

### Variables 

* When you play with computers you've got values everywhere. 
* Like ```3``` is a number and it is a value. 
* Like ```"Hello"``` is a string and it is a value.


* You need to store them thus you can retrieve them later. 
* When programming, we store them in **variables**

--

### Variables 

So, let's create a variable that stores a number. 

```
var myNumber = 3; 
```

Not bad, now a text.
 

```
var myText = "Hello"
```

Not too hard hey? 

--

### Variable types 

* There are different kinds of variable types. 
* The most common are:
  * **Numbers**: it can either be a float number or an integer number
  * **String**: a line of text 
  * **Boolean**: a true or false statement 
  * **Arrays**: a collection of values 
  * **Objects**
* Let's take a look at each one. 

--

# Numbers 

--

### What are numbers?

* In Javascript a number is a value 
* A number can be either a **Float** or an **Integer**.
* When you define your variables you set their values to a number type.

--

### Creating a number 

* You can create a number using ```var```

* So, let's create a number from a constant value.

```
// This is a float:

var a = 1.2;

// This is a integer:

var b = 10;

```

--

### Creating a number 

* Pretty good!

* Now let's create a number from the value of another variable. 

```
var a = 2;
var b = a;
```

--

## Ok, now that we grasped the concept of numbers. 

--

## Let's see what we can do with them!

--

### Operators 

* We can apply math operations to numbers using basic operators.

  * Addition ```c = a + b```
  * Substraction ```c = a - b```
  * Multiplication ```c = a * b```
  * Division ```c = a / b```
  
* We can also use parentheses to separate and group expressions 

```c = (a / b) + d```

--

### Advanced Operators

* We can use advanced operators such as:

  * Modulus (division remainder) ```x = y % 2```
  
  * Increment: Given a = 5
  
  ```c = a++```, Results: c = 5 and a = 6
  
  ```c = ++a```, Results: c = 6 and a = 6 
  
--
  
### Advanced Operators 

* Decrement: Given a = 5
  
```c = a--```, Results: c = 5 and a = 4
  
```c = --a```, Results: c = 4 and a = 4

Quite easy, don't you think?


--

# Strings

--

### What Are Strings?

* Strings are text based variables. Like this: 

```Hello World```

* Strings are values, just like numbers. 
* We can create new strings.
* We can perform operations on them.

--

### Let's Create a String!

* We can enclose our text in single or double quotes.

```
// Single quotes can be used 
var str = 'Hello World';

// Double quotes can be used too
var otherStr = "Hello World";
``` 
--

### Let's Do Some Operations On Strings

* You know addition between numbers.
  * 3 + 2 = 5 
* But, what is addition between texts?


It is just putting them one after the other,
* We **concatenate** them. 

```"Hello" + " World" = "Hello World"```

--

### Length of a string 

To get the length:

```
var stringLength = "my string".length;
```

After, ```stringLength``` equals to 8. 
 
Easy no?






















 





  
  



  


