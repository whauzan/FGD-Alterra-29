import { Box, HStack, Text } from '@chakra-ui/react'
import React from 'react'

const NavBotom = () =>
{
    return (
        <Box>
            <HStack spacing={ [ 1, 5 ] } w={ 'full' } position={ 'fixed' } display={ [ 'flex', 'none' ] } bottom={ 0 } bg={ 'white' }>
                <HStack display={ [ 'flex' ] } p={ 4 } spacing={ 3 }>
                    <Box>
                        <Text>Home</Text>
                    </Box>
                    <Box>
                        <Text>Rekomendasi</Text>
                    </Box>
                    <Box>
                        <Text>Hot Thread</Text>
                    </Box>
                    <Box>
                        <Text>Chreat Thread</Text>
                    </Box>
                </HStack>
            </HStack>
        </Box>
    )
}

export default NavBotom
