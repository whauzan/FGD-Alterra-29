import { Box, HStack, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import Profile from '../assets/img/Rectangle 42.png';
import ButtonProfiles from './ButtonProfiles';
const Follow = () =>
{
    return (
        <Box border={ '1px' } p={ 1 }>
            <HStack spacing={ 20 }>
                <HStack spacing={ 5 }>
                    <Box>
                        <Image
                            src={ Profile }
                            borderRadius={ 'full' }
                            w={ 45 }
                        />
                    </Box>
                    <Box>
                        <VStack fontSize={ 12 }>
                            <Text>
                                Spiderman ABCASA
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
