import { Flex } from '@chakra-ui/react';

import { NextPageWithLayout } from '@/pages/_app';
import { MainLayout } from '@/layouts/MainLayout';

const Docs: NextPageWithLayout = () => {
  return <Flex color="white">Docs</Flex>;
};

Docs.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Docs;
