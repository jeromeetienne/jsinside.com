title: Functions In Javascript
output: index.html
--

<style>.slide-content{width: 1024px;}</style>
<style>.slide-content code {font-size:150%;}</style>
<style>h1 {margin-top:50px;}</style>
<base target='_blank'/>


# Functions In Javascript

## <a href='http://twitter.com/jerome_etienne'>@jerome_etienne</a>

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

