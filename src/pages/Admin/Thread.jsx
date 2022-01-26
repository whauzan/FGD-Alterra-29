import { Box, Menu, MenuButton, MenuItem, MenuList, Table, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import LayoutAdmin from '../../components/LayoutAdmin'
import { Axios } from '../../helpers/axios'

const Thread = () =>
{
    const [ post, setPost ] = useState( [] )
    const getUsers = async () =>
    {
        await Axios.get( '/admin/threads' ).then( responses =>
        {
            setPost( responses.data.data )
            console.log( post );
        } ).catch( error => console.log( error ) )
    }

    const DeleteThread = ( id ) =>
    {
        Axios.put( `/admin/threads/unactivate/${ id }` ).then( resp => console.log( resp.data ) ).catch( err => console.log( err ) )
    }

    const ActiveThread = ( id ) =>
    {
        Axios.put( `/admin/threads/activate/${ id }` ).then( resp => console.log( resp.data ) ).catch( err => console.log( err ) )
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
                                        <Td display={ 'flex' } alignItems={ 'center' }>{ item.name }</Td>
                                        <Td>{ item.thread_title }</Td>
                                        <Td>{ item.category }</Td>
                                        <Td isNumeric>
                                            <Menu isLazy>
                                                <MenuButton>. . .</MenuButton>
                                                <MenuList>
                                                    <MenuItem onClick={ () => ActiveThread( item.thread_id ) }>Active Thread</MenuItem>
                                                    <MenuItem onClick={ () => DeleteThread( item.thread_id ) }>Delete Thread</MenuItem>
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

export default Thread
