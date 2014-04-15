#!/usr/bin/env node


// get title from process
var title 	= ''
process.argv.slice(2).forEach(function(value, index){
	if( index !== 0 )	title += ' ';
	title 	+= capitalise(value)
});

// build the template data
var date	= new Date()
var data	= {
	name		: convertToSlug(title),
	title		: title,
	date		: date,
	baseName	: pad(date.getFullYear(), 4, 0)
			+ '-' + pad(date.getMonth(), 2, 0)
			+ '-' + pad(date.getDay(), 2, 0)
			+ '-' + pad(date.getHours(), 2, 0)
			+ '-' + pad(date.getSeconds(), 2, 0)
			+ '-' + convertToSlug(title),
}



var dstDirName	= require('path').join('/tmp', data.baseName)

// build the destination directory
require('fs').mkdirSync(dstDirName)



// read the template itself
var srcName	= 'templates/newVideo.ejs'
var srcContent	= require('fs').readFileSync(srcName, 'utf8')

// render the template
var dstContent	= require('ejs').render(srcContent, data)

var dstFullName	= require('path').join(dstDirName, data.baseName)
console.log(dstFullName, dstContent, 'utf8')
	
require('fs').writeFileSync(dstFullName, dstContent, 'utf8')


// console.log('output')
// console.log(output)




// var dstName	= data.baseName

// console.log('dstName', dstName)
// TODO to write this



//////////////////////////////////////////////////////////////////////////////////
//										//
//////////////////////////////////////////////////////////////////////////////////

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