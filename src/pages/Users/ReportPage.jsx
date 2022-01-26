import { Box, Button, Center, Container, Flex, FormControl, FormLabel, Heading, Input, Select, VStack } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import NavBotom from '../../components/NavBotom'
import { Axios } from '../../helpers/axios'

const ReportPage = () =>
{
    const { id } = useParams()
    const [ listReport, setlistReport ] = useState( [] );
    const [ message, setMessage ] = useState( '' );
    const [ reportCategory, setReportCategory ] = useState( '' );

    const getReport = async () =>
    {
        await Axios.get( '/report-thread' )
            .then( resp => setlistReport( resp.data.data ) )
            .catch( err => console.log( err ) )
    }

    useEffect( () =>
    {
        getReport()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [] );

    console.log( id );

    const createReport = () =>
    {
        var data = new FormData();
        data.append( "thread_id", id )
        data.append( "message", message )
        data.append( "report_case_id", reportCategory )
        console.log( data );
        Axios.post( '/report-thread', data )
            .then( resp => console.log( resp.data ) )
            .catch( err => console.log( err ) )
    }

    return (
        <Flex direction={ 'column' } bgColor={ 'white' }>
            <Navbar />
            <NavBotom />
            <Container centerContent h={ '100vh' }>
                <Flex
                    p={ 50 }
                    w="full"
                    mt={ 20 }
                    alignItems="center"
                    justifyContent="center"
                    direction={ 'column' }
                >
                    <Box
                        mx="auto"
                        rounded="lg"
                        shadow="md"
                        w={ [ '340', '530px' ] }
                        maxW="2xl"
                    >
                        <Box p={ 6 } color={ 'black' }>
                            <Center>
                                <Heading>Laporkan</Heading>
                            </Center>
                            <VStack spacing={ 5 } mt={ 10 }>
                                <FormControl>
                                    <FormLabel htmlFor='masalah'>Tulis alasan anda ingin melaporkan postingan !</FormLabel>
                                    <Input type='text' value={ message } onChange={ ( e ) => setMessage( e.target.value ) } id='masalah' outlineColor={ 'gray.400' } />
                                </FormControl>
                                <FormControl>
                                    <FormLabel htmlFor='daftarmasalah'>Pilih Masalah</FormLabel>
                                    <Select value={ reportCategory } onChange={ ( e ) => setReportCategory( e.target.value ) } id='daftarmasalah' placeholder='Pilih Masalah' outlineColor={ 'gray.400' }>
                                        {
                                            listReport.map( item =>
                                                <option key={ item.reportcases_id } value={ item.reportcases_id }>{ item.case }</option>
                                            )
                                        }
                                    </Select>
                                </FormControl>
                                <Button variant={ 'solid' } onClick={ createReport } colorScheme={ 'purple' } w={ 'full' }>Submit</Button>
                            </VStack>
                        </Box>
                    </Box>
                </Flex>
                <Footer />
            </Container>
        </Flex>
    )
}

export default ReportPage
