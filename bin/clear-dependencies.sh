#!/bin/sh

CURRENT_DIR=$(cd $(dirname $0);pwd)
find $CURRENT_DIR/../ -name package-lock.json | xargs rm -rf
find $CURRENT_DIR/../ -name node_modules | xargs rm -rf
