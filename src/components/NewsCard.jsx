import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import laNews from '../assets/img/news.png'

const NewsCard = () =>
{
    return (
        <Box w={ [ '190px', '208px' ] } p={ 5 } shadow={ 'lg' } borderRadius={ '25px' }>
            <Box mb={ 3 }>
                <Image src={ laNews } />
            </Box>
            <Box>
                <Text>
                    Inilah Kenapa FullStack Dibayar Mahal
                </Text>
            </Box>
        </Box>
    )
}

export default NewsCard
