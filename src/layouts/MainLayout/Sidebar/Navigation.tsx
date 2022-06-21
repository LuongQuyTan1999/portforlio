import { useCallback } from 'react';
import { Flex } from '@chakra-ui/react';
import { useRouter } from 'next/router';

import { sidebar } from '@/constants/sidebar';
import { SidebarItem } from './SiderbarItem';

const Navigation = () => {
  const router = useRouter();

  const checkActive = useCallback(
    (to: string) => {
      const currentPath = router.pathname;

      return currentPath.includes(to);
    },
    [router.pathname]
  );

  return (
    <Flex direction="column" p="20px 0">
      {sidebar.map((item) => (
        <SidebarItem active={checkActive(item.to)} key={item.to} {...item} />
      ))}
    </Flex>
  );
};

export default Navigation;
