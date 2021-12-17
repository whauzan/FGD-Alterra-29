import { Box, Text } from '@chakra-ui/react'
import React from 'react'
const NameUsers = ( { username, tagName, bio } ) =>
{
    return (
        <Box width={ '24em' } >
            <Text fontSize={ 36 } fontWeight={ 'bold' } marginLeft={ { sm: 20, md: 40, lg: 0 } }>
                { username }
            </Text>
            <Box fontSize={ 12 } fontWeight={ 'normal' } marginLeft={ { sm: 20, md: 40, lg: 0 } }>
                <Text>{ tagName }</Text>
                <Text>{ bio }</Text>
            </Box>
        </Box>
    )
}

export default NameUsers
