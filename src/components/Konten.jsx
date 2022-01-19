import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import React from 'react'
import Post from './Post'

import Thread from './Thread'

const Konten = ( { kiri, kanan, data } ) =>
{
    return (
        <Tabs mb={ 40 } >
            <TabList>
                <Tab>{ kiri }</Tab>
                <Tab>{ kanan }</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    { data.map( item =>
                        <Post key={ item.thread_id } title={ item.title } replier={ item.recent_replier } comment={ item.recent_comment } />
                    )
                    }
                </TabPanel>
                <TabPanel>
                    { data.map( item =>
                        <Thread key={ item.thread_id } title={ item.title } />
                    )
                    }
                </TabPanel>
            </TabPanels>
        </Tabs>
    )
}

export default Konten
