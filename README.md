# External Bundles

The following repo shows an interesting method to compile modules into external files with aliased names and later uses them.

To run the example do the following:
`$ npm start`

What's happening here is that we're building two bundle's via browserify.

One bundle is called `modules.js` and will contain `moduleA.js` and `moduleB.js` which are aliased as `module-a` and `module-b`.

This is done through the command: 
`$ browserify -r ./moduleA.js:module-a -r ./moduleB.js:module-b > modules.js`

Then we could create a second bundle of `index.js` with the following:
`$ browserify index.js -x module-a -x module-b -o bundle.js`

In the case of this repo the above is actually handled/served by `budo`:
`$ budo index.js -- -x module-a -x module-b | opnr`