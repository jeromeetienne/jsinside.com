 # makefile to automatize simple operations

server:
	docpad run

build:
	docpad generate

clean:
	docpad clean
	rm src/documents/items/*
	rm src/documents/course/*

deploy:
	docpad deploy-ghpages --env static
