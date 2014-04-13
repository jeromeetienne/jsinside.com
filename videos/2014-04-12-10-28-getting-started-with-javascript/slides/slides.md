title: Getting Started With Javascript 
output: index.html
--

<style>.slide-content{width: 1024px;}</style>
<style>.slide-content code {font-size:150%;}</style>
<style>h1 {margin-top:50px;}</style>
<base target='_blank'/>

# Getting Started With Javascript

## <a href='http://twitter.com/jerome_etienne'>@jerome_etienne</a>

--

### Table Of Content

* [Getting Started With Javascript](#3)
* [Basics of Javascript](#10)
* [Numbers in Javascript](#17)
* [Strings in Javascript](#25)
* [Conditions in Javascript](#30)
* [Loops in Javascript](#44)
* [Functions in Javascript](#50)

--

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

> "Programming as the New Literacy" - an anonymous wise guy

--

## So, which kind of programming language are we gonna learn?

--

## The best obviously

# Javascript !

--

### What Is Javacript?

* Javascript is a programming language. 
* Running everywhere: server or browser. 
* It's used in any webpage you visit.

--

META transition

--

# The End

--

# The Basics of Javascript

--

## One has to start somewhere.

--

## So let's start here and now with our first javascript.

--

### Let's Write Our First Javascript

Just a few steps:

1. Open a web browser
1. Open a Javascript console (cmd+alt+i)
1. Now you are all setup

**You can play with javascript live!**

--

### Let's Write Our First Javascript

Just type this line

```
console.log("Hello, world!")
```

"Hello World!" appears. You did your first code.

**Congratulations!**

--

# Comments

--

### What is a Comment

* A comment is a text which describes what you do.
* You can write it in human language. Lucky you! :)

### An Example

```
// this is a single line comment. 
```
--

### Why Commenting Your Code

* To explain what it does
* Help a lot understand what the code is intented to do
* Keep it simple, short and clear

--

### What for Longer Your Javascript

Another way to comment

```
/* 
   This is a 
   multi - line comment.
*/
```

--

# Variables

--

### Variables and Values 

* When you play with computers you've got values everywhere. 
* Like ```3``` is a number and it is a value. 
* Like ```"Hello"``` is a string and it is a value.

--

### Variables and Values


* You need to store values thus you can retrieve them later. 
* When programming, we store them in **variables**

--

### Variables Usages 

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
* Depends on the values they contain

--

## Let's take a look at each one

--

### Common Types

* **Numbers**: it can either be a float number or an integer number
* **String**: a line of text 
* **Boolean**: a true or false statement 
* **Arrays**: a collection of values 
* **Objects**: a associative array

--

# Numbers 

--

### What are numbers?

* In Javascript a number is a value 
* A number can be either a **Float** or an **Integer**.
* When you define your variables you set their values to a number type.

--

### Creating A Number 

* You can create a number using ```var```
* So, let's create a number from a constant value.

```
// This is a float:

var a = 1.2;

// This is a integer:

var b = 10;
```

--

## Pretty good!

--

### Creating A Number 

Now let's create a number from the value of another variable. 

```
var a = 2;
var b = a;
```

--

## Ok, we grasped the concept of numbers. 

--

## Now, let's see what we can do with them!

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

--

# The End

--

# Conditions

--

### What is Condition ?

"When something happens or not, depending on a condition"

### Example: If wanna eat, goto the fridge
* if i dunno wanna eat, i stay where i am
* if i want to eat, i go to the frigde

Simple

--

### Condition In Javascript

In programming, it is called a ```if```

```
if( iWannaEat ){
	gotoTheFridge();
}
```

--

### Condition In Javascript

You can even do a ```else```

```
if( iWannaEat ){
	gotoTheFridge()
}else{
	stayWhereYouAre()
}
```

This is called a branching

--

### Chaining Conditions

```
if( iWannaEat ){
	gotoTheFridge()
}else if( iWannaSleep ){
	gotoBed()	
}else {
	stayWhereYouAre()	
}
```

--

## Sure but how to know if i wanna eat ? 

--

## Dunno... ask your belly :)

--

### How To Express Condition

> "By expressing comparisons between values"

```
if( name === 'john' ){
	console.log('hello john!')
}
```

* Compare the value of variable ```name```
* with the value ```"john"```
* Test if they are equal

Easy enougth

--

## Is there other way to compare values ?

--

### Operators

Many way to compare values with 
other
[operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators)

* ```age === 10``` is age equal to 10
* ```age !== 10``` is age different than 10
* ```age < 10``` is age less than 10
* ```age > 10``` is age greater than 10
* ```age >= 10``` is age greater than or equal to 10

--

### Conditions are Boolean

* each individual condition is either true or false

```
if( age >= 18 ){
	console.log('im an adult')
}else{
	console.log('im not yet an adult')
}
```


--

### Chaining Conditions 

* Let's chain conditions together
* operator ```&&``` means both conditions MUST be true
* the first condition AND the second condition MUST be true

```
if( name === 'john' && age >= 18 ){
	console.log('you are an adult named john')
}
```

--

### Chaining Conditions 

* operator ```||``` means at least one condition MUST be true
* the first condition OR the second condition MUST be true

```
if( name === 'john' || age >= 18 ){
	console.log('you are named john or you are an adult')
}
```

--

### Grouping Conditions 

* use parenthese ```()``` to group conditions

```
if( (name === 'john' && age >= 18) || iWannaEat ){
	...
}
```

More complex subtle way to express conditions


--

# The End

--

# Loops

--

### What is a loop

>  When you need to repeat something

* To go to the fridge, it needs to walk 15 steps
* repeat ```walkOneStep()``` 15 times

--

### The ```for``` loop

Repeat a given amount of time

```
for( var i = 0; i < 15; i++ ){
	walkOneStep()l
}
```

--

## Sometime it is more than counting

--

### The ```while``` loop

Repeat while a given condition is true

```
while( notInTheKitchen() ){
	walkOneStep()
}
```

--

### Loops are simple but powerful tools

* Loops are a big thing
* You will use them a lot
* Computers like to repeat things over and over :)


--

# The End

--

# Functions

--

### What Is a Function ?

> This is group of instructions which are called with a name

```
function sayHello(){
	console.log('Hello!')
}
```

* You know you will say 'Hello!' a lot
* you group the instructions to say hello in a single place
* you call that place ```sayHello```

--

### What Is a Function ?

1. it receives **arguments** as input
1. it execute some instructions
1. it **returns** a value as output

--

### What Is a Function ?

```
// receive arguments name, age
function canDrink(name, age){

	// Instructions to excecute
	console.log('Hello', name);     

	// returns value as output
	if( age < 18 ){
		return false;
	}else{
		return true;
	}
}
```

--

# The End
 





  
  



  


