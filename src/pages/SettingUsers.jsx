import { Box, Button, Container, Flex, FormControl, FormHelperText, FormLabel, Image, Input, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import camera from '../assets/icons/kamera.png'
import profile from '../assets/img/Rectangle 42.png'
import Footer from '../components/Footer'
const SettingUsers = () =>
{
    return (
        <Flex direction={ 'column' }>
            <Container p={ 5 } mb={ 20 }>
                <Box>
                    <Text fontWeight={ 'semibold' } fontSize={ 22 }>Sunting Profile</Text>
                </Box>
                <Box mt={ 10 } >
                    <FormControl>
                        <Stack direction={ 'row' } >
                            <Box position={ 'absolute' } ml={ 2 } borderRadius={ 50 } overflow={ 'hidden' } border={ '1px' } borderColor={ 'gray.300' }>
                                <FormLabel
                                    width={ '100%' } height={ '100%' }
                                    position={ 'absolute' }
                                    bgColor={ 'rgba(0, 0, 0, 0.6)' }
                                    lineHeight={ '80px' }
                                    mr={ 10 }
                                    display={ 'flex' }
                                    justifyContent={ 'center' }
                                    alignItems={ 'center' }
                                    fontSize={ '5px' }
                                    cursor={ 'pointer' }
                                    color={ 'gray.400' }
                                >
                                    <Image src={ camera } w={ 6 } />
                                </FormLabel>
                                <Image src={ profile } borderRadius={ 'full' } w={ 20 } />
                                <Input type={ 'file' } display={ 'none' } />
                            </Box>
                            <Box position={ 'absolute' } left={ '100px' } width={ [ '250px', '21em' ] }>
                                <Text fontSize={ '18px' } fontWeight={ 'semibold' }>Ganti Profile</Text>
                                <Text>Gunakan foto/gambar terbaikmu.
                                    Hindari gambar yang mengandung Pornografi,
                                    dan menyinggung SARA.</Text>
                            </Box>
                        </Stack>
                    </FormControl>
                    <VStack top={ '8em' } position={ 'relative' } spacing={ '5' }>
                        <FormControl id='username'>
                            <FormLabel>Username</FormLabel>
                            <Input type='text' placeholder='Isi Username anda' />
                        </FormControl>
                        <FormControl id='email'>
                            <FormLabel>Email address</FormLabel>
                            <Input type='email' placeholder='VenomUnyuUnyu@gmail.com' />
                            <FormHelperText>We'll never share your email.</FormHelperText>
                        </FormControl>
                        <FormControl id='telp'>
                            <FormLabel>No Telp</FormLabel>
                            <Input type='tel' placeholder='Anda belum mengisi nomor telpon' />
                        </FormControl>
                        <FormControl id='ttl'>
                            <FormLabel>TTL</FormLabel>
                            <Input type='date' />
                        </FormControl>
                        <FormControl id='bio'>
                            <FormLabel>Biodata</FormLabel>
                            <Input type='text' placeholder='Biodata' />
                        </FormControl>
                        <FormControl id='address'>
                            <FormLabel>Alamat</FormLabel>
                            <Input type='text' placeholder='Isi alamat anda' />
                        </FormControl>
                        <Button position={ 'relative' } colorScheme={ 'purple' } mb={ 20 } w={ 'full' }>Submit</Button>
                    </VStack>
                </Box>
            </Container >
            <Footer />
        </Flex>
    )
}

export default SettingUsers
