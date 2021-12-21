
import { Box, Flex, Link, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import profile from '../../assets/img/Rectangle 42.png'
import NewsCard from '../../components/NewsCard'
import PostinganThread from '../../components/PostinganThread'
const HomePage = () =>
{
    return (
        <Flex justifyContent={ 'center' } direction={ [ 'column-reverse', 'row' ] } p={ [ 5, 0 ] }>
            <Box w={ '200px' } display={ [ 'none', 'flex' ] } mt={ 20 }>
                <Box position={ 'fixed' }>
                    <VStack spacing={ 10 }>
                        <Link>Home</Link>
                        <Link>Rekomendasi</Link>
                        <Link>Hot Thread</Link>
                    </VStack>
                </Box>
            </Box>
            <PostinganThread profile={ profile } />
            <Box w={ [ '350px', '200px' ] }>
                <Text>Recent News</Text>
                <Box display={ 'flex' } flexDirection={ [ 'row', 'column' ] } mb={ 5 }>
                    <NewsCard />
                </Box>
            </Box>
        </Flex >
    )
}

export default HomePage
