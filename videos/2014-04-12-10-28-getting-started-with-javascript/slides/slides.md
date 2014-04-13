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

### Table Of Contents

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

* You can do your own webistes.
* You can do your own applications.
* You can control the computers you see everywhere.

> "Programming is the New Literacy" - an anonymous wise guy

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

### Why Learning Javascript?

> **"It is the most used language in the world."**

* All of what you will learn in this course, will be reused easily.
* If you look for help on this topic you will find it easily. 


--

### Why Learning Javascript?

> **"It is a standard, so it is here to stay."**

* Javascript has been standardized by [ECMA-262-5 specification](ECMAScript Language Specification - ECMA-262 Edition 5.1).
* It is supported by 
[microsoft](http://microsoft.com),
[google](http://google.com),
[mozilla](http://mozilla.com)
and many others.


* What you will learn here will be useful for a long time. 

--

### Why Learning Javascript?

> **"You will understand the magic behind all those websites."** 

* Huge websites like [facebook](http://facebook.com) or [twitter](twitter.com) depend on javascript
* All those [fun web games](http://jeromeetienne.github.io/stellar7/) are built using javascript

Useful knowledge, fun to learn, what else can we ask for ?

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

1. Open a web browser.
1. Open a Javascript console (cmd+alt+i)
1. Now you are all setup.

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

### What is a Comment?

* A comment is a text which describes what you do.
* You can write it in human language. Lucky you! :)

### An Example

```
// this is a single line comment. 
```
--

### Why Commenting Your Code Is Important?

* To explain what it does.
* Helps a lot to understand what the code is intented to do.
* Keeps it simple, short and clear.

--

### How To Write Multi-Line Comment?

Another way to comment

```
/* 
   This is a 
   multi - line comment.
*/
```

--

## Let's pack it up.

--

### What Have We Learned ?

* We have run our first Javascript. Congrats! 
* We ran it inside the browser Javascript console. 
* Comments are an efficient way to explain the code. 


--

# The End

--

--

# Variables

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

--

# Variable Type Number

--

### What is the type Number?

> **"The variable type Number is to store numbers."**

Suprising, isn't it ? :)

--

### Creating A Variable for a Number

* You can create variable for integer see *myInteger*
* or for decimal like *myDecimal*
* In javascript, they will both be of type ```Number```

```
var myInteger = 10;   // to store an integer
var myDecimal = 1.2;  // to store a decimal
```

--

## Now that we got numbers, we add them together.

--

### Adding Numbers

Let's see how to add numbers

```
var total = 3+2;

// total is now equal to 5
```

The usual way you learned in school :)

--

### Other Operations on Numbers

All the usual operations are there.

```
var total = 3 - 2;  // a substraction
var total = 3 * 2;  // a multiplication
var total = 3 / 2;  // a division
```

--

## Math... ?

--

### More advanced Operations with Math API

[Math API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)
gives access to more advanced operations

```
var result = Math.sqrt(2);    // result is square root of 2
var x      = Math.cos(3.14);  // x is cosinus of 3.14
var value  = Math.pow(2, 3);  // value is 2 to the 3 power, so 8
```

--

### Grouping Operation 

You can group operations with ```()```

* It will compute what is between **()** first
* So **(5+2) = 7** is done first
* Then this result is **3 * 7 = 21**

```
var value = 3 * (5+2);
```

--

## That's enough math for today!

--

## Let's pack it up.

--

### What Have We Learned ?

* The type ```Number``` can store numbers, either decimal or float.
* All usual math operations are available ```+```, ```-```, ```/``` etc...
* More math is available in 
[Math API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)
e.g. ```Math.cos()```


--

# The End

--

# Variable Type String

--

### What is the type String?

In human terms

> **"Type string is to store text."**

Suprising, isn't it ? :)

--

## Then, why not call that "the type *text*" instead ?

--

### Funny Historical Reason

* In the past, computer stored text as **string of character**.
* With time, it got shorten to **string**.
* So now a text is called a string.

Isn't history funny ? :P

--

## What can we do with strings then ?

--

### Adding Strings

* Adding strings is just putting one at the end of the other.
* They don't react the same way as ```Number``` 

```
var value = "he"+"llo";	// value is equal to "hello"
```

Still cool, no ?

--

## Are all the operations are possible on string too ?

--

### More advanced operations on strings

* ```+``` is the only math operator for string.
* But it is possible to play with it.


```
var value = "hello".length;        // value is equal to 5 because "hello" has 5 characters
var value = "hello".toUpperCase(); // value is "HELLO"
var value = "JOHn".toLowerCase();  // value is "john"
```

--

## Let's pack it up.

--

### What Have We Learned ?

* The type ```String``` can store text of any length.
* It is called string for funny historical reason.
* How to add strings together with ```+```
* How to modify string in more advanced ways.

Not bad. Let's pat our back :)

--

# The End


--

# Functions

--

### What Is a Function ?

Here is a definition in human terms

> **"This is a group of instructions which are called with a name"**

Not clear yet ? Don't worry it's simpler than it looks

--

## What about an example ?

--

### What Is a Function ?

* You know you will say 'Hello!' a lot.
* You group the instructions to say hello in a single place.
* You call that place ```sayHello```

```
function sayHello(){
	console.log('Hello!')
}
```

--

## Quite easy after all... Let's go a bit deeper

--

### Why Using Functions ?

* Function regroup repetitive tasks.
* ["Dont Repeat Yourself" principles](http://en.wikipedia.org/wiki/Don't_repeat_yourself)
* You divide your code into smaller groups of instructions.
* You make its organisation clearer.

--

### A More Formal Definition of Function

1. It receives **arguments** as input.
1. It executes some instructions.
1. It **returns** a value as output.

--

### Another Example of Function

A bit longer, more real-life.

```
// receive arguments name, age
function canDrink(name, age){

	// Instructions to execute
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

## Let's pack it up.

--

### What Have We Learned ?

* What are functions and how to write them.
* When to use them and why they are useful.
* Functions are important notions of programming.

We are now a bit better at it. Good!

--

# The End

--

# Loops

--

### What Is a Loop ?

Here is a definition in human terms

> **"This is a group of instructions that you repeat."**

Not clear yet ? Don't worry it's simpler than it looks

--

### An Example of Loop

* To go to the fridge, you needs to walk 15 steps
* So you repeat ```walkOneStep()``` 15 times

```
for( var i = 0; i < 15; i++ ){
	walkOneStep()l
}
```

Simple Enough

--

## Let's have a closer look at this code

--

### The ```for``` loop

* Usage: Repeat a given amount of time.
* 3 Parts: **initialisation**, **end condition** and **count instruction**.

```
for( var i = 0; i < 15; i++ ){
	walkOneStep()l
}
```

--

## Sometimes it is more than counting

--

### The ```while``` loop

* Usage: Repeat while a given condition is true.
* 2 Parts: **end condition** and **instructions to run**.


```
while( notInTheKitchen() ){
	walkOneStep()
}
```

--

## Let's pack it up.

--

### What Have We Learned ?

* Loops are **"groups of instructions that you repeat."**
* ```for``` loop repeats instructions at a given amount of time.
* ```while``` loop repeats instructions while a given condition is true.
* Loops are simple but powerful tools.

Computers like to repeat things over and over :)

--

# The End

--

# Conditions

--

### What Is a Condition ?

Here is a definition in human terms

> **"When something happens or not, depending on a condition."**

Not clear yet ? Don't worry it's simpler than it looks

--

### An Example of Condition

> **"If I wanna eat, I go to the fridge."**

* If I don't wanna eat, I stay where I am.
* If I want to eat, I go to the fridge.
* You do something or not, depending on a condition.

Simple Enough

--

## Let's have a closer look at the code


--

### Condition In Javascript

* In programming, it is called a ```if```
* 2 Parts: **condition** and **instructions to run**

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

This is called a branching.

--

### Chaining Conditions

You can refine your choice by chaining conditions.

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

## Sure but how to know if I wanna eat ? 

--

## Dunno... have you asked your belly? (please laugh :)

--

## More seriously, we will answer this in our next video.

--

## Let's pack it up.

--

### What Have We Learned ?

* Condition is **"when intructions are run or not, depending on a condition"**
* ```if``` may be used to run instructions if a condition is true.
* ```else``` may be used to run instructions if this condition is false.
* Conditions may be chained together at leisure.

--

# The End

--

# How To Express Conditions ?

--

### What is a Condition?

Here is a definition in human terms

> **"Express conditions by comparing values"**

Seems obvious no ? :)

--

## What about an example ?

--

### How To Express a Condition

* Compare the value of variable ```name```
* With the value ```"john"```
* Test if they are equal.

```
if( name === 'john' ){
	console.log('hello john!')
}
```

Easy enough ;)

--

## Is there other way to compare values ?

--

### Operators

Many ways to compare values with 
other
[operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators)

* ```age === 10``` is age equal to 10
* ```age !== 10``` is age different than 10
* ```age < 10``` is age less than 10
* ```age > 10``` is age greater than 10
* ```age >= 10``` is age greater than or equal to 10

--

### Conditions are Boolean

Each individual condition is either true or false.

```
if( age >= 18 ){
	console.log('im an adult')
}else{
	console.log('im not yet an adult')
}
```


--

### Chaining Conditions 

* Let's chain conditions together.
* Operator ```&&``` means both conditions MUST be true.
* The first condition AND the second condition MUST be true.

```
if( name === 'john' && age >= 18 ){
	console.log('you are an adult named john')
}
```

--

### Chaining Conditions 

* Operator ```||``` means at least one condition MUST be true.
* The first condition OR the second condition MUST be true.

```
if( name === 'john' || age >= 18 ){
	console.log('you are named john or you are an adult')
}
```

--

### Grouping Conditions 

Use parentheses ```()``` to group conditions

```
if( (name === 'john' && age >= 18) || iWannaEat ){
	...
}
```

More complex subtle way to express conditions.


--

## Let's pack it up.

--

### What Have We Learned ?

* We can express **"conditions by comparing values."**
* Operators show us various ways to compare values.
* There are equal to, different than, less than etc... 
* Conditions are boolean which can be chained.

--

# The End




  
  



  


