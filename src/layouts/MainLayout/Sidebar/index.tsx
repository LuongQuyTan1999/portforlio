import { FC } from 'react';
import { Box, Image } from '@chakra-ui/react';
import Link from 'next/link';

import { sidebarWidth } from '@/constants/style';
import Navigation from './Navigation';

const SideBar: FC = () => {
  return (
    <Box width={sidebarWidth} background="rgba(0,0,0,.3)" h="100vh">
      <Link passHref href="/">
        <Image src="/img/logo.svg" mx="auto" p="40px 0 10px" cursor="pointer" />
      </Link>

      <Navigation />
    </Box>
  );
};

export default SideBar;
