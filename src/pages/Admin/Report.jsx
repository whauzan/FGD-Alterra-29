import { Box, Menu, MenuButton, MenuItem, MenuList, Table, Tbody, Td, Text, Tfoot, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'
import LayoutAdmin from '../../components/LayoutAdmin'

const Report = () =>
{
    return (
        <>
            <LayoutAdmin>
                <Box mt={ 10 }>
                    <Box m={ 3 }>
                        <Text fontWeight={ 'bold' }>Admin System Users</Text>
                        <Text fontWeight={ 'bold' }>Users</Text>
                    </Box>
                    <Box m={ 3 } maxW={ [ '2xl', '3xl', '4xl' ] } display={ 'flex' } p={ 5 } fontSize={ '16px' } borderWidth='1px' borderRadius='lg' >
                        <Table variant='simple' fontSize={ '12px' } size={ [ 'sm', 'md', 'lg' ] }>
                            <Thead>
                                <Tr>
                                    <Th>Title Post</Th>
                                    <Th>Masalah</Th>
                                    <Th>Alasan</Th>
                                    <Th>Category Thread</Th>
                                    <Th isNumeric>Action</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr >
                                    <Td>pp</Td>
                                    <Td>Kekerasan</Td>
                                    <Td><Text maxW={ 40 } noOfLines={ [ 1, 2, 3 ] }>
                                        "The quick brown fox jumps over the lazy dog" is an English-language pangram—a
                                    </Text></Td>
                                    <Td>Mitos</Td>
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

export default Report
