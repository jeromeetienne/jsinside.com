#!/usr/bin/env node


var fs		= require('fs')
var path	= require('path')

var srcPaths	= process.argv.slice(2)

srcPaths.forEach(function(srcPath){
	var basename	= path.basename(srcPath)

	var srcFileName	= path.join(srcPath, 'README.md')
	var srcContent	= fs.readFileSync(srcFileName, 'utf8')
	console.log('processing', basename)

	// produce the item and put it in src/documents/items
	var itemContent		= addHeaderLine(srcContent, 'courseData\t: true')
	var itemFileName	= path.join(__dirname, '../src/documents/items', basename+'.html.md')
	fs.writeFileSync(itemFileName, itemContent)

	// produce the item and put it in src/documents/items
	var courseContent	= addHeaderLine(srcContent, 'layout\t\t: course')
	var name		= getHeaderValue(courseContent, 'name');
	var courseFileName	= path.join(__dirname, '../src/documents/course', name+'.html.md')
	fs.writeFileSync(courseFileName, courseContent)

	console.log('processed', basename)
})


//////////////////////////////////////////////////////////////////////////////////
//										//
//////////////////////////////////////////////////////////////////////////////////

function addHeaderLine(content, text){
	var lines	= content.split('\n')
	lines.splice(1, 0, text);
	content		= lines.join('\n')
	return content;	
}

function getHeaderValue(content, key){
	var lines	= content.split('\n')
	var foundValue
	lines.forEach(function(line){
		var re = new RegExp(key+"[\t ]*:[\t ]*(.*)[\t ]*");
		var matches	= line.match(re)
		// console.log('line', line, matches)
		if( matches === null )		return
		if( foundValue !== undefined )	return
		foundValue	= matches[1]
	})
	return foundValue		
}

function removeHeaderLine(content, key){
	var lines	= content.split('\n')
	var foundValue	= null
	var lines	= lines.filter(function(line){
		var re = new RegExp(key+"[\t ]*:[\t ]*(.*)[\t ]*");
		// var re = new RegExp(key);
		var matches	= line.match(re)
		// console.log('line', line, matches)
		if( matches === null )	return true
		return false
	})
	content		= lines.join('\n')
	return content
}

// from http://stackoverflow.com/questions/1053902/how-to-convert-a-title-to-a-url-slug-in-jquery	
function convertToSlug(text){
	return text.toLowerCase().replace(/[^\w ]+/g,'').replace(/ +/g,'-')
}



