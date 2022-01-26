import { ChevronDownIcon } from "@chakra-ui/icons";
import { Avatar, Box, Icon, Menu, MenuButton, MenuItem, MenuList, Spacer, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Axios } from "../helpers/axios";
import parse from "html-react-parser";
import { MdRecommend } from "react-icons/md";
import { FaCommentAlt, FaShareAlt } from "react-icons/fa";

const ThreadByCategoryeys = ( { profile } ) =>
{
    const { category } = useParams()
    const [ totalLikes, settotalLikes ] = useState( true );


    const [ listThread, setListThread ] = useState( [] );


    // eslint-disable-next-line react-hooks/exhaustive-deps
    async function getRecomendation ()
    {
        await Axios.get( `/threadbycategory/${ category }` )
            .then( ( resp ) =>
            {
                setListThread( resp.data.data );
                settotalLikes( false );
            } )
            .catch( err => console.log( err ) );
    }

    const Likes = ( id ) =>
    {
        const data = {
            thread_id: id
        }
        Axios.post( '/threadlike', data )
            .then( resp =>
            {
                console.log( resp.data );
                settotalLikes( false )
            } )
            .catch( err => console.log( err ) )
    }

    useEffect( () =>
    {
        getRecomendation()
    }, [ getRecomendation, totalLikes ] );


    return (
        <>
            <Box w={ [ '350px', '700px' ] } mt={ 20 } ml={ { base: 3, md: 10, xl: 3 } } mr={ { base: 2, md: 10, xl: 3 } } display={ 'flex' } flexDir={ 'column' } color={ 'black' }>
                {
                    !listThread ? <Text>Kategori ini kosong</Text> : listThread.map( item =>
                        <Box mt={ 10 } key={ item.thread_id }>
                            <Box display={ 'flex' } >
                                <Box display={ 'flex' }>
                                    <Link to={ `/user/${ item.user_id }` }>
                                        <Box>
                                            <Avatar src={ "" } />
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
                                    <Link to={ `/detail-thread/${ item.thread_id }` }>{ item.title }</Link>
                                </Text>
                                <Box w={ [ '350px', '650px' ] }>
                                    { parse( item.content ) }
                                </Box>
                                <Box id='like-komen-status' mt={ 5 } mr={ [ 5, 20 ] }>
                                    <Box display={ 'flex' }>
                                        <Box display={ 'flex' } flexDirection={ 'row' } justifyContent={ 'center' } alignItems={ 'center' }>
                                            <Box display={ 'flex' } justifyContent={ 'center' } alignItems={ 'center' } cursor={ 'pointer' } w={ 10 } h={ 10 } bg={ 'brand.200' } onClick={ () => Likes( item.thread_id ) } borderRadius={ 'full' }><Icon fontSize={ '25px' } color={ 'brand.400' } as={ MdRecommend } /></Box><Text ml={ 2 }>{ item.likes_total }Like</Text>
                                        </Box>
                                        <Spacer />
                                        <Box display={ 'flex' } flexDirection={ 'row' } justifyContent={ 'center' } alignItems={ 'center' }>
                                            <Box display={ 'flex' } justifyContent={ 'center' } alignItems={ 'center' } cursor={ 'pointer' } w={ 10 } h={ 10 } bg={ 'brand.200' } borderRadius={ 'full' }><Icon fontSize={ '20px' } color={ 'brand.400' } as={ FaCommentAlt } /></Box><Text ml={ 2 } mr={ 2 }>{ item.comments_total }komentar</Text>
                                        </Box>
                                        <Box display={ 'flex' } justifyContent={ 'center' } alignItems={ 'center' } cursor={ 'pointer' } w={ 10 } h={ 10 } bg={ 'brand.200' } borderRadius={ 'full' }><Icon fontSize={ '25px' } color={ 'brand.400' } as={ FaShareAlt } /></Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    )
                }
            </Box>
        </>
    )
}

export default ThreadByCategoryeys



