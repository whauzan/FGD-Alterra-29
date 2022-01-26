import { ChevronDownIcon } from '@chakra-ui/icons'
import { Avatar, Box, Button, Divider, Flex, Icon, Input, Link, Menu, MenuButton, MenuItem, MenuList, Spacer, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { FaCommentAlt, FaShareAlt } from 'react-icons/fa'
import { MdRecommend } from 'react-icons/md'
import { useParams } from 'react-router-dom'
import parse from "html-react-parser";
import { Axios } from '../helpers/axios'
import { useSelector } from 'react-redux'
const Detailtread = () =>
{
    const { id } = useParams()
    const [ detailThread, setdetailThread ] = useState();
    const [ isLoading, setIsLoading ] = useState( true );
    const [ komenOpen, setKomenOpen ] = useState( false )
    const [ listComment, setlistComment ] = useState( [] );
    const userData = useSelector( ( state ) => state.user.users );

    const getDetail = async () =>
    {
        await Axios.get( `/thread/${ id }` )
            .then( resp =>
            {
                setdetailThread( resp.data.data )
                setIsLoading( false )
            }
            )
            .catch( err => console.log( err ) )
    }

    const getComment = async () =>
    {
        await Axios.get( `/commentbythread/${ id }` ).then( resp => setlistComment( resp.data.data ) ).catch( err => console.log( err ) )
    }


    useEffect( () =>
    {
        getDetail()
        getComment()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ getComment ] );

    getComment()

    if ( isLoading )
    {
        return "Loading"
    }


    return (
        <Box w={ [ '350px', '700px', '800px', '900px' ] } mt={ [ 20, 40 ] } ml={ { base: 3, md: 10, xl: 3 } } mr={ { base: 2, md: 10, xl: 3 } } color={ 'black' }>
            <Box display={ 'flex' } >
                <Box display={ 'flex' }>
                    <Link to={ `/ user / ${ detailThread.user_id } ` }>
                        <Box>
                            <Avatar src={ '' } />
                        </Box>
                    </Link>
                    <Box ml={ 4 }>
                        <Text fontSize={ '14' } fontWeight={ 'semibold' }>{ detailThread.thread_maker }</Text>
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
                            <Link to={ `/ report / ${ id } ` }>
                                <MenuItem>Laporkan</MenuItem>
                            </Link>
                        </MenuList>
                    </Menu>
                </Box>
            </Box>
            <Box mt={ 5 }>
                <Text fontSize={ '36' } fontWeight={ 'semibold' }>
                    { detailThread.title }
                </Text>
                <Box w={ [ '350px', '700px', '800px', '850px' ] }>
                    { parse( detailThread.content ) }
                </Box>
                <Box id='like-komen-status' mt={ 5 } mr={ [ 5, 20 ] }>
                    <Box display={ 'flex' }>
                        <Box display={ 'flex' } flexDirection={ 'row' } justifyContent={ 'center' } alignItems={ 'center' }>
                            <Box display={ 'flex' } justifyContent={ 'center' } alignItems={ 'center' } cursor={ 'pointer' } w={ 10 } h={ 10 } bg={ 'brand.200' } borderRadius={ 'full' }><Icon fontSize={ '25px' } color={ 'brand.400' } as={ MdRecommend } /></Box><Text ml={ 2 }>{ detailThread.likes_total }Like</Text>
                        </Box>
                        <Spacer />
                        <Box display={ 'flex' } flexDirection={ 'row' } justifyContent={ 'center' } alignItems={ 'center' }>
                            <Box display={ 'flex' } onClick={ () => setKomenOpen( !komenOpen ) } justifyContent={ 'center' } alignItems={ 'center' } cursor={ 'pointer' } w={ 10 } h={ 10 } bg={ 'brand.200' } borderRadius={ 'full' }><Icon fontSize={ '20px' } color={ 'brand.400' } as={ FaCommentAlt } /></Box><Text ml={ 2 } mr={ 2 }>{ detailThread.comments_total } komentar</Text>
                        </Box>
                        <Box display={ 'flex' } justifyContent={ 'center' } alignItems={ 'center' } cursor={ 'pointer' } w={ 10 } h={ 10 } bg={ 'brand.200' } borderRadius={ 'full' }><Icon fontSize={ '25px' } color={ 'brand.400' } as={ FaShareAlt } /></Box>
                    </Box>
                </Box>
            </Box>
            <Box>
                <Box display={ komenOpen ? 'flex' : 'none' } flexDirection={ 'column' } mt={ 10 }>
                    <FormBalas names={ userData.name } id={ id } />
                    {
                        listComment.map( item =>
                            <Box key={ item.comment_id }>
                                < Komentar names={ item.name } links={ item.photo_url } link komentar={ item.comment } />
                            </Box>
                        )
                    }
                </Box>
                <Divider mt={ 10 } orientation='horizontal' />
            </Box>
        </Box>
    )
}

export default Detailtread

const FormBalas = ( { id, names } ) =>
{
    const [ koment, setKoment ] = useState( '' );

    const AddKoment = () =>
    {
        let formdata = new FormData()
        formdata.append( "thread_id", id )
        formdata.append( "reply_of", 0 )
        formdata.append( "comment", koment )
        Axios.post( '/comment', formdata ).then( resp => console.log( resp.data ) ).catch( err => console.log( err ) )
    }

    return (
        <>
            <Box display={ 'flex' } mt={ 3 }>
                <Box ml={ 2 }>
                    <Text fontWeight={ 'semibold' } id='asw' fontSize={ '14' }>{ names }</Text>
                    <Input type={ 'text' } size={ 'xs' } value={ koment } onChange={ ( e ) => setKoment( e.target.value ) } w={ [ '300px', '540px' ] } placeholder='Tulis Komentar' outline={ 'none' } border={ 'none' } _focus={ { border: 'none' } } _placeholder={ { color: 'gray.400' } } />
                    <Divider />
                    <Button mt={ 5 } onClick={ AddKoment } size={ 'sm' }>Send Komen</Button>
                </Box>
            </Box>
        </>
    )
}

const Komentar = ( { komentar, names, links } ) =>
{
    return (
        <>
            <Box display={ 'flex' } mt={ 3 }>
                <Box ml={ 2 }>
                    <Box flexDirection={ 'row' } display={ 'flex' } alignItems={ 'center' }>
                        <Avatar src={ links } />
                        <Text fontWeight={ 'semibold' } id='asw' fontSize={ '14' }>{ names }</Text>
                        <Spacer />
                        <Flex ml={ '26.5em' }>
                            <Menu isLazy>
                                <MenuButton>. . .</MenuButton>
                                <MenuList>
                                    {/* MenuItems are not rendered unless Menu is open */ }
                                    <MenuItem>New Window</MenuItem>
                                </MenuList>
                            </Menu>
                        </Flex>
                    </Box>
                    <Text textAlign={ 'justify' } w={ '35em' }>
                        { komentar }
                    </Text>
                </Box>
            </Box >
        </>
    )
}