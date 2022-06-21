import { extendTheme } from '@chakra-ui/react';

import styles from './styles';

import config from './foundations/config';
import fonts from './foundations/fonts';
import colors from './foundations/colors';
import shadows from './foundations/shadows';
import breakpoints from './foundations/breakpoints';
import zIndices from './foundations/zIndices';
import fontWeights from './foundations/fontWeights';
import sizes from './foundations/sizes';

import Button from './components/button';
import Tabs from './components/tab';
import fontSizes from './foundations/fontSizes';

const customTheme = {
  colors,
  styles,
  fonts,
  config,
  shadows,
  breakpoints,
  zIndices,
  fontWeights,
  fontSizes,
  sizes,
  components: {
    Button,
    Tabs,
  },
};

export default extendTheme(customTheme);
