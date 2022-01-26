import { Box, Flex, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import NavBotom from '../../components/NavBotom';
import NewsCard from '../../components/NewsCard';
import ThreadByCategoryeys from '../../components/ThreadByCategoryes';

const ThreadByCategory = () =>
{
    return (
        <Flex direction={ "column" } bgColor={ 'white' }>
            <Navbar />
            <NavBotom />
            <Flex justifyContent={ 'center' } direction={ { base: 'column-reverse', md: 'column-reverse', lg: 'row' } } p={ [ 5, 0 ] } mb={ 20 }>
                <Box w={ '200px' } display={ { base: 'none', xl: 'flex' } } mt={ 20 }>
                    <Box position={ 'fixed' } color={ 'black' }>
                        <VStack spacing={ 10 }>
                            <Link to={ `/` }>Home</Link>
                        </VStack>
                    </Box>
                </Box>
                <ThreadByCategoryeys />
                <Box mt={ [ 10, 20 ] } w={ [ '350px', '200px' ] } ml={ { base: 3, md: 10, xl: 3 } } mr={ { base: 2, md: 10, xl: 3 } }>
                    <Text color={ 'black' }>Recent News</Text>
                    <Box display={ 'flex' } flexDirection={ [ 'row', 'column' ] } mb={ 5 }>
                        <NewsCard />
                    </Box>
                </Box>
            </Flex >
        </Flex>
    );
};

export default ThreadByCategory;
