import { StarIcon } from '@chakra-ui/icons';
import { Icon } from '@chakra-ui/react';
import { MdRecommend } from 'react-icons/md'
import { Box, Center, Divider, HStack, Text, useMediaQuery, VStack } from '@chakra-ui/react'
import React from 'react'
import AktifDi from './AktifDi'

const Badges = ( { iconbadges, title } ) =>
{
    const [ Mobile ] = useMediaQuery( "(min-width: 500px)" );
    return (
        <VStack spacing={ 5 } fontWeight={ 'medium' } fontSize={ 13 } color={ 'brand.300' }>
            <Box mt={ 10 } >
                { Mobile ? ( <Text fontSize={ 13 } fontWeight={ 'medium' }>Badges</Text> ) :
                    ( <Center>
                        <Text fontSize={ 13 } fontWeight={ 'medium' }>Badges</Text>
                    </Center> )
                }
                <VStack spacing={ 5 }>
                    <Box mt={ 5 }>
                        <HStack spacing={ Mobile ? { md: 5, xl: 20 } : 40 } fontSize={ 25 }>
                            <Box >
                                <Text> <StarIcon color={ 'brand.100' } /> </Text>
                            </Box>
                            <Box>
                                <Text><Icon as={ MdRecommend } color={ 'red.600' } /></Text>
                            </Box>
                        </HStack>
                    </Box>
                    <Box mt={ 5 }>
                        <HStack spacing={ Mobile ? { md: 5, lg: 10, xl: 20 } : 20 }>
                            <Box>
                                <Text>{ title }</Text>
                            </Box>
                            <Box>
                                <Text>{ title }</Text>
                            </Box>
                        </HStack>
                    </Box>
                </VStack>
            </Box >
            <Divider mt={ 5 } mb={ 5 } orientation='horizontal' />
            <AktifDi />
        </VStack >
    )
}

export default Badges
