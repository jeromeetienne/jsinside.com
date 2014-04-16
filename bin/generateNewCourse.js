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
			+ '-' + pad(date.getMonth()+1, 2, 0)
			+ '-' + pad(date.getDate(), 2, 0)
			+ '-' + pad(date.getHours(), 2, 0)
			+ '-' + pad(date.getMinutes(), 2, 0)
			+ '-' + pad(date.getSeconds(), 2, 0)
			+ '-' + convertToSlug(title),
}

// Destination directory name
var dstDirName	= require('path').join(__dirname, '../videos/incubator', data.baseName)
// var dstDirName	= require('path').join('/tmp', data.baseName)

// build the destination directory
require('fs').mkdirSync(dstDirName)
console.log('build directory', dstDirName)

var templateDir	= require('path').join(__dirname, '/templateNewCourse')

// read the README.md itself
var srcName	= templateDir+'/README.md.ejs'
var extName	= require('path').extname(srcName)
if( extName === '.ejs' ){
	var srcContent	= require('fs').readFileSync(srcName, 'utf8')
	var dstContent	= require('ejs').render(srcContent, data)
	var dstBasename	= require('path').basename(srcName, extName)
	var dstFullName	= require('path').join(dstDirName, 'README.md')	
	console.log(dstFullName)
}else	console.assert(false)
	
require('fs').writeFileSync(dstFullName, dstContent, 'utf8')

console.log('generated README.md')


var cmdline	= "cp -a "+templateDir+"/slides '"+dstDirName+"/'"; 
require('child_process').exec(cmdline, function(){
	console.log('copied slides')
})


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