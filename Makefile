 # makefile to automatize simple operations

server:
	docpad run

deploy:
	docpad deploy-ghpages --env static
