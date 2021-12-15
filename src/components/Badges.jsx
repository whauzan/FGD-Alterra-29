import { Box, HStack, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Badges = ( { iconbadges, title } ) =>
{
    return (
        <Box>
            <Text>Badges</Text>
            <VStack>
                <Box mt={ 5 }>
                    <HStack spacing={ 20 }>
                        <Box >
                            <Text alignItems={ 'center' }>{ iconbadges }</Text>
                        </Box>
                        <Box>
                            <Text>{ iconbadges }</Text>
                        </Box>
                    </HStack>
                </Box>
            </VStack>
            <VStack>
                <Box mt={ 5 }>
                    <HStack spacing={ 20 }>
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
    )
}

export default Badges
