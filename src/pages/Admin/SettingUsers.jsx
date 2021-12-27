import { Box, Button, Center, Divider, FormControl, FormLabel, Image, Input, Text, } from '@chakra-ui/react'
import React from 'react'
import LayoutAdmin from '../../components/LayoutAdmin'
import camera from '../../assets/icons/kamera.png'
import profile from '../../assets/img/Rectangle 42.png'


const SettingUsers = () =>
{
    return (
        <>
            <LayoutAdmin>
                <Box mt={ 10 }>
                    <Box m={ 3 }>
                        <Text fontWeight={ 'bold' }>Admin System Users</Text>
                        <Text fontWeight={ 'bold' }>Users</Text>
                    </Box>
                    <Box maxW={ [ 'lg', 'xl', '2xl', '5xl' ] } m={ 3 } display={ 'flex' } flexDirection={ 'column' } p={ 5 } fontSize={ '16px' } borderWidth='1px' borderRadius='lg' >
                        <Text mb={ 5 } fontWeight={ 'bold' } fontSize={ '16px' }>Profile</Text>
                        <Divider orientation='horizontal' />
                        <Box mt={ 5 } display={ 'flex' } justifyContent={ 'center' }>
                            <Box position={ 'absolute' } ml={ 2 } borderRadius={ 50 } overflow={ 'hidden' } border={ '1px' } borderColor={ 'gray.300' }>
                                <FormControl>
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
                                </FormControl>
                            </Box>
                            <Box mt={ 20 }>
                                <Center><Text mb={ 3 }>Image Uploaded Here</Text></Center>
                                <FormControl mb={ 3 } isRequired>
                                    <FormLabel htmlFor='first-name'>Name</FormLabel>
                                    <Input w={ [ '300px', '400px' ] } id='first-name' placeholder='First name' />
                                </FormControl>
                                <FormControl mb={ 3 } isRequired>
                                    <FormLabel htmlFor='Email'>Email</FormLabel>
                                    <Input w={ [ '300px', '400px' ] } id='Email' placeholder='Email' />
                                </FormControl>
                                <FormControl mb={ 3 } isRequired>
                                    <FormLabel htmlFor='Phone'>Phone</FormLabel>
                                    <Input w={ [ '300px', '400px' ] } id='Phone' placeholder='Phone' />
                                </FormControl>
                                <Button mb={ 60 } w={ 'full' } colorScheme={ 'purple' }>Submit</Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </LayoutAdmin>
        </>
    )
}

export default SettingUsers
