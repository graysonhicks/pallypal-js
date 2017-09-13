var tinycolor = require("tinycolor2");
var ntc = require("ntc");
var ColorScheme = require("color-scheme");

function PallyPal() {
  this._color = {};
  this._scheme = "mono";
  this._variation = "default";
  this._buildPalette = function(){

    var color = tinycolor(this._color);
    var palette = new ColorScheme();
    palette.from_hue(color.toHsl().h).scheme(this._scheme).variation(this._variation); // Use the 'soft' color variation

    return palette.colors();
  },
  this._createNames = function(colors){
    var primaryColorHex = this._color.toHex();
    var final = {};
    final.colors = [];

    for (var i = 0; i < colors.length; i++) {
      var color = tinycolor(colors[i]);

      final.colors.push({
        name: ntc.name("#" + color.toHex())[1],
        hex: "#" + color.toHex(),
        rgb: color.toRgb(),
        hsl: color.toHsl(),
        hsv: color.toHsv()
      });
    }

    // adds the original color passed in to PallyPal to the array and marks it as is_primary
    final.colors.push({
      name: ntc.name("#" + this._color.toHex())[1],
      hex: "#" + this._color.toHex(),
      rgb: this._color.toRgb(),
      hsl: this._color.toHsl(),
      hsv: this._color.toHsv(),
      is_original: true
    });

    final.scheme = this._scheme;
    final.variation = this._variation;

    return final;
  }
};

PallyPal.prototype.paint = function(color, options) {

    // set options
    options = options || {};

    // set tiny color object
    this._color = tinycolor(color);

    // scheme
    //[ mono, monochromatic, contrast, triade, tetrade, analogic ]
    // default is "mono"
    this._scheme = options.scheme ? options.scheme : this._scheme;
    // variation
    //[ default, pastel, soft, light, hard, pale ]
    // default is "default"
    this._variation = options.variation ? options.variation : this._variation;

    // color scheme generation done with https://github.com/c0bra/color-scheme-js
    var colors = this._buildPalette();
    // loop over and use ntc (https://www.npmjs.com/package/ntc)
    colors = this._createNames(colors);

    return colors;

};

module.exports = PallyPal;
