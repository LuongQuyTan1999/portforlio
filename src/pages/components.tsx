import { Button, Flex } from '@chakra-ui/react';

import { MainLayout } from '@/layouts/MainLayout';

const DemoComponents = () => {
  return (
    <Flex
      flexWrap="wrap"
      sx={{
        gap: '20px',
      }}
    >
      <Button>Primary button</Button>
      <Button variant="outline-primary">Outline primary button</Button>
      <Button variant="secondary">Secondary button</Button>
      <Button variant="outline-secondary">Outline secondary button</Button>
    </Flex>
  );
};

DemoComponents.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default DemoComponents;
