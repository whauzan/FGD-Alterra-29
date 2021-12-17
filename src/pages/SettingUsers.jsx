import { Box, Button, Container, FormControl, FormHelperText, FormLabel, Image, Input, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import camera from '../assets/icons/kamera.png'
import profile from '../assets/img/Rectangle 42.png'
const SettingUsers = () =>
{
    return (
        <Container h={ '100vh' } p={ 5 } >
            <Box>
                <Text fontWeight={ 'semibold' } fontSize={ 22 }>Sunting Profile</Text>
            </Box>
            <Box mt={ 20 } >
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
                        <Input type='text' />
                    </FormControl>
                    <FormControl id='email'>
                        <FormLabel>Email address</FormLabel>
                        <Input type='email' />
                        <FormHelperText>We'll never share your email.</FormHelperText>
                    </FormControl>
                    <FormControl id='telp'>
                        <FormLabel>No Telp</FormLabel>
                        <Input type='tel' />
                    </FormControl>
                    <FormControl id='ttl'>
                        <FormLabel>TTL</FormLabel>
                        <Input type='date' />
                    </FormControl>
                    <FormControl id='bio'>
                        <FormLabel>Biodata</FormLabel>
                        <Input type='text' />
                    </FormControl>
                    <FormControl id='address'>
                        <FormLabel>Alamat</FormLabel>
                        <Input type='text' />
                    </FormControl>
                    <Button position={ 'relative' } colorScheme={ 'purple' } mb={ 20 } w={ 'full' }>Submit</Button>
                    <Box h={ 20 }></Box>
                </VStack>
            </Box>
        </Container >
    )
}

export default SettingUsers
