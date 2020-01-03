## How to get going

This site is built using [hugo](https://gohugo.io).  Installation instructions can be found [here](https://gohugo.io/getting-started/installing/).

Once you've got hugo running, you can start the site with the command

```
hugo server -D
```

## Don't need SCSS with this anymore

### TODO
- [ ] delete the scss files
- [ ] delete the generated style.css file
- [ ] delete the style.css.map file
- [ ] delete they style-old.css file

### BUGS
- [ ] IoT video stopped showing between these two commits:
        - 89043fad1709f367672c64e24181c966adda9c09
        - 371e2f1269f2a12517d4a19a52fba1c7f12937e9
        It appears to be changes to the CSS styling caused this

generated pwa images with: pwabuilder https://www.zealitconsultants.com -i "/Users/kijanawoodard/Downloads/Zeal Logo - Full-01-1.png"

processed sailing background video with https://converterpoint.com/.

resized images following advice from https://www.smashingmagazine.com/2015/06/efficient-image-resizing-with-imagemagick/

To resize a new image:
`brew install imagemagick`
then run 
`./scripts/smush.sh INPUT_PATH RESIZE_WIDTH OUTPUT_PATH FORMAT_VALUE QUALITY_VALUE`
Quality value is set to 82 (recommended in article) if not set.

ex:
`./scripts/smush.sh 'static/img/team/*.*' 150 static/img/team/150x150/ jpg`
`./scripts/smush.sh 'static/img/team/*.*' 50 'static/img/team/50x50/' jpg`

`./scripts/smush.sh 'static/img/team/leong.jpg' 150 'static/img/team/150x150/' webp`