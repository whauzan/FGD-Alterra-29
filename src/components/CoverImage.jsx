import { Box, Image, VStack } from '@chakra-ui/react'
import React from 'react'

const CoverImage = ( { cover } ) =>
{
    return (
        <VStack p={ [ 0, 3, 4, 5 ] }>
            <Box
                height={ { base: 190, md: 245, lg: 298 } }
                width={ { base: 350, md: 1071, lg: 1200 } }
                position='relative'>
                <Image
                    borderTopStartRadius={ 20 }
                    borderBottomEndRadius={ 20 }
                    height={ { base: 190, md: 245, lg: 298 } }
                    width={ { base: 805, md: 1071, lg: 1200 } }
                    src={ cover }
                />
            </Box>
        </VStack>
    )
}

export default CoverImage
