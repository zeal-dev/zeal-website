#!/bin/bash

##
# used imagemagick for jpg, png
# started with https://www.smashingmagazine.com/2015/06/efficient-image-resizing-with-imagemagick/
# adjusted with https://www.even.li/imagemagick-sharp-web-sized-photographs/
# used cwebp direct instead of imagemagick. significantly smaller output files
# https://web.dev/codelab-serve-images-webp/

# 2020-01-01 - simplified smush approach and generated webp from smushed jpg
##

#convert team photos to smaller jpg
./scripts/smush.sh 'static/img/team/*.*' 300 jpg 50

#convert team photos to webp
for file in static/img/team/300w/jpg/*; do ./scripts/webp.sh $file 300; done;
#for file in static/img/team/*; do ./scripts/webp.sh $file 50; done;