import { Box, Text } from '@chakra-ui/react'
import React from 'react'

const Post = ( props ) =>
{
    return (
        <Box mb={ 3 } border={ '1px' } p={ 1 } key={ props.key }>
            <Text color={ 'gray.500' } fontSize={ 9 } fontWeight={ 'normal' }>Membalas thread { props.replier }</Text>
            <Text fontWeight={ 'semibold' } fontSize={ 18 }>{ props.title }</Text>
            <Text fontSize={ 10 } fontWeight={ 'normal' }>{ props.comment }</Text>
        </Box>
    )
}

export default Post
