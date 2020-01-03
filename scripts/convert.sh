#!/bin/bash

##
# used imagemagick for jpg, png
# started with https://www.smashingmagazine.com/2015/06/efficient-image-resizing-with-imagemagick/
# adjusted with https://www.even.li/imagemagick-sharp-web-sized-photographs/
# used cwebp direct instead of imagemagick. significantly smaller output files
# https://web.dev/codelab-serve-images-webp/

# 2020-01-01 - simplified smush approach and generated webp from smushed jpg
##

# convert team photos to smaller jpg
./scripts/smush.sh 'static/img/team/*.*' 300 jpg 50

# convert team photos to webp
for file in static/img/team/300w/jpg/*; do ./scripts/webp.sh $file 300; done;

# smush background images
./scripts/smush.sh 'static/img/bg-img/officemap.jpg' 400 jpg 50
./scripts/webp.sh 'static/img/bg-img/400w/jpg/officemap.jpg' 400

# the following are background images and can't do srcset normally
# need something like https://aclaes.com/responsive-background-images-with-srcset-and-sizes/ 
# or to have them not as background images
./scripts/smush.sh 'static/img/bg-img/ocean.jpg' 800 jpg 50
./scripts/smush.sh 'static/img/bg-img/sail.jpg' 800 jpg 50
./scripts/smush.sh 'static/img/bg-img/sailing.jpg' 800 jpg 50

# nmsdc
./scripts/smush.sh 'static/img/core-img/nmsdc.png' 350 jpg 50
./scripts/webp.sh 'static/img/core-img/350w/jpg/nmsdc.jpg' 350
