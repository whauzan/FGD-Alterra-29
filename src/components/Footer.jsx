import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import logo from '../assets/img/DKKU__3_-removebg-preview.png'

const Footer = () =>
{
    return (
        <Box mt={ 20 } >
            <Flex bg={ 'brand.100' } h={ [ '380px', '248px' ] } direction={ [ 'row' ] } w={ [ '25em', '30em', '56em', '70em', '78.9em', '94.8em' ] }
                justify={ { base: 'center', md: 'space-around' } }
                alignItems={ 'center' }>
                <Box>
                    <Image
                        src={ logo }
                        w={ '182px' }
                    />
                </Box>
                <Box textAlign={ 'left' } >
                    <Text color={ 'white' } fontWeight={ 'bold' }
                        fontSize={ 18 }>DKKU</Text>
                    <Text color={ 'white' } fontWeight={ 'medium' }
                        fontSize={ 18 }>Tentang Kami</Text>
                    <Text color={ 'white' } fontWeight={ 'medium' }
                        fontSize={ 18 }>Syarat dan Ketentuan</Text>
                </Box>
                <Box textAlign={ 'left' } >
                    <Text color={ 'white' } fontWeight={ 'bold' }
                        fontSize={ 18 }>Navigasi</Text>
                    <Text color={ 'white' } fontWeight={ 'medium' }
                        fontSize={ 18 }>Q & A’s Forums</Text>
                    <Text color={ 'white' } fontWeight={ 'medium' }
                        fontSize={ 18 }>Kategori</Text>
                </Box>
            </Flex>
            <Box justifyContent={ 'center' } display={ 'flex' } color={ 'white' } bg={ 'blackAlpha.900' }>
                <Text>©️ 2021 DKKU. All rights reserved</Text>
            </Box>
        </Box>
    )
}

export default Footer
