import { Box, Heading, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import React from 'react'

const Konten = ( { kiri, kanan } ) =>
{
    return (
        <Tabs>
            <TabList>
                <Tab>{ kiri }</Tab>
                <Tab>{ kanan }</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <Box border={ '1px' } p={ 1 }>
                        <Text color={ 'gray.500' }>Membalas thread Spiderman GantengBuanget</Text>
                        <Heading>Makam Kembar Gunung Kambengan</Heading>
                        <Text>wah serem banget tuh bro, kronloginya gimana</Text>
                    </Box>
                </TabPanel>
                <TabPanel>
                    <Box border={ '1px' } p={ 1 }>
                        <Text></Text>
                        <Heading>Makam Kembar Gunung Kambengan</Heading>
                        <Text>wah serem banget tuh bro, kronloginya gimana</Text>
                    </Box>
                </TabPanel>
            </TabPanels>
        </Tabs>
    )
}

export default Konten
