#!/bin/bash
input=$1
width=$2
format=$3
output=${input%/*}/${width}w/$format #output path
quality=${4:-98}

echo input file $input, width $width, output path $output, quality $quality

mkdir -p $output #make sure the folder exists
#mogrify -path $output -filter Triangle -define filter:support=2 -thumbnail $width -unsharp 0.25x0.08+8.3+0.045 -dither None -posterize 136 -quality $quality -define jpeg:fancy-upsampling=off -define png:compression-filter=5 -define png:compression-level=9 -define png:compression-strategy=1 -define png:exclude-chunk=all -define webp:lossless=true -interlace none -colorspace sRGB -format $format $input
mogrify -path $output -thumbnail $width -unsharp 2x0.5+0.9+0 -quality $quality -format $format $input