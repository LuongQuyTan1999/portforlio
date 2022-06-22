import type { ComponentStyleConfig } from '@chakra-ui/theme';

const Table: ComponentStyleConfig = {
  baseStyle: {},
  sizes: {
    xs: {
      th: {
        fontSize: 'xs',
        fontWeight: 'normal',
        textTransform: 'none',
        lineHeight: '13px',
        color: 'columbiaBlue.100',
        py: '3',
        px: '2',
      },
      td: {
        fontSize: 'xs',
        fontWeight: 'medium',
        lineHeight: '13px',
        textTransform: 'none',
        py: '2',
      },
    },
  },
  defaultProps: {
    size: 'xs',
    variant: 'unstyled',
  },
};

export default Table;
