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

generated pwa images with: pwabuilder https://www.zealitconsultants.com -i "/Users/kijanawoodard/Downloads/Zeal Logo - Full-01-1.png"

resized images following advice from https://www.smashingmagazine.com/2015/06/efficient-image-resizing-with-imagemagick/

To resize a new image:
`brew install imagemagick`
then run 
`./scripts/smush.sh INPUT_PATH RESIZE_WIDTH OUTPUT_PATH`

ex:
`./scripts/smush.sh 'static/img/team/*.*' 150 static/img/team/150x150/`
`./scripts/smush.sh 'static/img/team/*.*' 50 static/img/team/50x50/`
`input path static/img/team/leong.jpg, width 150, output path static/img/team/150x150/`