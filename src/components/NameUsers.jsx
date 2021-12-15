import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const NameUsers = ( { username, tagName, bio } ) =>
{
    return (
        <Box width={ '24em' } >
            <Heading marginLeft={ { sm: 20, md: 40, lg: 0 } }>
                { username }
            </Heading>
            <Box marginLeft={ { sm: 20, md: 40, lg: 0 } }>
                <Text>{ tagName }</Text>
                <Text>{ bio }</Text>
            </Box>
        </Box>
    )
}

export default NameUsers
