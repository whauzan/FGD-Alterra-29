import { Box, Center, HStack, Stack, Text, useMediaQuery } from '@chakra-ui/react'
import React from 'react'

const AktifDi = () =>
{
    const [ Mobile ] = useMediaQuery( "(min-width: 500px)" );
    return (
        <Box>
            { Mobile ? ( <Text>Aktif di</Text> ) :
                ( <Center>
                    <Text>Aktif di</Text>
                </Center> )
            }
            <HStack spacing={ 5 }>
                <Box mt={ 5 }>
                    <Stack spacing={ Mobile ? { md: 3, lg: 10 } : 20 } direction={ Mobile ? 'column' : 'row' }>
                        <Box >
                            <Text>Mitos</Text>
                        </Box>
                        <Box>
                            <Text>Musik</Text>
                        </Box>
                    </Stack>
                </Box>
            </HStack>
        </Box>
    )
}

export default AktifDi
