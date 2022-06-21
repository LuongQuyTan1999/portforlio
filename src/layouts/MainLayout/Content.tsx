import React, { FC } from 'react';
import { Box } from '@chakra-ui/react';

const Content: FC = ({ children }) => {
  return (
    <>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          px: 3,
          width: { sm: 'sidebar.width' },
        }}
      >
        {children}
      </Box>
    </>
  );
};

export default Content;
