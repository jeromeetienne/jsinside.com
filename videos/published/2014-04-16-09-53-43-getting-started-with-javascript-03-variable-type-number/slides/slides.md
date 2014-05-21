title: Variable Type Number
output: index.html
--

<style>.slide-content{width: 1024px;}</style>
<style>.slide-content code {font-size:150%;}</style>
<style>h1 {margin-top:50px;}</style>
<base target='_blank'/>


# Variable Type Number
## <a href='http://twitter.com/jerome_etienne'>@jerome_etienne</a>

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
