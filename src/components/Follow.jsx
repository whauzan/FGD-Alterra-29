import { Box, HStack, Image, Text, useMediaQuery, VStack } from '@chakra-ui/react'
import React from 'react'
import Profile from '../assets/img/Rectangle 42.png';
import ButtonProfiles from './ButtonProfiles';
const Follow = () =>
{
    const [ Mobile ] = useMediaQuery( "(min-width: 500px)" );
    return (
        <Box border={ '1px' } p={ 1 }>
            <HStack spacing={ Mobile ? 0 : '10px' }>
                <HStack spacing={ 4 }>
                    <Box w={ Mobile ? 10 : '80px' }>
                        <Image
                            src={ Profile }
                            borderRadius={ 'full' }
                            w={ Mobile ? 10 : '80px' }
                        />
                    </Box>
                    <Box>
                        <VStack fontSize={ 12 }>
                            <Text>
                                Spiderman
                            </Text>
                            <Text>
                                Geeks
                            </Text>
                        </VStack>
                    </Box>
                </HStack>
                <Box>
                    <ButtonProfiles messages={ 'Follow' } />
                </Box>
            </HStack>
        </Box>
    )
}

export default Follow
