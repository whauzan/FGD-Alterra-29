import { Box, Button, Center, FormControl, FormLabel, HStack, Input, Stack, Tag, TagLabel, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import AddReputation from '../../components/AddReputation'
import CardAdmin from '../../components/CardAdmin'
import ChartsReport from '../../components/ChartsReport'
import LayoutAdmin from '../../components/LayoutAdmin'
import { Axios } from '../../helpers/axios'

const Overview = () =>
{
    const [ dashboard, setDashboard ] = useState( [] );
    const [ listReport, setListReport ] = useState( [] );
    const [ report, setReport ] = useState( '' );
    const [ isLoading, setisLoading ] = useState( true );
    const [ listCategory, setListCategory ] = useState( [] );
    const [ category, setCategory ] = useState( '' );

    const AddReport = () =>
    {
        const data = { case: report }

        Axios.post( '/admin/reportcase', data, )
            .then( ( resp ) =>
            {
                console.log( resp.data )
                setisLoading( !isLoading )
            } )
            .catch( err => console.log( err ) )
        setReport( '' )
    }


    const getReport = async () =>
    {
        await Axios.get( `/report-thread` ).then( ( resp ) =>
        {
            setListReport( resp.data.data )
        } )
            .catch( error => console.log( error ) )
    }

    const getDashboard = async () =>
    {
        await Axios.get( `/admin` ).then( ( resp ) =>
        {
            setDashboard( resp.data.data )
        } )
            .catch( error => console.log( error ) )
    }

    const AddCategory = () =>
    {
        const data = {
            category
        }
        Axios.post( `/admin/category`, data ).then( ( resp ) =>
        {
            console.log( resp.data );
            setisLoading( !isLoading )
        } )
            .catch( error => console.log( error ) )
        setCategory( '' )
    }

    const getCategory = async () =>
    {
        await Axios.get( '/categories' ).then( resp => setListCategory( resp.data.data ) ).catch( err => console.log( err ) )
    }


    useEffect( () =>
    {
        getReport()
        getDashboard()
        getCategory()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ isLoading ] );

    const datareport = listReport.map( item =>
    {
        return item.case
    } )

    return (
        <>
            <LayoutAdmin>
                <Box mt={ 10 }>
                    <Box m={ 3 }>
                        <Text fontWeight={ 'bold' }>Admin System Overview</Text>
                        <Text fontWeight={ 'bold' }>Overview</Text>
                    </Box>
                    <Box display={ 'flex' } flexDirection={ [ 'column', 'row' ] }>
                        <CardAdmin title={ 'Post' } val={ dashboard.posts_total / 100 } totalData={ dashboard.posts_total } persenTotal={ dashboard.posts_total / 100 } />
                        <CardAdmin title={ 'Thread' } val={ dashboard.threads_total / 100 } totalData={ dashboard.threads_total } persenTotal={ dashboard.threads_total / 100 } />
                        <CardAdmin title={ 'Users' } val={ dashboard.users_total / 100 } totalData={ dashboard.users_total } persenTotal={ dashboard.users_total / 100 } />
                    </Box>
                    <Box m={ 3 } borderWidth='1px' borderRadius='lg' p={ 3 } overflow='hidden' maxW={ [ 'lg', '4xl' ] }>
                        <ChartsReport data={ datareport } count={ [ 7, 8, 3, 4, 2 ] } />
                    </Box>
                    <Center><Text fontSize={ '20' } fontWeight={ 'bold' }><Center>Add Kategori</Center></Text></Center>
                    <Box p={ 3 } flexDirection={ 'row' } display={ 'flex' } justifyContent={ 'space-around' }>
                        <Box>
                            <FormControl>
                                <FormLabel htmlFor='kategori'>Kategori Thread</FormLabel>
                                <Input id='kategori' value={ category } onChange={ ( e ) => setCategory( e.target.value ) } type='text' />
                            </FormControl>
                            <Button variant={ 'solid' } colorScheme={ 'purple' } onClick={ AddCategory } mt={ 5 }>SEND</Button>
                        </Box>
                        <Box mt={ '15px' }>
                            <Stack spacing={ 4 } direction={ [ 'column', 'row' ] }>
                                {
                                    listCategory.map( item =>
                                        <Tag display={ 'flex' }
                                            size={ 'md' }
                                            borderRadius='full'
                                            variant='solid'
                                            colorScheme='green'
                                            key={ item.category_id }
                                        >
                                            <TagLabel>{ item.category }</TagLabel>
                                        </Tag>
                                    )
                                }
                            </Stack>
                        </Box>
                    </Box>
                    <Center><Text fontSize={ '20' } fontWeight={ 'bold' }><Center>Report Category</Center></Text></Center>
                    <Box p={ 3 } flexDirection={ 'row' } display={ 'flex' } justifyContent={ 'space-around' }>
                        <Box>
                            <FormControl>
                                <FormLabel htmlFor='report'>Report Category</FormLabel>
                                <Input id='report' value={ report } onChange={ ( e ) => setReport( e.target.value ) } type='text' />
                            </FormControl>
                            <Button variant={ 'solid' } colorScheme={ 'purple' } onClick={ AddReport } mt={ 5 }>SEND</Button>
                        </Box>
                        <Box mt={ '15px' } >
                            <HStack spacing={ 4 }>
                                {
                                    listReport.map( item =>
                                        <Tag display={ 'flex' }
                                            size={ 'md' }
                                            borderRadius='full'
                                            variant='solid'
                                            colorScheme='green'
                                            key={ item.reportcases_id }
                                        >
                                            <TagLabel>{ item.case }</TagLabel>
                                        </Tag>
                                    )
                                }
                            </HStack>
                        </Box>
                    </Box>
                    <AddReputation />
                </Box>
            </LayoutAdmin>
        </>
    )
}

export default Overview
