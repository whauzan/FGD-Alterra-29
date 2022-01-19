import { Box, Center, HStack, Stack, Text, useMediaQuery } from '@chakra-ui/react'
import React from 'react'

const AktifDi = ( { keys, aktif } ) =>
{
    const [ Mobile ] = useMediaQuery( "(min-width: 500px)" );
    return (
        <Box>
            { Mobile ? (
                <Text>Aktif Di</Text>
            ) :
                (
                    <Center>
                        <Text>Aktif Di</Text>
                    </Center>
                )
            }
            <HStack spacing={ 5 }>
                <Box mt={ 5 }>
                    <Stack spacing={ Mobile ? { md: 3, lg: 10 } : 20 } direction={ Mobile ? 'column' : 'row' } fontSize={ 13 } fontWeight={ 'medium' }>
                        <Box key={ keys } >
                            <Text>{ aktif }</Text>
                        </Box>
                    </Stack>
                </Box>
            </HStack>
        </Box>
    )
}

export default AktifDi
