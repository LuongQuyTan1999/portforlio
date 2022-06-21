import { Box, BoxProps } from '@chakra-ui/react';

import { hexToRgba } from '@/utils/color';
import colors from '@/theme/foundations/colors';

interface Props extends BoxProps {
  text: string;
}

const Badge = ({ text, ...restProps }: Props) => {
  return (
    <Box
      bg={hexToRgba(colors.primary, 0.15)}
      color="white"
      p="2px 6px"
      rounded="2xl"
      fontSize="xxs"
      {...restProps}
    >
      {text}
    </Box>
  );
};

export default Badge;
