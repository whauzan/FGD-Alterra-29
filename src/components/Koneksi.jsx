import { Box, Center, HStack, Text, useMediaQuery, VStack } from '@chakra-ui/react'
import React from 'react'

const Koneksi = () =>
{
    const [ Mobile ] = useMediaQuery( "(min-width: 500px)" );
    return (
        <Box>
            { Mobile ? (
                <Text fontSize={ 13 } fontWeight={ 'medium' }>Koneksi</Text>
            ) :
                (
                    <Center>
                        <Text fontSize={ 13 } fontWeight={ 'medium' }>Koneksi</Text>
                    </Center>
                )
            }
            <VStack spacing={ 5 }>
                <Box mt={ 5 }>
                    <HStack spacing={ Mobile ? { md: 5, lg: 10, xl: 20 } : 40 } fontSize={ 25 }>
                        <Box >
                            <Text >1</Text>
                        </Box>
                        <Box>
                            <Text>2</Text>
                        </Box>
                    </HStack>
                </Box>
                <Box mt={ 5 }>
                    <HStack spacing={ Mobile ? { md: 5, lg: 10, xl: 20 } : 20 } fontWeight={ 'medium' }>
                        <Box>
                            <Text>Pengikut</Text>
                        </Box>
                        <Box>
                            <Text>Mengikuti</Text>
                        </Box>
                    </HStack>
                </Box>
            </VStack>
        </Box>
    )
}

export default Koneksi