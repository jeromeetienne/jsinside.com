title: Conditions In Javascript
output: index.html
--

<style>.slide-content{width: 1024px;}</style>
<style>.slide-content code {font-size:150%;}</style>
<style>h1 {margin-top:50px;}</style>
<base target='_blank'/>

# Conditions In Javascript

## <a href='http://twitter.com/jerome_etienne'>@jerome_etienne</a>

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
