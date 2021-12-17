import { Box, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import React from 'react'

const Konten = ( { kiri, kanan } ) =>
{
    return (
        <Tabs mb={ 40 } >
            <TabList>
                <Tab>{ kiri }</Tab>
                <Tab>{ kanan }</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <Box border={ '1px' } p={ 1 }>
                        <Text color={ 'gray.500' } fontSize={ 9 } fontWeight={ 'normal' }>Membalas thread Spiderman GantengBuanget</Text>
                        <Text fontWeight={ 'semibold' } fontSize={ 18 }>Makam Kembar Gunung Kambengan</Text>
                        <Text fontSize={ 10 } fontWeight={ 'normal' }>wah serem banget tuh bro, kronloginya gimana</Text>
                    </Box>
                </TabPanel>
                <TabPanel>
                    <Box border={ '1px' } p={ 1 }>
                        <Text fontWeight={ 'semibold' } fontSize={ 18 }>Makam Kembar Gunung Kambengan</Text>
                        <Text fontSize={ 10 } fontWeight={ 'normal' }>wah serem banget tuh bro, kronloginya gimana</Text>
                    </Box>
                </TabPanel>
            </TabPanels>
        </Tabs>
    )
}

export default Konten
