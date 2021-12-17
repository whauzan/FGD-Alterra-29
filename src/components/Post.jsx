import { Box, Text } from '@chakra-ui/react'
import React from 'react'

const Post = () =>
{
    return (
        <Box border={ '1px' } p={ 1 }>
            <Text color={ 'gray.500' } fontSize={ 9 } fontWeight={ 'normal' }>Membalas thread Spiderman GantengBuanget</Text>
            <Text fontWeight={ 'semibold' } fontSize={ 18 }>Makam Kembar Gunung Kambengan</Text>
            <Text fontSize={ 10 } fontWeight={ 'normal' }>wah serem banget tuh bro, kronloginya gimana</Text>
        </Box>
    )
}

export default Post
