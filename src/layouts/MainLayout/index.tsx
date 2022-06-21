import { FC } from 'react';
import { Flex } from '@chakra-ui/react';

import SideBar from './Sidebar';
import Content from './Content';
import TopBar from './TopBar';

export const MainLayout: FC = ({ children }) => {
  return (
    <Flex
      bgColor="blackColor"
      bgImg={`url(/img/background.svg)`}
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      minH="100vh"
    >
      <SideBar />
      <Flex flexGrow={1} direction="column" p="20px 30px">
        <TopBar />
        <Content>{children}</Content>
      </Flex>
    </Flex>
  );
};
