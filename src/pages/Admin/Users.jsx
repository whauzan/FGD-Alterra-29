import { Avatar, Badge, Box, Menu, MenuButton, MenuItem, MenuList, Table, Tbody, Td, Text, Tfoot, Th, Thead, Tr } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import LayoutAdmin from '../../components/LayoutAdmin'
import { Axios } from '../../helpers/axios'
const Users = () =>
{
    const [ users, setUsers ] = useState( [] )
    const getUsers = async () =>
    {
        await Axios.get( '/users' ).then( response =>
        {
            setUsers( response.data )
        } ).catch( error => console.log( error ) )
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
                        <Table variant='simple' fontSize={ '12px' } size={ 'md' }>
                            <Thead>
                                <Tr>
                                    <Th>Status</Th>
                                    <Th>UserName</Th>
                                    <Th>Email</Th>
                                    <Th>Phone</Th>
                                    <Th isNumeric>Action</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                { users.map( ( item, index ) =>
                                    <Tr key={ index }>
                                        <Td> <Badge colorScheme='green'>Actived</Badge></Td>
                                        <Td display={ 'flex' } alignItems={ 'center' }><Avatar src='' size={ 'sm' } mr={ 2 } />{ item.username }</Td>
                                        <Td>{ item.email }</Td>
                                        <Td>{ item.phone }</Td>
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

export default Users
