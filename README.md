# PallyPal

## Description

A color palette generator that includes the semantic name of the color.

## Usage

Install: `npm install pallypal`

Run:

```javascript

var PallyPal = require('pallypal');

var pallypal = new PallyPal();

var colorsObj = pallypal.paint('#4c7dc3', { // pass in color and options
  scheme: "mono",
  variation: "default"
});


//   colorsObj = {
//   scheme: "mono",
//   variation: "default"
//   colors: [ { name: 'Deep Cerulean',
//       hex: '#0088a1',
//       rgb: { r: 0, g: 136, b: 161, a: 1 },
//       hsl: { h: 189.31677018633542, s: 1, l: 0.3156862745098039, a: 1 },
//       hsv: { h: 189.31677018633542, s: 1, v: 0.6313725490196078, a: 1 } },
//     { name: 'Blue Stone',
//       hex: '#005f70',
//       rgb: { r: 0, g: 95, b: 112, a: 1 },
//       hsl: { h: 189.10714285714286, s: 1, l: 0.2196078431372549, a: 1 },
//       hsv: { h: 189.10714285714286, s: 1, v: 0.4392156862745098, a: 1 } },
//     { name: 'Onahau',
//       hex: '#bff5ff',
//       rgb: { r: 191, g: 245, b: 255, a: 1 },
//       hsl: { h: 189.375, s: 1, l: 0.8745098039215686, a: 1 },
//       hsv: { h: 189.375, s: 0.25098039215686274, v: 1, a: 1 } },
//     { name: 'Anakiwa',
//       hex: '#80ebff',
//       rgb: { r: 128, g: 235, b: 255, a: 1 },
//       hsl: { h: 189.4488188976378, s: 1, l: 0.7509803921568627, a: 1 },
//       hsv: { h: 189.4488188976378, s: 0.4980392156862745, v: 1, a: 1 } },
//   { name: 'Indigo',
//   hex: '#4c7dc3',
//   rgb: { r: 76, g: 125, b: 195, a: 1 },
//   hsl:
//    { h: 215.2941176470588,
//      s: 0.49790794979079495,
//      l: 0.5313725490196078,
//      a: 1 },
//   hsv:
//    { h: 215.2941176470588,
//      s: 0.6102564102564102,
//      v: 0.7647058823529411,
//      a: 1 },
//   is_original: true }]
// }
```

## Color

The color can be passed in as hex, RGB, HSL, HSV, or CSS named color.

## Options

The two options are `scheme` and `variation`. These come directly from the options for [`color-scheme`](https://www.npmjs.com/package/color-scheme)

### Scheme

[full docs here](https://www.npmjs.com/package/color-scheme#schemes)

Choices: mono, monochromatic, contrast, triade, tetrade, analogic Default: mono

### Variations

[full docs here](https://www.npmjs.com/package/color-scheme#variations)

Choices: default, pastel, soft, light, hard, pale Default: default

## Semantic Naming

The names are generated using [ntc](https://www.npmjs.com/package/ntc).
