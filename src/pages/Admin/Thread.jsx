import { Avatar, Box, Menu, MenuButton, MenuItem, MenuList, Table, Tbody, Td, Text, Tfoot, Th, Thead, Tr } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import LayoutAdmin from '../../components/LayoutAdmin'

const Thread = () =>
{
    const [ post, setPost ] = useState( [] )
    const getUsers = async () =>
    {
        try
        {
            let url = 'https://jsonplaceholder.typicode.com/posts'
            let response = await axios.get( url )
            setPost( response.data )
        } catch ( error )
        {
            console.log( error );
        }
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
                        <Text fontWeight={ 'bold' }>Thread</Text>
                    </Box>
                    <Box maxW={ '5xl' } m={ 3 } display={ 'flex' } p={ 5 } fontSize={ '16px' } borderWidth='1px' borderRadius='lg' >
                        <Table variant='simple' fontSize={ '12px' }>
                            <Thead>
                                <Tr>
                                    <Th>UserName</Th>
                                    <Th>Title</Th>
                                    <Th>Kategori</Th>
                                    <Th isNumeric>Action</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                { post.map( ( item, index ) =>
                                    <Tr key={ index }>
                                        <Td display={ 'flex' } alignItems={ 'center' }><Avatar src='' size={ 'sm' } mr={ 2 } />pp</Td>
                                        <Td>{ item.title }</Td>
                                        <Td>Mistis</Td>
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

export default Thread
