// adopted from / credits to https://github.com/girliemac/filterous-2/blob/master/lib/filters.js

import {
  brightnessGLSL,
  colorFilterGLSL,
  contrastGLSL,
  grayscaleGLSL,
  invertGLSL,
  saturationGLSL,
  sepiaGLSL,
} from "./glsl";
import {fabric} from "fabric";

const createFilter = (type, fragmentSource) => {
  const filter = fabric.util.createClass(fabric.Image.filters.BaseFilter, {
    type,
    fragmentSource,
    isNeutralState: () => false,
  });
  filter.fromObject = fabric.Image.filters.BaseFilter.fromObject;
  return filter;
};

const baseFunctionsGLSL = contrastGLSL + colorFilterGLSL + grayscaleGLSL + invertGLSL + sepiaGLSL + brightnessGLSL + saturationGLSL + rgbAdjustGLSL;
const fragmentSrc = (color) => {
  return "precision highp float;\n" +
    "uniform sampler2D uTexture;\n" +
    "varying vec2 vTexCoord;\n" +
    baseFunctionsGLSL +
    "void main() {\n" +
    "vec4 color = texture2D(uTexture, vTexCoord);\n" +
    "gl_FragColor = " + color + ";\n" +
    "}";
};

const willowFragmentSource = fragmentSrc("brightness(colorFilter(grayscale(color), vec4(100.0, 28.0, 210.0, 0.1)), 0.1)");
const lofiFragmentSource = fragmentSrc("saturation(contrast(color, 0.15), 0.2)");
const clarendonFragmentSource = fragmentSrc("saturation(contrast(brightness(color, 0.1), 0.1), 0.15)");
const ginghamFragmentSource = fragmentSrc("contrast(sepia(color, 0.04), -0.15)");
const moonFragmentSource = fragmentSrc("brightness(contrast(grayscale(color), -0.04), 0.1)");
const larkFragmentSource = fragmentSrc("saturation(rgbAdjust(brightness(color, 0.08), vec3(1.0, 1.03, 1.05)), 0.12)");
const reyesFragmentSource = fragmentSrc("contrast(brightness(sepia(color, 0.4), 0.13), -0.05)");
const junoFragmentSource = fragmentSrc("saturation(rgbAdjust(color, vec3(1.01, 1.04, 1.0)), 0.3)");
const slumberFragmentSource = fragmentSrc("saturation(brightness(color, 0.1), -0.5)");
const cremaFragmentSource = fragmentSrc("saturation(rgbAdjust(color, vec3(1.04, 1.0, 1.02)), -0.05)");
const ludwigFragmentSource = fragmentSrc("saturation(brightness(color, 0.05), -0.03)");
const adenFragmentSource = fragmentSrc("saturation(colorFilter(color, vec4(228.0, 130.0, 225.0, 0.13)), -0.2)");
const perpetuaFragmentSource = fragmentSrc("rgbAdjust(color, vec3(1.05, 1.1, 1.0))");
const amaroFragmentSource = fragmentSrc("brightness(saturation(color, 0.3), 0.15)");
const mayfairFragmentSource = fragmentSrc("saturation(colorFilter(color, vec4(230.0, 115.0, 108.0, 0.05)), 0.15)");
const riseFragmentSource = fragmentSrc("saturation(brightness(colorFilter(color, vec4(255.0, 170.0, 0.0, 0.1)), 0.09), 0.1)");
const hudsonFragmentSource = fragmentSrc("brightness(contrast(rgbAdjust(color, vec3(1, 1, 1.25)), 0.1), 0.15)");
const valenciaFragmentSource = fragmentSrc("contrast(saturation(colorFilter(color, vec4(255.0, 225.0, 80.0, 0.08)), 0.1), 0.05)");
const xproFragmentSource = fragmentSrc("contrast(saturation(colorFilter(color, vec4(255.0, 255.0, 0.0, 0.07)), 0.2), 0.15)");
const sierraFragmentSource = fragmentSrc("saturation(contrast(color, -0.15), 0.1)");
const inkwellFragmentSource = fragmentSrc("grayscale(color)");
const hefeFragmentSource = fragmentSrc("saturation(contrast(color, 0.1), 0.15)");
const nashvilleFragmentSource = fragmentSrc("contrast(colorFilter(color, vec4(220.0, 115.0, 188.0, 0.12)), -0.05)");
const stinsonFragmentSource = fragmentSrc("sepia(brightness(color, 0.1), 0.3)");
const vesperFragmentSource = fragmentSrc("contrast(brightness(colorFilter(color, vec4(255.0, 225.0, 0.0, 0.05)), 0.06), 0.06)");
const earlybirdFragmentSource = fragmentSrc("colorFilter(color, vec4(255.0, 165.0, 40.0, 0.2))");
const brannanFragmentSource = fragmentSrc("colorFilter(contrast(color, 0.2), vec4(140.0, 10.0, 185.0, 0.1))");
const sutroFragmentSource = fragmentSrc("saturation(brightness(color, -0.1), -0.1)");
const toasterFragmentSource = fragmentSrc("colorFilter(sepia(color, 0.1), vec4(255.0, 145.0, 0.0, 0.2))");
const waldenFragmentSource = fragmentSrc("colorFilter(brightness(color, 0.1), vec4(255.0, 255.0, 0.0, 0.2))");
const year1977FragmentSource = fragmentSrc("brightness(colorFilter(color, vec4(255.0, 25.0, 0.0, 0.15)), 0.1)");
const kelvinFragmentSource = fragmentSrc("saturation(rgbAdjust(colorFilter(color, vec4(255.0, 140.0, 0.0, 0.1)), vec3(1.15, 1.05, 1)), 0.35)");
const mavenFragmentSource = fragmentSrc("contrast(saturation(colorFilter(color, vec4(225.0, 240.0, 0.0, 0.1)), 0.25), 0.05)");
const ginzaFragmentSource = fragmentSrc("brightness(sepia(color, 0.06), 0.1)");
const skylineFragmentSource = fragmentSrc("brightness(saturation(color, 0.35), 0.1)");
const dogpatchFragmentSource = fragmentSrc("brightness(contrast(color, 0.15), 0.1)");
const brooklynFragmentSource = fragmentSrc("sepia(colorFilter(color, vec4(25.0, 240.0, 252.0, 0.05)), 0.3)");
const helenaFragmentSource = fragmentSrc("contrast(colorFilter(color, vec4(208.0, 208.0, 86.0, 0.2)), 0.15)");
const ashbyFragmentSource = fragmentSrc("brightness(colorFilter(color, vec4(255.0, 160.0, 25.0, 0.1)), 0.1)");
const charmesFragmentSource = fragmentSrc("contrast(colorFilter(color, vec4(255.0, 50.0, 80.0, 0.12)), 0.05)");

export const Willow = createFilter("Willow", willowFragmentSource);
export const Lofi = createFilter("Lofi", lofiFragmentSource);
export const Clarendon = createFilter("Clarendon", clarendonFragmentSource);
export const Gingham = createFilter("Gingham", ginghamFragmentSource);
export const Moon = createFilter("Moon", moonFragmentSource);
export const Lark = createFilter("Lark", larkFragmentSource);
export const Reyes = createFilter("Reyes", reyesFragmentSource);
export const Juno = createFilter("Juno", junoFragmentSource);
export const Slumber = createFilter("Slumber", slumberFragmentSource);
export const Crema = createFilter("Crema", cremaFragmentSource);
export const Ludwig = createFilter("Ludwig", ludwigFragmentSource);
export const Aden = createFilter("Aden", adenFragmentSource);
export const Perpetura = createFilter("Perpetua", perpetuaFragmentSource);
export const Amaro = createFilter("Amaro", amaroFragmentSource);
export const Mayfair = createFilter("Mayfai", mayfairFragmentSource);
export const Rise = createFilter("Rise", riseFragmentSource);
export const Hudson = createFilter("Hudson", hudsonFragmentSource);
export const Valencia = createFilter("Valencia", valenciaFragmentSource);
export const Xpro = createFilter("Xpro", xproFragmentSource);
export const Sierra = createFilter("Sierra", sierraFragmentSource);
export const Inkwell = createFilter("Inkwell", inkwellFragmentSource);
export const Hefe = createFilter("Hefe", hefeFragmentSource);
export const Nashville = createFilter("Nashville", nashvilleFragmentSource);
export const Stinson = createFilter("Stinson", stinsonFragmentSource);
export const Vesper = createFilter("Vesper", vesperFragmentSource);
export const Earlybird = createFilter("Earlybird", earlybirdFragmentSource);
export const Brannan = createFilter("Brannan", brannanFragmentSource);
export const Sutro = createFilter("Sutro", sutroFragmentSource);
export const Toaster = createFilter("Toaster", toasterFragmentSource);
export const Walden = createFilter("Walden", waldenFragmentSource);
export const Year1977 = createFilter("Year1977", year1977FragmentSource);
export const Kelvin = createFilter("Kelvin", kelvinFragmentSource);
export const Maven = createFilter("Maven", mavenFragmentSource);
export const Ginza = createFilter("Ginza", ginzaFragmentSource);
export const Skyline = createFilter("Skyline", skylineFragmentSource);
export const Dogpatch = createFilter("Dogpatch", dogpatchFragmentSource);
export const Brooklyn = createFilter("Brooklyn", brooklynFragmentSource);
export const Helena = createFilter("Helena", helenaFragmentSource);
export const Ashby = createFilter("Ashby", ashbyFragmentSource);
export const Charmes = createFilter("Charmes", charmesFragmentSource);

