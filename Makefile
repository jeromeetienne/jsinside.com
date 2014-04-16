 # makefile to automatize simple operations

server:
	docpad run

build:
	bin/generateHtmlPageFromCourses.js videos/published/*
	bin/generateHtmlPageFromCourses.js videos/incubator/*getting-started-with-javascript-0*
	docpad generate

clean:
	docpad clean
	rm -f src/documents/items/*
	rm -f src/documents/course/*

deploy:
	docpad deploy-ghpages --env static
