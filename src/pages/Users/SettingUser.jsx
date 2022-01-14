import { Box, Button, Container, Flex, FormControl, FormHelperText, FormLabel, Image, Input, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import camera from '../../assets/icons/kamera.png'
import Footer from '../../components/Footer'
import { useSelector } from 'react-redux';
import Navbar from '../../components/Navbar'
import NavBotom from '../../components/NavBotom'
import { useNavigate } from 'react-router-dom';

const SettingUser = () =>
{
    const userData = useSelector((state) => state.user.users);
    return (
        <>
        <Flex direction={ 'column' } bgColor={'white'} color={'black'}>
            <Navbar />
            <NavBotom />
            <Container p={ 5 } mb={ 20 } h={'100vh'}>
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
                                <Image src={ userData.imageUrl } borderRadius={ 'full' } w={ 20 } />
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
                    <VStack mt={ '130px' } position={ 'relative' } spacing={ '5' }>
                        <FormControl id='username'>
                            <FormLabel>Username</FormLabel>
                            <Input type='text' placeholder='Isi Username anda' _placeholder={{ color: 'gray.400' }} outlineColor={'gray.400'} />
                        </FormControl>
                        <FormControl id='email'>
                            <FormLabel>Email address</FormLabel>
                            <Input type='email' placeholder='VenomUnyuUnyu@gmail.com' _placeholder={{ color: 'gray.400' }} outlineColor={'gray.400'}/>
                            <FormHelperText>We'll never share your email.</FormHelperText>
                        </FormControl>
                        <FormControl id='telp'>
                            <FormLabel>No Telp</FormLabel>
                            <Input type='tel' placeholder='Anda belum mengisi nomor telpon' _placeholder={{ color: 'gray.400' }} outlineColor={'gray.400'}/>
                        </FormControl>
                        <FormControl id='ttl'>
                            <FormLabel>TTL</FormLabel>
                            <Input type='date' _placeholder={{ color: 'gray.400' }} outlineColor={'gray.400'}/>
                        </FormControl>
                        <FormControl id='bio'>
                            <FormLabel>Biodata</FormLabel>
                            <Input type='text' placeholder='Biodata' _placeholder={{ color: 'gray.400' }} outlineColor={'gray.400'}/>
                        </FormControl>
                        <FormControl id='address'>
                            <FormLabel>Alamat</FormLabel>
                            <Input type='text' placeholder='Isi alamat anda' _placeholder={{ color: 'gray.400' }} outlineColor={'gray.400'}/>
                        </FormControl>
                        <Button position={ 'relative' } colorScheme={ 'purple' } mb={ 20 } w={ 'full' }>Submit</Button>
                    </VStack >
                </Box >
            </Container >
            <Footer />
        </Flex >
        </>
    )
}

export default SettingUser
