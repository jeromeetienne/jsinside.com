#!/usr/bin/env node



var data	= {
	title		: 'John is Arriving in Town',
}
data.slugifiedTitle	= convertToSlug(data.title)

var srcName	= 'templates/newVideo.ejs'
var srcContent	= require('fs').readFileSync(srcName, 'utf8')

var ejs		= require('ejs');
var output	= ejs.render(srcContent, data)

console.log('output')
console.log(output)

// from http://stackoverflow.com/questions/1053902/how-to-convert-a-title-to-a-url-slug-in-jquery	
function convertToSlug(text){
	return text.toLowerCase().replace(/[^\w ]+/g,'').replace(/ +/g,'-')
}
