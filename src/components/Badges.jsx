import { Box, Center, Divider, HStack, Text, useMediaQuery, VStack } from '@chakra-ui/react'
import React from 'react'
import AktifDi from './AktifDi'

const Badges = ( { iconbadges, title } ) =>
{
    const [ Mobile ] = useMediaQuery( "(min-width: 500px)" );
    return (
        <VStack spacing={ 5 }>
            <Box>
                { Mobile ? ( <Text>Badges</Text> ) :
                    ( <Center>
                        <Text>Badges</Text>
                    </Center> )
                }
                <VStack spacing={ 5 }>
                    <Box mt={ 5 }>
                        <HStack spacing={ Mobile ? { md: 5, lg: 10, xl: 20 } : 20 }>
                            <Box >
                                <Text alignItems={ 'center' }>{ iconbadges }</Text>
                            </Box>
                            <Box>
                                <Text>{ iconbadges }</Text>
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
            </Box>
            <Divider mt={ 5 } mb={ 5 } orientation='horizontal' />
            <AktifDi />
        </VStack>
    )
}

export default Badges
