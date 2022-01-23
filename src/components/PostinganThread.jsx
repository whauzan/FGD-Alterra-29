import { ChevronDownIcon } from '@chakra-ui/icons'
import { Avatar, Box, Divider, Flex, HStack, Icon, Input, Menu, MenuButton, MenuItem, MenuList, Spacer, Text, } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { MdRecommend } from 'react-icons/md'
import parse from "html-react-parser";
import profile from '../assets/img/Rectangle 42.png'
import { Axios } from '../helpers/axios'
import { FaCommentAlt, FaShareAlt } from "react-icons/fa";
import { Link } from 'react-router-dom'
const PostinganThread = ( { profile } ) =>
{
    const [ inputList, setInputList ] = useState( [] );
    const [ komenOpen, setKomenOpen ] = useState( false )
    const OnaddBtn = () =>
    {
        setInputList( inputList.concat( <FormBalas tagClick={ OnaddBtn } key={ inputList.length }></FormBalas> ) );
    };

    const [ listThread, setListThread ] = useState( [] );

    const getRecomendation = async () =>
    {
        await Axios.get( '/hotthread' )
            .then( ( resp ) =>
            {
                setListThread( resp.data.data )
            } )
            .catch( err => console.log( err ) )
    }

    useEffect( () =>
    {
        getRecomendation()
    }, [] );


    console.log( listThread );

    return (
        <>

            <Box w={ [ '350px', '700px' ] } mt={ 20 } ml={ { base: 3, md: 10, xl: 3 } } mr={ { base: 2, md: 10, xl: 3 } } display={ 'flex' } flexDir={ 'column' } color={ 'black' }>
                {
                    listThread.map( item =>
                        <Box mt={ 10 } key={ item.thread_id }>
                            <Box display={ 'flex' } >
                                <Box display={ 'flex' }>
                                    <Link to={ `/user/id` }>
                                        <Box>
                                            <Avatar src={ profile } />
                                        </Box>
                                    </Link>
                                    <Box ml={ 4 }>
                                        <Text fontSize={ '14' } fontWeight={ 'semibold' }>{ item.thread_maker }</Text>
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
                                            <Link to={ `/report/${ item.thread_id }` }>
                                                <MenuItem>Laporkan</MenuItem>
                                            </Link>
                                        </MenuList>
                                    </Menu>
                                </Box>
                            </Box>
                            <Box mt={ 5 }>
                                <Text fontSize={ '36' } fontWeight={ 'semibold' }>
                                    <Link to={ '/detail-thread' }>{ item.title }</Link>
                                </Text>
                                <Box w={ [ '350px', '650px' ] }>
                                    { parse( item.content ) }
                                </Box>
                                <Box id='like-komen-status' mt={ 5 } mr={ [ 5, 20 ] }>
                                    <Box display={ 'flex' }>
                                        <Box display={ 'flex' } flexDirection={ 'row' } justifyContent={ 'center' } alignItems={ 'center' }>
                                            <Box display={ 'flex' } justifyContent={ 'center' } alignItems={ 'center' } cursor={ 'pointer' } w={ 10 } h={ 10 } bg={ 'brand.200' } borderRadius={ 'full' }><Icon fontSize={ '25px' } color={ 'brand.400' } as={ MdRecommend } /></Box><Text ml={ 2 }>{ item.likes_total }Like</Text>
                                        </Box>
                                        <Spacer />
                                        <Box display={ 'flex' } flexDirection={ 'row' } justifyContent={ 'center' } alignItems={ 'center' }>
                                            <Box display={ 'flex' } onClick={ () => setKomenOpen( !komenOpen ) } justifyContent={ 'center' } alignItems={ 'center' } cursor={ 'pointer' } w={ 10 } h={ 10 } bg={ 'brand.200' } borderRadius={ 'full' }><Icon fontSize={ '20px' } color={ 'brand.400' } as={ FaCommentAlt } /></Box><Text ml={ 2 } mr={ 2 }>{ item.comments_total }komentar</Text>
                                        </Box>
                                        <Box display={ 'flex' } justifyContent={ 'center' } alignItems={ 'center' } cursor={ 'pointer' } w={ 10 } h={ 10 } bg={ 'brand.200' } borderRadius={ 'full' }><Icon fontSize={ '25px' } color={ 'brand.400' } as={ FaShareAlt } /></Box>
                                    </Box>
                                </Box>
                            </Box>
                            <Box>
                                <Box display={ komenOpen ? 'flex' : 'none' } flexDirection={ 'column' } mt={ 10 }>
                                    <Komentar tagClick={ OnaddBtn }>
                                        { inputList }
                                    </Komentar>
                                </Box>
                                <Divider mt={ 10 } orientation='horizontal' />
                            </Box>
                        </Box>
                    )
                }
            </Box>





        </>
    )
}

export default PostinganThread



const FormBalas = ( { tagClick, children } ) =>
{
    return (
        <>
            <Box display={ 'flex' } mt={ 3 }>
                <Avatar src={ profile } mb={ 5 } />
                <Box ml={ 2 }>
                    <Box flexDirection={ 'row' } display={ 'flex' }>
                        <Text fontWeight={ 'semibold' } id='asw' fontSize={ '14' }>Venom Unyu</Text>
                    </Box>
                    <Input type={ 'text' } variant={ 'flushed' } size={ 'sm' } w={ [ '300px', '540px' ] } placeholder='Tulis Komentar' _placeholder={ { color: 'gray.400' } } />
                    <Divider />
                </Box>
            </Box >
            <Box ml={ '60px' } w={ [ '300px', '540px' ] }>
                { children }
            </Box>
        </>
    )
}

const Komentar = ( { tagClick, children } ) =>
{
    return (
        <>
            <Box display={ 'flex' } mt={ 3 }>
                <Avatar src={ profile } mb={ 5 } />
                <Box ml={ 2 }>
                    <Box flexDirection={ 'row' } display={ 'flex' }>
                        <Text fontWeight={ 'semibold' } id='asw' fontSize={ '14' }>Venom Unyu</Text>
                        <Spacer />
                        <Flex ml={ '26.5em' }>
                            <Menu isLazy>
                                <MenuButton>. . .</MenuButton>
                                <MenuList>
                                    {/* MenuItems are not rendered unless Menu is open */ }
                                    <MenuItem>New Window</MenuItem>
                                    <MenuItem>Open Closed Tab</MenuItem>
                                    <MenuItem>Open File</MenuItem>
                                </MenuList>
                            </Menu>
                        </Flex>
                    </Box>
                    <Text textAlign={ 'justify' } w={ '35em' }>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil eum repellendus exercitationem commodi praesentium quibusdam dolores blanditiis recusandae ullam vel nostrum pariatur veritatis at, eius odit voluptate alias nesciunt natus.
                    </Text>
                    <HStack mt={ 2 }>
                        <Text fontSize={ '11px' } onClick={ tagClick } fontWeight={ 'normal' }>Balas</Text>
                        <Text fontSize={ '11px' } fontWeight={ 'normal' }>Suka</Text>
                    </HStack>
                </Box>
            </Box >
            <Box ml={ '60px' } w={ [ '300px', '540px' ] }>
                { children }
            </Box>
        </>
    )
}