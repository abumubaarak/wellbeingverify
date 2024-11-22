import {createTheme} from '@shopify/restyle';

import {colors} from './colors.ts';
import {spacing} from './spacing.ts';
import {textVariants} from './textVariants.ts';

const theme = createTheme({
  colors,
  spacing,
  textVariants,
});

export type Theme = typeof theme;

export {theme};
