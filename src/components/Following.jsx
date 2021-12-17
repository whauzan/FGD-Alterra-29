import { Tab, TabList, TabPanel, TabPanels, Tabs, useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import Follow from './Follow'

const Following = ( { kiri, kanan } ) =>
{
    const [ Mobile ] = useMediaQuery( "(min-width: 500px)" );
    return (
        <Tabs mb={ 40 } >
            <TabList>
                <Tab>{ kiri }</Tab>
                <Tab>{ kanan }</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <Follow />
                </TabPanel>
                <TabPanel>
                    <Follow />
                </TabPanel>
            </TabPanels>
        </Tabs>
    )
}

export default Following
