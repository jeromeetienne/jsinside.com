#!/bin/env node

var fs		= require('fs')

var srcPath	= 'src/documents/items/'
var dstPath	= 'src/documents/course/'

var basenames	= require('fs').readdirSync(srcPath)

// basenames	= [basenames[0]]

basenames.forEach(function(basename){
	// console.log('basename', basename)
	var srcName	= srcPath+basename
	var content	= require('fs').readFileSync(srcName, 'utf8')

	// add 'layout: course' in content
	var lines	= content.split('\n')
	lines.splice(1, 0, 'layout\t\t: course')
	content		= lines.join('\n')

	// remove courseData header from content
	var content	= removeHeaderLine(content, 'courseData')

	// get dstName from name header value	
	var nameValue	= getHeaderValue(content, 'name')
	console.assert(nameValue !== undefined)
	var dstName	= dstPath+nameValue+'.html.md'
// console.log('srcName', srcName, dstName)
// return



	// get slugified title	
	// var titleValue	= getHeaderValue(content, 'title')
	// var slugTitle	= convertToSlug(titleValue)
	// console.log('titleValue', titleValue, slugTitle)


	fs.writeFileSync(dstName, content, 'utf8')
	

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
})