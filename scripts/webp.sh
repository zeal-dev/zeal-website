#!/bin/bash
input=$1
width=$2
path=${input%/*}/../webp #output path
filename=${input##*/}
basename=${filename%.*}
output=$path/$basename.webp
quality=${3:-75}

echo input file $input, width $width, output path $output, quality $quality

mkdir -p $path #make sure the folder exists
#cwebp $input -q $quality -sharpness 0 -resize $width 0 -o $output 
cwebp $input -q $quality -o $output 