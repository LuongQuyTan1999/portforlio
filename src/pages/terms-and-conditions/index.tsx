import { Flex } from '@chakra-ui/react';

import { NextPageWithLayout } from '@/pages/_app';
import { MainLayout } from '@/layouts/MainLayout';

const TermsAndConditions: NextPageWithLayout = () => {
  return <Flex color="white">TermsAndConditions</Flex>;
};

TermsAndConditions.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default TermsAndConditions;
