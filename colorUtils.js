let darken = (hslColor, percent) =>
  hslColor.map((v, i) => i === 2 ? v + percent : v);
let lighten = (hslColor, percent) =>
  hslColor.map((v, i) => i === 2 ? v - percent : v);

let hslToRgb = hslColor => {
  let [h, s, l] = hslColor;
  s /= 100;
  l /= 100;

  let c = (1 - Math.abs(2 * l - 1)) * s,
      x = c * (1 - Math.abs((h / 60) % 2 - 1)),
      m = l - c/2,
      r = 0,
      g = 0,
      b = 0;

    if (0 <= h && h < 60) {
      r = c; g = x; b = 0;
    } else if (60 <= h && h < 120) {
      r = x; g = c; b = 0;
    } else if (120 <= h && h < 180) {
      r = 0; g = c; b = x;
    } else if (180 <= h && h < 240) {
      r = 0; g = x; b = c;
    } else if (240 <= h && h < 300) {
      r = x; g = 0; b = c;
    } else if (300 <= h && h < 360) {
      r = c; g = 0; b = x;
    }

    r = Math.round((r + m) * 255);
    g = Math.round((g + m) * 255);
    b = Math.round((b + m) * 255);

    return [r,g,b];
};

let rgbToHex = rgbColor => [
    "#",
    ...rgbColor.map(shade => {
      let hexShade = shade.toString(16);
      return hexShade.length === 1 ? '0' + hexShade : hexShade;
    })
  ]
  .join('');

let hslToHex = hslColor => rgbToHex(hslToRgb(hslColor));

let transparent = hexColor => hexColor + '00';


module.exports = {
  darken,
  lighten,
  hslToRgb,
  rgbToHex,
  hslToHex,
  transparent
}