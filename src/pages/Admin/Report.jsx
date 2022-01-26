import { Box, Menu, MenuButton, MenuItem, MenuList, Table, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import LayoutAdmin from '../../components/LayoutAdmin'
import { Axios } from '../../helpers/axios';

const Report = () =>
{
    const [ reportList, setReportList ] = useState( [] );
    const getListReport = async () =>
    {
        await Axios.get( '/admin/thread-reports' ).then( ( resp ) => { setReportList( resp.data.data ) } ).catch( err => console.log( err ) )
    }

    const solveReport = ( id ) =>
    {
        Axios.put( `/admin/thread-reports/thread-report/${ id }`, {} ).then( resp => console.log( resp.data ) ).catch( err => console.log( err ) )
    }


    useEffect( () =>
    {
        getListReport()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [] );



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
                                    <Th isNumeric>Action</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {
                                    reportList.map( item =>
                                        <Tr key={ item.report_id } >
                                            <Td>{ item.title_thread }</Td>
                                            <Td>{ item.report_case }</Td>
                                            <Td><Text maxW={ 40 } noOfLines={ [ 1, 2, 3 ] }>
                                                { item.message }
                                            </Text></Td>
                                            <Td isNumeric>
                                                <Menu isLazy>
                                                    <MenuButton>. . .</MenuButton>
                                                    <MenuList>
                                                        <MenuItem onClick={ () => solveReport( item.report_id ) }>Solve Report</MenuItem>
                                                    </MenuList>
                                                </Menu>
                                            </Td>
                                        </Tr>
                                    )
                                }
                            </Tbody>
                        </Table>
                    </Box>
                </Box>
            </LayoutAdmin>
        </>
    )
}

export default Report
