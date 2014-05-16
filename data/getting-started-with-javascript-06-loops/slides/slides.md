title: Loops In Javascript
output: index.html
--

<style>.slide-content{width: 1024px;}</style>
<style>.slide-content code {font-size:150%;}</style>
<style>h1 {margin-top:50px;}</style>
<base target='_blank'/>

# Loops In Javascript

## <a href='http://twitter.com/jerome_etienne'>@jerome_etienne</a>

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
