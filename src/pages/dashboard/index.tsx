import { Flex } from '@chakra-ui/react';

import { NextPageWithLayout } from '@/pages/_app';
import { MainLayout } from '@/layouts/MainLayout';

const Dashboard: NextPageWithLayout = () => {
  return <Flex color="white">Dashboard</Flex>;
};

Dashboard.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Dashboard;
