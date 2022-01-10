import { Avatar, Box, Menu, MenuButton, MenuItem, MenuList, Table, Tbody, Td, Text, Tfoot, Th, Thead, Tr } from '@chakra-ui/react'

import React, { useEffect, useState } from 'react'
import LayoutAdmin from '../../components/LayoutAdmin'
import { Axios } from '../../helpers/axios'

const Post = () =>
{
    const [ post, setPost ] = useState( [] )
    const getUsers = async () =>
    {
        await Axios.get( '/posts' )
            .then( response =>
            {
                console.log( response );
                setPost( response.data )
            } )
            .catch( error => console.log( error ) )
    }
    useEffect( () =>
    {
        getUsers()
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
                                    <Th>Title</Th>
                                    <Th>Date</Th>
                                    <Th isNumeric>Action</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                { post.map( ( item, index ) =>
                                    <Tr key={ index }>
                                        <Td ><Avatar src='' size={ 'sm' } mr={ 2 } />pp</Td>
                                        <Td>{ item.title }</Td>
                                        <Td>13-29</Td>
                                        <Td isNumeric>
                                            <Menu isLazy>
                                                <MenuButton>. . .</MenuButton>
                                                <MenuList>
                                                    <MenuItem>Chat</MenuItem>
                                                    <MenuItem>Delete User</MenuItem>
                                                </MenuList>
                                            </Menu>
                                        </Td>
                                    </Tr>
                                ) }
                            </Tbody>
                            <Tfoot>
                                <Tr>
                                    <Th>To convert</Th>
                                    <Th>into</Th>
                                    <Th isNumeric>multiply by</Th>
                                </Tr>
                            </Tfoot>
                        </Table>
                    </Box>
                </Box>
            </LayoutAdmin>
        </>
    )
}

export default Post
