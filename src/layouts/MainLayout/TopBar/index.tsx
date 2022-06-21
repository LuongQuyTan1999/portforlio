import { FC } from 'react';
import { Box, Tabs, TabList, Tab, TabPanels, TabPanel } from '@chakra-ui/react';

import Badge from './Badge';

const TopBar: FC = () => {
  return (
    <Box color="white">
      <Tabs variant="line">
        <TabList>
          <Tab>
            Exchange <Badge text="Trade" ml="10px" mt="-10px" />
          </Tab>
          <Tab>
            Governance <Badge text="Earn" ml="10px" mt="-10px" />
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <p>Exchange!</p>
          </TabPanel>
          <TabPanel>
            <p>Governance!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default TopBar;
