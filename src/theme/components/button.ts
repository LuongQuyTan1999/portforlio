import type { ComponentStyleConfig } from '@chakra-ui/theme';

import { hexToRgba } from '@/utils/color';
import colors from '@/theme/foundations/colors';

const Button: ComponentStyleConfig = {
  baseStyle: {
    minW: '100px',
    maxW: '360px',
    borderRadius: '3xl',
  },
  variants: {
    noStyle: {
      padding: '0',
      height: 'auto',
    },
    primary: {
      fontWeight: 'semibold',
      fontSize: 'lg',
      padding: '0 30px',

      bg: 'primary',
      background: 'primary',
      color: 'blackColor',

      _hover: {
        filter: 'brightness(0.8)',
        bg: 'primary',
        background: 'primary',
        color: 'black',
      },

      _active: {
        filter: 'brightness(0.9)',
        bg: 'primary',
        background: 'primary',
        color: 'black',
      },
    },

    'outline-primary': {
      bg: 'transparent',
      background: 'transparent',
      color: 'primary',
      border: '1px solid',
      borderColor: 'primary',

      _hover: {
        filter: 'brightness(0.95)',
        bg: 'primary',
        background: hexToRgba(colors.primary, 0.1),
        color: 'primary',
      },

      _active: {
        filter: 'brightness(0.95)',
        bg: 'primary',
        background: hexToRgba(colors.primary, 0.3),
        color: 'primary',
      },
    },

    secondary: {
      bg: 'secondary',
      background: 'secondary',
      color: 'white',

      _hover: {
        filter: 'brightness(0.8)',
        bg: 'secondary',
        background: 'secondary',
        color: 'white',
      },

      _active: {
        filter: 'brightness(0.9)',
        bg: 'secondary',
        background: 'secondary',
        color: 'white',
      },
    },

    'outline-secondary': {
      bg: 'transparent',
      background: 'transparent',
      color: 'secondary',
      border: '1px solid',
      borderColor: 'secondary',

      w: '100%',
      maxW: '362px',
      h: '50px',
      height: '50px',
      borderRadius: '3xl',

      _hover: {
        filter: 'brightness(0.95)',
        bg: 'secondary',
        background: hexToRgba(colors.secondary, 0.1),
        color: 'secondary',
      },

      _active: {
        filter: 'brightness(0.95)',
        bg: 'secondary',
        background: hexToRgba(colors.secondary, 0.3),
        color: 'secondary',
      },
    },
  },
};

export default Button;
