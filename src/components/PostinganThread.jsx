import { ChevronDownIcon } from '@chakra-ui/icons'
import { Box, Divider, HStack, Icon, Image, Input, Menu, MenuButton, MenuItem, MenuList, Spacer, Text, } from '@chakra-ui/react'
import React, { useState } from 'react'
import { MdRecommend } from 'react-icons/md'
import cover from '../assets/img/629527.jpg'
import profile from '../assets/img/Rectangle 42.png'
import { FaCommentAlt, FaShareAlt } from "react-icons/fa";
import { Link } from 'react-router-dom'
const PostinganThread = ( { profile } ) =>
{
    const [ inputList, setInputList ] = useState( [] );
    const [ komenOpen, setKomenOpen ] = useState( false )

    console.log( inputList );
    const OnaddBtn = () =>
    {
        setInputList( inputList.concat( <FormBalas tagClick={ OnaddBtn } key={ inputList.length }></FormBalas> ) );
    };


    return (
        <Box w={ [ '350px', '700px' ] } mt={ [ 10, 20 ] } ml={ { base: 3, md: 10, xl: 3 } } mr={ { base: 2, md: 10, xl: 3 } } color={'black'}>
            <Box display={ 'flex' } >
                <Box display={ 'flex' }>
                    <Link to={`/user/id`}>
                        <Box>
                            <Image w={ '47px' } src={ profile } borderRadius={ 'full' } />
                        </Box>
                    </Link>
                    <Box ml={ 4 }>
                        <Text fontSize={ '14' } fontWeight={ 'semibold' }>Spiderman Ganteng</Text>
                        <Text mt={ 1 } fontSize={ '13' } fontWeight={ 'normal' } color={ 'brand.200' }>Kemarin 19.13</Text>
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
                            <Link to={`/report/id`}>
                                <MenuItem>Laporkan</MenuItem>
                            </Link>
                        </MenuList>
                    </Menu>
                </Box>
            </Box>
            <Box mt={ 5 }>
                <Text fontSize={ '36' } fontWeight={ 'semibold' }>
                    Apakah Hitler lahir di bogor ? Kuak misterinya disini dan dari sumber yang terpercaya
                </Text>
                <Box w={ [ '350px', '650px' ] }>
                    <Image src={ cover } />
                    <Text textAlign={ 'justify' }>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem adipisci nemo doloremque animi quaerat aut expedita molestias quas asperiores nobis, quia, perferendis dolorum! Quia hic ad tempora. Et, consequuntur perferendis?
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem necessitatibus fugiat odio ipsa reiciendis, iste eos inventore natus, ex veniam quae. Et cupiditate earum numquam commodi, quia veritatis consectetur qui!
                    </Text>
                </Box>
                <Box id='like-komen-status' mt={ 5 } mr={ [ 5, 20 ] }>
                    <Box display={ 'flex' }>
                        <Box display={ 'flex' } flexDirection={ 'row' } justifyContent={ 'center' } alignItems={ 'center' }>
                            <Box display={ 'flex' } justifyContent={ 'center' } alignItems={ 'center' } cursor={ 'pointer' } w={ 10 } h={ 10 } bg={ 'brand.200' } borderRadius={ 'full' }><Icon fontSize={ '25px' } color={ 'brand.400' } as={ MdRecommend } /></Box><Text ml={ 2 }>1 Like</Text>
                        </Box>
                        <Spacer />
                        <Box display={ 'flex' } flexDirection={ 'row' } justifyContent={ 'center' } alignItems={ 'center' }>
                            <Box display={ 'flex' } onClick={ () => setKomenOpen( !komenOpen ) } justifyContent={ 'center' } alignItems={ 'center' } cursor={ 'pointer' } w={ 10 } h={ 10 } bg={ 'brand.200' } borderRadius={ 'full' }><Icon fontSize={ '20px' } color={ 'brand.400' } as={ FaCommentAlt } /></Box><Text ml={ 2 } mr={ 2 }>1 komentar</Text>
                        </Box>
                        <Box display={ 'flex' } justifyContent={ 'center' } alignItems={ 'center' } cursor={ 'pointer' } w={ 10 } h={ 10 } bg={ 'brand.200' } borderRadius={ 'full' }><Icon fontSize={ '25px' } color={ 'brand.400' } as={ FaShareAlt } /></Box>
                    </Box>
                </Box>
            </Box>
            <Box>
                <Box display={ komenOpen ? 'flex' : 'none' } flexDirection={ 'column' } mt={ 10 }>
                    <FormBalas tagClick={ OnaddBtn }>
                        { inputList }
                    </FormBalas>
                </Box>
                <Divider mt={ 10 } orientation='horizontal' />
            </Box>
        </Box>
    )
}

export default PostinganThread



const FormBalas = ( { tagClick, children } ) =>
{
    return (
        <>
            <Box display={ 'flex' } mt={ 3 }>
                <Image src={ profile } borderRadius={ 'full' } w={ '50px' } mb={ 5 } />
                <Box ml={ 2 }>
                    <Text fontWeight={ 'semibold' } id='asw' fontSize={ '14' }>Venom Unyu</Text>
                    <Input type={ 'text' } size={ 'xs' } w={ [ '300px', '540px' ] } placeholder='Tulis Komentar' outline={ 'none' } border={ 'none' } _focus={ { border: 'none' } } _placeholder={{ color: 'gray.400' }} />
                    <Divider />
                    <HStack mt={ 2 }>
                        <Text fontSize={ '11px' } onClick={ tagClick } fontWeight={ 'normal' }>Balas</Text>
                        <Text fontSize={ '11px' } fontWeight={ 'normal' }>Suka</Text>
                    </HStack>
                </Box>
            </Box>
            <Box ml={ '60px' } w={ [ '300px', '540px' ] }>
                { children }
            </Box>
        </>
    )
}