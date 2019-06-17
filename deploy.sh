#!/bin/sh
npm run build
rm -rf ../ga_ruuvicharts/build
cp -r build ../ga_ruuvicharts/build
