#!/bin/bash

##
# used imagemagick for jpg, png
# started with https://www.smashingmagazine.com/2015/06/efficient-image-resizing-with-imagemagick/
# adjusted with https://www.even.li/imagemagick-sharp-web-sized-photographs/
# used cwebp direct instead of imagemagick. significantly smaller output files
# https://web.dev/codelab-serve-images-webp/
##

#convert team photos to smaller jpg and jpg2000
./scripts/smush.sh 'static/img/team/*.*' 150 jpg
#./scripts/smush.sh 'static/img/team/*.*' 50 jpg

#convert team photos to webp
for file in static/img/team/*; do ./scripts/webp.sh $file 150; done;
#for file in static/img/team/*; do ./scripts/webp.sh $file 50; done;