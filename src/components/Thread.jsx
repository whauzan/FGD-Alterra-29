import { Box, Text } from '@chakra-ui/react'
import React from 'react'

const Thread = ( props ) =>
{
    return (
        <Box mb={ 3 } border={ '1px' } p={ 1 } key={ props.key }>
            <Text fontWeight={ 'semibold' } fontSize={ 18 }>{ props.title }</Text>
        </Box>
    )
}

export default Thread
