import { Box, HStack, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Achievement = ( { post, thread } ) =>
{
    return (
        <Box>
            <Text>My Achivement</Text>
            <VStack>
                <Box mt={ 5 }>
                    <HStack spacing={ 20 }>
                        <Box >
                            <Text alignItems={ 'center' }>{ post }</Text>
                        </Box>
                        <Box>
                            <Text>{ thread }</Text>
                        </Box>
                    </HStack>
                </Box>
            </VStack>
            <VStack>
                <Box mt={ 5 }>
                    <HStack spacing={ 20 }>
                        <Box>
                            <Text>Post</Text>
                        </Box>
                        <Box>
                            <Text>Thread</Text>
                        </Box>
                    </HStack>
                </Box>
            </VStack>
        </Box>
    )
}

export default Achievement
