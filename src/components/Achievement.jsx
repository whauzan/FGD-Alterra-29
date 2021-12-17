import { Box, Center, Divider, HStack, Text, useMediaQuery, VStack } from '@chakra-ui/react'
import React from 'react'
import Koneksi from './Koneksi'

const Achievement = ( { post, thread } ) =>
{
    const [ Mobile ] = useMediaQuery( "(min-width: 500px)" );
    return (
        <VStack spacing={ 5 } fontFamily={ 'Poppins' } fontWeight={ 'medium' } fontSize={ 13 } color={ 'brand.300' }>
            <Box mt={ 10 } >
                { Mobile ? ( <Text fontSize={ 13 } fontWeight={ 'medium' }>My Achivement</Text> ) :
                    ( <Center>
                        <Text fontSize={ 13 } fontWeight={ 'medium' }>My Achivement</Text>
                    </Center> )
                }
                <VStack spacing={ 5 } >
                    <Box mt={ 5 }>
                        <HStack spacing={ Mobile ? { md: 5, lg: 10, xl: 20 } : 20 }>
                            <Box >
                                <Text fontSize={ 25 }>{ post }</Text>
                            </Box>
                            <Box>
                                <Text fontSize={ 25 }>{ thread }</Text>
                            </Box>
                        </HStack>
                    </Box>
                    <Box mt={ 5 }>
                        <HStack spacing={ Mobile ? { md: 5, lg: 10, xl: 20 } : 20 } fontWeight={ 'medium' }>
                            <Box>
                                <Text>Post</Text>
                            </Box>
                            <Box>
                                <Text>Thread</Text>
                            </Box>
                        </HStack>
                    </Box>
                </VStack>
            </Box >
            <Divider mt={ 5 } mb={ 5 } orientation='horizontal' />
            <Koneksi />
        </VStack >
    )
}

export default Achievement