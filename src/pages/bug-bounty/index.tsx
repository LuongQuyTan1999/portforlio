import { Flex } from '@chakra-ui/react';

import { NextPageWithLayout } from '@/pages/_app';
import { MainLayout } from '@/layouts/MainLayout';

const BugBounty: NextPageWithLayout = () => {
  return <Flex color="white">BugBounty</Flex>;
};

BugBounty.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default BugBounty;
