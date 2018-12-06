#!/bin/sh
npm run build
rm -rf ../ruuvibackend/build
cp -r build ../ruuvibackend/build
