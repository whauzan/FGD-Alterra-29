import { PhoneIcon } from '@chakra-ui/icons';
import { Tooltip } from '@chakra-ui/react';
import { Box, Center, Divider, Text, useMediaQuery, VStack } from '@chakra-ui/react'
import React from 'react'
import AktifDi from './AktifDi'

const Badges = () =>
{
    const [ Mobile ] = useMediaQuery( "(min-width: 500px)" );
    return (
        <VStack spacing={ 5 } fontWeight={ 'medium' } fontSize={ 13 } color={ 'black' }>
            <Box mt={ 10 } >
                { Mobile ? ( <Text fontSize={ 13 } fontWeight={ 'medium' }>Badges</Text> ) :
                    ( <Center>
                        <Text fontSize={ 13 } fontWeight={ 'medium' }>Badges</Text>
                    </Center> )
                }
                <Box mt={ 10 }>
                    <Box display={ 'flex' } justifyContent={ 'space-between' }>
                        <Tooltip mt={ 20 } hasArrow label='Suka Mencari' bg='gray.300' color='black'>
                            <PhoneIcon fontSize={ '30px' } />
                        </Tooltip>
                        <Tooltip hasArrow label='Suka Telpon' bg='gray.300' color='black'>
                            <PhoneIcon fontSize={ '30px' } color={ 'red.600' } />
                        </Tooltip>
                    </Box>
                </Box>
            </Box >
            <Divider mt={ 5 } mb={ 5 } orientation='horizontal' />
            <AktifDi />
        </VStack >
    )
}

export default Badges
