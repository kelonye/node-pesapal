test: node_modules
	@mocha -R dot test

node_modules:
	@npm i

.PHONY: test
