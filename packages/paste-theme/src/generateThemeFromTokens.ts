import type {
  GenericThemeShape,
  ColorsKeys,
  BackgroundColorsKeys,
  BorderColorsKeys,
  BorderWidthsKeys,
  DataVisualizationKeys,
  FontSizesKeys,
  FontWeightsKeys,
  FontsKeys,
  SizingKeys,
  LineHeightsKeys,
  RadiiKeys,
  BoxShadowsKeys,
  SpacingsKeys,
  TextColorsKeys,
  ZIndicesKeys,
} from './types/GenericThemeShape';

interface GenerateThemeFromTokensArgs {
  backgroundColors: Partial<{[key in BackgroundColorsKeys]: any}>;
  borderColors: Partial<{[key in BorderColorsKeys]: any}>;
  borderWidths: Partial<{[key in BorderWidthsKeys]: any}>;
  radii: Partial<{[key in RadiiKeys]: any}>;
  fonts: Partial<{[key in FontsKeys]: any}>;
  fontSizes: Partial<{[key in FontSizesKeys]: any}>;
  fontWeights: Partial<{[key in FontWeightsKeys]: any}>;
  lineHeights: Partial<{[key in LineHeightsKeys]: any}>;
  boxShadows: Partial<{[key in BoxShadowsKeys]: any}>;
  // there are some sizes we expect must appear to generate breakpoints and icons sizes
  sizings: {[key in SizingKeys]: any};
  spacings: Partial<{[key in SpacingsKeys]: any}>;
  textColors: Partial<{[key in TextColorsKeys]: any}>;
  zIndices: Partial<{[key in ZIndicesKeys]: any}>;
  colors: Partial<{[key in ColorsKeys]: any}>;
  dataVisualization: Partial<{[key in DataVisualizationKeys]: any}>;
}

export const generateThemeFromTokens = ({
  backgroundColors,
  borderColors,
  borderWidths,
  radii,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  boxShadows,
  sizings,
  spacings,
  textColors,
  zIndices,
  dataVisualization,
}: GenerateThemeFromTokensArgs): GenericThemeShape => {
  // default breakpoints
  const breakpoints = [sizings.size40, sizings.size100, sizings.size120];

  return {
    shadows: boxShadows,
    borderWidths,
    radii,
    breakpoints,
    textColors,
    borderColors,
    backgroundColors,
    fonts,
    fontSizes,
    fontWeights,
    lineHeights,
    widths: sizings,
    maxWidths: sizings,
    minWidths: sizings,
    heights: sizings,
    maxHeights: sizings,
    minHeights: sizings,
    sizes: sizings,
    iconSizes: {
      sizeIcon05: sizings.sizeIcon05,
      sizeIcon10: sizings.sizeIcon10,
      sizeIcon20: sizings.sizeIcon20,
      sizeIcon30: sizings.sizeIcon30,
      sizeIcon40: sizings.sizeIcon40,
      sizeIcon50: sizings.sizeIcon50,
      sizeIcon60: sizings.sizeIcon60,
      sizeIcon70: sizings.sizeIcon70,
      sizeIcon80: sizings.sizeIcon80,
      sizeIcon90: sizings.sizeIcon90,
      sizeIcon100: sizings.sizeIcon100,
      sizeIcon110: sizings.sizeIcon110,
    },
    space: spacings,
    zIndices,
    dataVisualization,
  };
};
