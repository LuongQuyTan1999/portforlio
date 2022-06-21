import { Flex, Box, IconProps, Icon } from '@chakra-ui/react';

import Link from 'next/link';
import colors from '@/theme/foundations/colors';
import { Paths } from '@/constants/path';

export interface SidebarItem {
  label: string;
  icon: import('@chakra-ui/system').ComponentWithAs<'svg', IconProps>;
  to: Paths;
}

interface Props extends SidebarItem {
  active: boolean;
}

export const SidebarItem = ({ label, icon, to, active }: Props) => {
  return (
    <Link href={to}>
      <Flex
        key={to}
        transition="0.2s"
        p="15px 26px"
        color={active ? 'primary' : 'paleWhite.300'}
        align="center"
        cursor="pointer"
        pos="relative"
        sx={{
          '&::after': {
            content: '""',
            transition: 'all 0.2s',
            bgColor: 'primary',
            pos: 'absolute',
            w: '3px',

            right: 0,
            top: 0,
            height: active ? '100%' : 0,
            borderRadius: '3px 0 0 3px',
          },
        }}
        _hover={{
          bgColor: 'whiteAlpha.100',
        }}
      >
        <Box mr="5px" w="25px">
          <Icon as={icon} color={active ? colors.primary : 'blueBell.300'} />
        </Box>
        {label}
      </Flex>
    </Link>
  );
};
