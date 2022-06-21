import { Flex } from '@chakra-ui/react';

import { NextPageWithLayout } from '@/pages/_app';
import { MainLayout } from '@/layouts/MainLayout';

const Governance: NextPageWithLayout = () => {
  return <Flex color="white">Governance</Flex>;
};

Governance.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Governance;
