import { Box, Menu, MenuButton, MenuItem, MenuList, Table, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import LayoutAdmin from '../../components/LayoutAdmin'
import { Axios } from '../../helpers/axios'

const Post = () =>
{
    const [ post, setPost ] = useState( [] )
    const getUsers = async () =>
    {
        await Axios.get( '/admin/posts' )
            .then( response =>
            {
                console.log( response );
                setPost( response.data.data )
            } )
            .catch( error => console.log( error ) )
    }

    const Deletedpost = ( id ) =>
    {
        let data = {}
        Axios.put( `/admin/posts/post/${ id }`, data )
            .then( resp => console.log( resp.data ) )
            .catch( err => console.log( err ) )
    }

    useEffect( () =>
    {
        getUsers()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [] )
    return (
        <>
            <LayoutAdmin>
                <Box mt={ 10 }>
                    <Box m={ 3 }>
                        <Text fontWeight={ 'bold' }>Admin System Users</Text>
                        <Text fontWeight={ 'bold' }>Users</Text>
                    </Box>
                    <Box maxW={ [ '2xl', '3xl', '4xl' ] } m={ 3 } display={ 'flex' } p={ 5 } fontSize={ '16px' } borderWidth='1px' borderRadius='lg' >
                        <Table variant='simple' fontSize={ '12px' } size={ { base: 'sm', md: 'md', lg: 'lg' } }>
                            <Thead>
                                <Tr>
                                    <Th>UserName</Th>
                                    <Th>Post</Th>
                                    <Th isNumeric>Action</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                { post.map( ( item, index ) =>
                                    <Tr key={ index } display={ item.active === true ? '' : 'none' } >
                                        <Td >{ item.name }</Td>
                                        <Td>{ item.post }</Td>
                                        <Td isNumeric>
                                            <Menu isLazy>
                                                <MenuButton>. . .</MenuButton>
                                                <MenuList>
                                                    <MenuItem onClick={ () => Deletedpost( item.post_id ) }>Delete Comment</MenuItem>
                                                </MenuList>
                                            </Menu>
                                        </Td>
                                    </Tr>
                                ) }
                            </Tbody>
                        </Table>
                    </Box>
                </Box>
            </LayoutAdmin>
        </>
    )
}

export default Post
