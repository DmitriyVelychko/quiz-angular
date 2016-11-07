BUILD_DIR = ./build
WEBPACK = ./node_modules/.bin/webpack

all: clean dir copy compile

prod: clean dir copy build-prod

clean:
	rm -rf $(BUILD_DIR)

dir:
	mkdir $(BUILD_DIR)

compile:
	$(WEBPACK)

build-prod:
	@NODE_ENV=production make

copy:
	cp app/index.html $(BUILD_DIR)/index.html && cp --parents quiz/**/test.json $(BUILD_DIR)

node-clean:
	rm -rf ./node_modules
