import { ChevronDownIcon } from '@chakra-ui/icons'
import { Box, Icon, Image, Menu, MenuButton, MenuItem, MenuList, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import { MdRecommend } from 'react-icons/md'
import cover from '../assets/img/629527.jpg'
const PostinganThread = ( { profile } ) =>
{
    return (
        <Box w={ [ '350px', '700px' ] }>
            <Box display={ 'flex' }>
                <Box display={ 'flex' }>
                    <Box>
                        <Image w={ '47px' } src={ profile } borderRadius={ 'full' } />
                    </Box>
                    <Box ml={ 4 }>
                        <Text fontSize={ '14' } fontWeight={ 'semibold' }>Spiderman Ganteng</Text>
                        <Text mt={ 1 } fontSize={ '13' } fontWeight={ 'normal' }>Kemarin 19.13</Text>
                    </Box>
                </Box>
                <Spacer />
                <Box mr={ [ 5, 20 ] }>
                    <Menu>
                        <MenuButton fontWeight={ 'light' } fontSize={ '18px' }>
                            <ChevronDownIcon />
                        </MenuButton>
                        <MenuList>
                            <MenuItem>Simpan</MenuItem>
                            <MenuItem>Laporkan</MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
            </Box>
            <Box mt={ 5 }>
                <Text fontSize={ '36' } fontWeight={ 'semibold' }>
                    Apakah Hitler lahir di bogor ? Kuak misterinya disini dan dari sumber yang terpercaya
                </Text>
                <Box w={ '650px' }>
                    <Image src={ cover } />
                    <Text textAlign={ 'justify' }>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem adipisci nemo doloremque animi quaerat aut expedita molestias quas asperiores nobis, quia, perferendis dolorum! Quia hic ad tempora. Et, consequuntur perferendis?
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem necessitatibus fugiat odio ipsa reiciendis, iste eos inventore natus, ex veniam quae. Et cupiditate earum numquam commodi, quia veritatis consectetur qui!
                    </Text>
                </Box>
                <Box id='like-komen-status' mt={ 5 }>
                    <Box display={ 'flex' }>
                        <Box display={ 'flex' } justifyContent={ 'center' } alignItems={ 'center' } cursor={ 'pointer' } w={ 10 } h={ 10 } bg={ 'brand.200' } borderRadius={ 'full' }><Icon fontSize={ 20 } as={ MdRecommend } /></Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default PostinganThread
