title: How To Express Conditions ?
output: index.html
--

<style>.slide-content{width: 1024px;}</style>
<style>.slide-content code {font-size:150%;}</style>
<style>h1 {margin-top:50px;}</style>
<base target='_blank'/>

# How To Express Conditions ?

## <a href='http://twitter.com/jerome_etienne'>@jerome_etienne</a>

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




  
  



  


