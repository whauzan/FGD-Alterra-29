
import { Box, Flex, Link, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import profile from '../../assets/img/Rectangle 42.png'
import NewsCard from '../../components/NewsCard'
import PostinganThread from '../../components/PostinganThread'
const HomePage = () =>
{
    return (
        <Flex justifyContent={ 'center' } direction={ { base: 'column-reverse', md: 'column-reverse', lg: 'row' } } p={ [ 5, 0 ] } mb={ 20 }>
            <Box w={ '200px' } display={ { base: 'none', xl: 'flex' } } mt={ 20 }>
                <Box position={ 'fixed' }>
                    <VStack spacing={ 10 }>
                        <Link>Home</Link>
                        <Link>Rekomendasi</Link>
                        <Link>Hot Thread</Link>
                    </VStack>
                </Box>
            </Box>
            <PostinganThread profile={ profile } />
            <Box mt={ [ 10, 20 ] } w={ [ '350px', '200px' ] } ml={ { base: 3, md: 10, xl: 3 } } mr={ { base: 2, md: 10, xl: 3 } }>
                <Text>Recent News</Text>
                <Box display={ 'flex' } flexDirection={ [ 'row', 'column' ] } mb={ 5 }>
                    <NewsCard />
                </Box>
            </Box>
        </Flex >
    )
}

export default HomePage
