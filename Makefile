 # makefile to automatize simple operations

server:
	docpad run

build:
	docpad generate

deploy:
	docpad deploy-ghpages --env static
