#!/usr/bin/env node


// get title from process
var title 	= ''
process.argv.slice(2).forEach(function(value, index){
	if( index !== 0 )	title += ' ';
	title 	+= capitalise(value)
});


// build the template data
var data	= {
	title		: title,
	date		: new Date(),
}
data.name	= convertToSlug(data.title)

// read the template itself
var srcName	= 'templates/newVideo.ejs'
var srcContent	= require('fs').readFileSync(srcName, 'utf8')

// render the template
var output	= require('ejs').render(srcContent, data)


console.log('output')
console.log(output)


var dstName	= pad(data.date.getFullYear(), 4, 0)
			+ '-' + pad(data.date.getMonth(), 2, 0)
			+ '-' + pad(data.date.getDay(), 2, 0)
			+ '-' + pad(data.date.getHours(), 2, 0)
			+ '-' + pad(data.date.getSeconds(), 2, 0)
			+ '-' + data.name

console.log('dstName', dstName)

// from http://stackoverflow.com/questions/1053902/how-to-convert-a-title-to-a-url-slug-in-jquery	
function convertToSlug(text){
	return text.toLowerCase().replace(/[^\w ]+/g,'').replace(/ +/g,'-')
}

function pad(input, length, padding)
{
  while((input = input.toString()).length + (padding = padding.toString()).length < length)
  {
    padding += padding;
  }
  return padding.substr(0, length - input.length) + input;
}

function capitalise(string)
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}