#!/usr/bin/env node


var fs		= require('fs')
var path	= require('path')

var srcPaths	= process.argv.slice(2)

var flow	= Flow()

srcPaths.forEach(function(srcPath){
	flow.seq(function(next){
		var basename	= path.basename(srcPath)

		// read the README.md
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

		// create src/files/data if needed
		var dataDirname	= __dirname+'/../src/files/data'
		fs.existsSync(dataDirname) || fs.mkdirSync(dataDirname)

		// create src/file/data/
		// FIXME it is a duplication
		var dataDirname	= __dirname+'/../src/files/data/'+name
		fs.existsSync(dataDirname) || fs.mkdirSync(dataDirname)

		Flow().seq(function(nextNestest){
			// to copy /files
			var srcFullname	= srcPath+'/files'
			if( fs.existsSync(srcFullname) )	nextNestest()
			var cmdline	= 'cp -a '+srcFullname+' '+dataDirname+'/'; 
			require('child_process').exec(cmdline, function(){
				nextNestest()
			})
		}).seq(function(nextNestest){
			// to build /slides
			var srcFullname	= srcPath+'/slides'
			if( fs.existsSync(srcFullname) )	nextNestest()
			var cmdline	= 'cd '+srcFullname+'; make build'; 
			console.log('exec', cmdline);	nextNestest()
			require('child_process').exec(cmdline, function(){
				nextNestest()
			})
		}).seq(function(nextNestest){
			// to copy /slides
			var srcFullname	= srcPath+'/slides'
			if( fs.existsSync(srcFullname) )	nextNestest()
			var cmdline	= 'cp -a '+srcFullname+' '+dataDirname+'/'; 
			// console.log('exec', cmdline);	nextNestest()
			require('child_process').exec(cmdline, function(){
				nextNestest()
			})
		}).seq(function(){
			next()
		})
	})
})


//////////////////////////////////////////////////////////////////////////////////
//		Pseudo .md meta processor					//
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

function Flow(){
	var self, stack = [], timerId = setTimeout(function(){ timerId = null; self._next(); }, 0);
	return self = {
		destroy : function(){ timerId && clearTimeout(timerId); },
		par	: function(callback, isSeq){
			if(isSeq || !(stack[stack.length-1] instanceof Array)) stack.push([]);
			stack[stack.length-1].push(callback);
			return self;
		},seq	: function(callback){ return self.par(callback, true);	},
		_next	: function(err, result){
			var errors = [], results = [], callbacks = stack.shift() || [], nbReturn = callbacks.length, isSeq = nbReturn == 1;
			for(var i = 0; i < callbacks.length; i++){
				(function(fct, index){
					fct(function(error, result){
						errors[index]	= error;
						results[index]	= result;		
						if(--nbReturn == 0)	self._next(isSeq?errors[0]:errors, isSeq?results[0]:results)
					}, err, result)
				})(callbacks[i], i);
			}
		}
	}
};


