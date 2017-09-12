var tinycolor = require("tinycolor2");
var ntc = require("ntc");
var ColorScheme = require("color-scheme");

function PallyPal() {
  this._scheme = "mono";
  this._variation = "default";
  this._buildPalette = function(color){

    var color = tinycolor(color);
    var palette = new ColorScheme();
    palette.from_hue(color.toHsl().h).scheme(this._scheme).variation(this._variation); // Use the 'soft' color variation

    return palette.colors();
  },
  this._createNames = function(colors){

    var final = [];

    for (var i = 0; i < colors.length; i++) {
      var color = tinycolor(colors[i]);

      final.push({
        name: ntc.name("#" + color.toHex())[1],
        hex: "#" + color.toHex(),
        rgb: color.toRgb(),
        hsl: color.toHsl(),
        hsv: color.toHsv()
      });
    }

    return final;
  }
};

PallyPal.prototype.paint = function(color, options) {

    // set options
    options = options || {};

    // scheme
    //[ mono, monochromatic, contrast, triade, tetrade, analogic ]
    // default is "mono"
    this._scheme = options.scheme ? options.scheme : this._scheme;
    // variation
    //[ default, pastel, soft, light, hard, pale ]
    // default is "default"
    this._variation = options.variation ? options.variation : this._variation;

    // color scheme generation done with https://github.com/c0bra/color-scheme-js
    var colors = this._buildPalette(color);
    // loop over and use ntc (https://www.npmjs.com/package/ntc)
    colors = this._createNames(colors);

    return colors;

};

module.exports = PallyPal;
