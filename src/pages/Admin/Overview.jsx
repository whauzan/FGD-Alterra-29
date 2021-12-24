import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import CardAdmin from '../../components/CardAdmin'
import ChartsReport from '../../components/ChartsReport'
import LayoutAdmin from '../../components/LayoutAdmin'

const Overview = () =>
{
    return (
        <>
            <LayoutAdmin>
                <Box mt={ 10 }>
                    <Box m={ 3 }>
                        <Text fontWeight={ 'bold' }>Admin System Overview</Text>
                        <Text fontWeight={ 'bold' }>Overview</Text>
                    </Box>
                    <Box display={ 'flex' } flexDirection={ [ 'column', 'row' ] }>
                        <CardAdmin title={ 'Post' } />
                        <CardAdmin title={ 'Thread' } />
                        <CardAdmin title={ 'Users' } />
                    </Box>
                    <Box m={ 3 } borderWidth='1px' borderRadius='lg' p={ 3 } overflow='hidden' maxW={ [ 'lg', '4xl' ] }>
                        <ChartsReport />
                    </Box>
                </Box>
            </LayoutAdmin>
        </>
    )
}

export default Overview
