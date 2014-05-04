 # makefile to automatize simple operations

server:
	docpad run

prepare:
	bin/generateHtmlPageFromCourses.js videos/published/*
	bin/generateHtmlPageFromCourses.js videos/incubator/*-getting-started-with-javascript-0*
	bin/generateHtmlPageFromCourses.js videos/incubator/*-betterjs-introduction-0*

build: prepare
	docpad generate

clean:
	docpad clean
	rm -f src/documents/items/*
	rm -f src/documents/course/*
	rm -rf src/files/data/*

deploy:
	docpad deploy-ghpages --env static
