import { Box, Button, Center, Container, Flex, FormControl, FormLabel, Heading, Input, Select, VStack } from '@chakra-ui/react'
import React from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import NavBotom from '../../components/NavBotom'

const ReportPage = () =>
{
    return (
        <Flex direction={'column'} bgColor={'white'}>
            <Navbar />
            <NavBotom />
            <Container centerContent h={ '100vh' }>
                <Flex
                    p={ 50 }
                    w="full"
                    mt={20}
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
                        <Box p={ 6 } color={'black'}>
                            <Center>
                                <Heading>Laporkan</Heading>
                            </Center>
                            <VStack spacing={ 5 } mt={ 10 }>
                                <FormControl>
                                    <FormLabel htmlFor='masalah'>Tulis alasan anda ingin melaporkan postingan !</FormLabel>
                                    <Input type='text' id='masalah' outlineColor={'gray.400'}/>
                                </FormControl>
                                <FormControl>
                                    <FormLabel htmlFor='daftarmasalah'>Pilih Masalah</FormLabel>
                                    <Select id='daftarmasalah' placeholder='Pilih Masalah' outlineColor={'gray.400'}>
                                        <option>Mengandung SARA</option>
                                        <option>Pencemaran Nama Baik</option>
                                    </Select>
                                </FormControl>
                                <Button variant={ 'solid' } colorScheme={ 'purple' } w={ 'full' }>Submit</Button>
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
