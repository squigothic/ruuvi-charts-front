#!/bin/sh
npm run build
ssh squi@marakassi.com 'rm -rf /var/www/subdomain.marakassi.com/build'
scp -r build squi@marakassi.com:/var/www/subdomain.marakassi.com/
