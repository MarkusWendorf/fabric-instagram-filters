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
  const filter = fabric.util.createClass(fabric.Image.filters.BaseFilter, {type, fragmentSource});
  filter.fromObject = fabric.Image.filters.BaseFilter.fromObject;
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

export const filters = {
  Willow: createFilter("Willow", willowFragmentSource),
  Lofi: createFilter("Lofi", lofiFragmentSource),
  Clarendon: createFilter("Clarendon", clarendonFragmentSource),
  Gingham: createFilter("Gingham", ginghamFragmentSource),
  Moon: createFilter("Moon", moonFragmentSource),
  Lark: createFilter("Lark", larkFragmentSource),
  Reyes: createFilter("Reyes", reyesFragmentSource),
  Juno: createFilter("Juno", junoFragmentSource),
  Slumber: createFilter("Slumber", slumberFragmentSource),
  Crema: createFilter("Crema", cremaFragmentSource),
  Ludwig: createFilter("Ludwig", ludwigFragmentSource),
  Aden: createFilter("Aden", adenFragmentSource),
  Perpetura: createFilter("Perpetua", perpetuaFragmentSource),
  Amaro: createFilter("Amaro", amaroFragmentSource),
  Mayfair: createFilter("Mayfai", mayfairFragmentSource),
  Rise: createFilter("Rise", riseFragmentSource),
  Hudson: createFilter("Hudson", hudsonFragmentSource),
  Valencia: createFilter("Valencia", valenciaFragmentSource),
  Xpro: createFilter("Xpro", xproFragmentSource),
  Sierra: createFilter("Sierra", sierraFragmentSource),
  Inkwell: createFilter("Inkwell", inkwellFragmentSource),
};
