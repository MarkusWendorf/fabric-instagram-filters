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

const baseFunctionsGLSL = contrastGLSL + colorFilterGLSL + grayscaleGLSL + invertGLSL + sepiaGLSL + brightnessGLSL + saturationGLSL;
const fragmentSource = (color) => {
  return "precision highp float;\n" +
    "uniform sampler2D uTexture;\n" +
    "varying vec2 vTexCoord;\n" +
    baseFunctionsGLSL +
    "void main() {\n" +
    "vec4 color = texture2D(uTexture, vTexCoord);\n" +
    "gl_FragColor = " + color + ";\n" +
    "}";
};

const willowFragmentSource = fragmentSource("brightness(colorFilter(grayscale(color), vec4(100.0, 28.0, 210.0, 0.1)), 0.1)");
const lofiFragmentSource = fragmentSource("saturation(contrast(color, 0.15), 0.2)");
const clarendonFragmentSource = fragmentSource("saturation(contrast(brightness(color, 0.1), 0.1), 0.15)");
const ginghamFragmentSource = fragmentSource("contrast(sepia(color, 0.04), -0.15)");
const moonFragmentSource = fragmentSource("brightness(contrast(grayscale(color), -0.04), 0.1)");
const larkFragmentSource = fragmentSource("saturation(rgbAdjust(brightness(color, 0.08), vec3(1, 1.03, 1.05)), 0.12)");
const reyesFragmentSource = fragmentSource("contrast(brightness(sepia(color, 0.4), 0.13), -0.05)");
const junoFragmentSource = fragmentSource("saturation(rgbAdjust(color, vec3(1.01, 1.04, 1)), 0.3)");
const slumberFragmentSource = fragmentSource("saturation(brightness(color, 0.1), -0.5)");
const cremaFragmentSource = fragmentSource("saturation(rgbAdjust(color, vec3(1.04, 1, 1.02)), -0.05)");
const ludwigFragmentSource = fragmentSource("saturation(brightness(color, 0.05), -0.03)");
const adenFragmentSource = fragmentSource("saturation(colorFilter(color, vec4(228, 130, 225, 0.13)), -0.2)");
const perpetuaFragmentSource = fragmentSource("rgbAdjust(color, vec3(1.05, 1.1, 1))");
const amaroFragmentSource = fragmentSource("brightness(saturation(color, 0.3), 0.15)");
const mayfairFragmentSource = fragmentSource("saturation(colorFilter(color, vec4(230, 115, 108, 0.05)), 0.15)");
const riseFragmentSource = fragmentSource("saturation(brightness(colorFilter(color, vec4(255, 170, 0, 0.1)), 0.09), 0.1)");
const hudsonFragmentSource = fragmentSource("brightness(contrast(rgbAdjust(color, vec3(1, 1, 1.25)), 0.1), 0.15)");
const valenciaFragmentSource = fragmentSource("contrast(saturation(colorFilter(color, vec4(255, 225, 80, 0.08)), 0.1), 0.05)");
const xproFragmentSource = fragmentSource("contrast(saturation(colorFilter(color, vec4(255, 255, 0, 0.07)), 0.2), 0.15)");
const sierraFragmentSource = fragmentSource("saturation(contrast(color, -0.15), 0.1)");
const inkwellFragmentSource = fragmentSource("grayscale(color)");
const hefeFragmentSource = fragmentSource("saturation(contrast(color, 0.1), 0.15)");
const nashvilleFragmentSource = fragmentSource("contrast(colorFilter(color, vec4(220, 115, 188, 0.12), -0.05)");
const stinsonFragmentSource = fragmentSource("sepia(brightness(color, 0.1), 0.3)");
const vesperFragmentSource = fragmentSource("contrast(brightness(colorFilter(color, vec4(255, 225, 0, 0.05)), 0.06), 0.06)");
const earlybirdFragmentSource = fragmentSource("colorFilter(color, vec4(255, 165, 40, 0.2))");
const brannanFragmentSource = fragmentSource("colorFilter(contrast(color, 0.2), vec4(140, 10, 185, 0.1]))");
const sutroFragmentSource = fragmentSource("saturation(brightness(color, -0.1), -0.1)");
const toasterFragmentSource = fragmentSource("colorFilter(sepia(color, 0.1), vec4(255, 145, 0, 0.2))");
const waldenFragmentSource = fragmentSource("colorFilter(brightness(color, 0.1), vec4(255, 255, 0, 0.2))");
const year1977FragmentSource = fragmentSource("brightness(colorFilter(color, vec4(255, 25, 0, 0.15)), 0.1)");
const kelvinFragmentSource = fragmentSource("saturation(rgbAdjust(colorFilter(color, vec4(255, 140, 0, 0.1)), vec3(1.15, 1.05, 1)), 0.35)");
const mavenFragmentSource = fragmentSource("contrast(saturation(colorFilter(color, vec4(225, 240, 0, 0.1)), 0.25), 0.05)");
const ginzaFragmentSource = fragmentSource("brightness(sepia(color, 0.06), 0.1)");
const skylineFragmentSource = fragmentSource("brightness(saturation(color, 0.35), 0.1)");
const dogpatchFragmentSource = fragmentSource("brightness(contrast(color, 0.15), 0.1)");
const brooklynFragmentSource = fragmentSource("sepia(colorFilter(color, vec4(25, 240, 252, 0.05)), 0.3)");
const helenaFragmentSource = fragmentSource("contrast(colorFilter(color, vec4(208, 208, 86, 0.2)), 0.15)");
const ashbyFragmentSource = fragmentSource("brightness(colorFilter(color, vec4(255, 160, 25, 0.1)), 0.1)");
const charmesFragmentSource = fragmentSource("contrast(colorFilter(color, vec4(255, 50, 80, 0.12)), 0.05)");

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

