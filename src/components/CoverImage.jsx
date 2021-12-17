import { Box, Image, useMediaQuery, VStack } from '@chakra-ui/react'
import React from 'react'

const CoverImage = ( { cover } ) =>
{
    const [ Mobile ] = useMediaQuery( "(min-width: 500px)" );
    return (
        <VStack p={ [ 0, 3, 4, 5 ] }>
            <Box
                display={ 'block' }
                height={ { base: 190, md: 245, lg: 298 } }
                width={ { base: 350, md: 1071, lg: 1200 } }
                position='relative'>
                <Image
                    borderTopStartRadius={ Mobile ? 20 : 0 }
                    borderBottomEndRadius={ Mobile ? 20 : 0 }
                    height={ { base: 190, md: 245, lg: 298 } }
                    width={ { base: 805, md: 1071, lg: 1200 } }
                    src={ cover }
                />
            </Box>
        </VStack>
    )
}

export default CoverImage
