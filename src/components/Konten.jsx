import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import React from 'react'
import Post from './Post'

import Thread from './Thread'

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
                    <Post />
                </TabPanel>
                <TabPanel>
                    <Thread />
                </TabPanel>
            </TabPanels>
        </Tabs>
    )
}

export default Konten