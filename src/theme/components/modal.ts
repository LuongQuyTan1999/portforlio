import type { ComponentStyleConfig } from '@chakra-ui/theme';

const Modal: ComponentStyleConfig = {
  baseStyle: {
    dialog: {
      borderRadius: '15px',
      background: 'blackAlpha.650',
    },
    body: {
      marginRight: '8px',
      padding: '8px 16px 8px 24px',
    },
    overlay: {
      backdropFilter: 'blur(20px)',
      background: 'blackAlpha.350',
    },
  },
};

export default Modal;
