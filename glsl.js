// based on https://github.com/girliemac/filterous-2/blob/master/lib/filters.js

export const grayscaleGLSL = "vec4 grayscale(vec4 color) {\n" +
  "float avg = 0.2126 * color.r + 0.7152 * color.g + 0.0722 * color.b;\n" +
  "color.r = avg;\n" +
  "color.g = avg;\n" +
  "color.b = avg;\n" +
  "return color;\n" +
  "}\n";

export const sepiaGLSL = "vec4 sepia(vec4 color, float adj) {\n" +
  "color.r = color.r * (1.0 - 0.607 * adj) + color.g * 0.769 * adj + color.b * 0.189 * adj;\n" +
  "color.g = color.r * 0.349 * adj + color.g * (1.0 - 0.314 * adj) + color.b * 0.168 * adj;\n" +
  "color.b = color.r * 0.272 * adj + color.g * 0.534 * adj + color.b * (1.0 - 0.869 * adj);\n" +
  "return color;\n" +
  "}\n";

export const invertGLSL = "vec4 invert(vec4 color) {\n" +
  "color.r = 1.0 - color.r;\n" +
  "color.g = 1.0 - color.g;\n" +
  "color.b = 1.0 - color.b;\n" +
  "return color;\n" +
  "}\n";

export const brightnessGLSL = "vec4 brightness(vec4 color, float adj) {\n" +
  "adj = adj > 1.0 ? 1.0 : adj;\n" +
  "adj = adj < -1.0 ? -1.0 : adj;\n" +
  "color.r += adj;\n" +
  "color.g += adj;\n" +
  "color.b += adj;\n" +
  "return color;\n" +
  "}\n";

export const saturationGLSL = "vec4 saturation(vec4 color, float adj) {\n" +
  "float gray = 0.2989 * color.r + 0.587 * color.g + 0.114 * color.b;\n" +
  "adj = adj < -1.0 ? -1.0 : adj;\n" +
  "color.r = -gray * adj + color.r * (1.0 + adj);\n" +
  "color.g = -gray * adj + color.g * (1.0 + adj);\n" +
  "color.b = -gray * adj + color.b * (1.0 + adj);\n" +
  "return color;\n" +
  "}\n";

export const contrastGLSL = "vec4 contrast(vec4 color, float adj) {\n" +
  "adj *= 255.0;\n" +
  "float factor = (259.0 * (adj + 255.0)) / (255.0 * (259.0 - adj));\n" +
  "color.r = factor * (color.r - 0.5) + 0.5;\n" +
  "color.g = factor * (color.g - 0.5) + 0.5;\n" +
  "color.b = factor * (color.b - 0.5) + 0.5;\n" +
  "return color;\n" +
  "}\n";

export const colorFilterGLSL = "vec4 colorFilter(vec4 color, vec4 rgbColor) {\n" +
  "float adj = rgbColor.a;\n" +
  "color.r -= (color.r - rgbColor.r / 255.0) * adj;\n" +
  "color.g -= (color.g - rgbColor.g / 255.0) * adj;\n" +
  "color.b -= (color.b - rgbColor.b / 255.0) * adj;\n" +
  "return color;\n" +
  "}\n";

export const rgbAdjustGLSL = "vec4 colorFilter(vec4 color, vec3 rgbAdj) {\n" +
  "color.r *= rgbAdj.r;\n" +
  "color.g *= rgbAdj.g;\n" +
  "color.b *= rgbAdj.b;\n" +
  "return color;\n" +
  "}\n";

