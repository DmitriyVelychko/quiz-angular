BUILD_DIR = ./build
WEBPACK = ./node_modules/.bin/webpack

all: clean build

clean:
	rm -rf $(BUILD_DIR)

build:
	$(WEBPACK)

node-clean:
	rm -rf ./node_modules
