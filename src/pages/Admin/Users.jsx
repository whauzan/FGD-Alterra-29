import { Badge, Box, Menu, MenuButton, MenuItem, MenuList, Table, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import LayoutAdmin from '../../components/LayoutAdmin'
import { Axios } from '../../helpers/axios'
const Users = () =>
{
    const [ users, setUsers ] = useState( [] )
    const [ isLoading, setIsLoading ] = useState( true );
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const getUsers = async () =>
    {
        await Axios.get( '/admin/users' ).then( response =>
        {
            setUsers( response.data.data )
        } ).catch( error => console.log( error ) )
    }

    const Banned = ( id ) =>
    {
        const data = {}
        Axios.put( `/admin/users/banned/${ id }`, data ).then( response =>
        {
            console.log( response.data
            );
            setIsLoading( !isLoading )
        } ).catch( error => console.log( error ) )
    }

    useEffect( () =>
    {
        getUsers()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ isLoading ] )
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
                                    <Th isNumeric>Action</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                { users.map( ( item, index ) =>
                                    <Tr key={ index }>
                                        <Td> <Badge colorScheme={ item.status === 'active' ? 'green' : 'red' }>{ item.status }</Badge></Td>
                                        <Td display={ 'flex' } alignItems={ 'center' }>{ item.name }</Td>
                                        <Td>{ item.email }</Td>
                                        <Td isNumeric>
                                            <Menu isLazy>
                                                <MenuButton>. . .</MenuButton>
                                                <MenuList>
                                                    <MenuItem onClick={ () => Banned( item.id ) }>{ item.status === 'active' ? 'Banned' : 'Actived' }</MenuItem>
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

export default Users
