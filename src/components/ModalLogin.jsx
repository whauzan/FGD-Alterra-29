import { Box, Button, Divider, FormControl, FormLabel, Icon, Image, Input, InputGroup, InputRightElement, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalOverlay, Tab, TabList, TabPanel, TabPanels, Tabs, Text, useDisclosure } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import logoLogin from '../assets/img/imglogin.png'
import SosmedLogin from './SosmedLogin'
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Axios } from '../helpers/axios';

const ModalLogin = () =>
{
    const [ show, setShow ] = React.useState( false )
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [ username, setUsername ] = useState( '' )
    const [ password, setPassword ] = useState( '' )
    const [ email, setEmail ] = useState( '' )

    const Register = () =>
    {
        const data = {
            name: username, password, email
        }
        Axios.post( '/register', { data } )
            .then( ( resp ) =>
            {
                console.log( 'sukses' );
                console.log( resp );
            } )
            .catch( error => console.log( error ) )
    }

    const Login = () =>
    {
        const data = {
            email,
            password,
        }
        Axios.post( '/login', { data } )
            .then( ( respons ) =>
            {
                console.log( respons.data );
            } )
            .catch( ( error ) => console.log( error ) )
    }


    useEffect( () =>
    {
        Axios.get( '/hotthread' ).then( ( resp ) =>
        {
            console.log( 'hottrid sukses' );
            console.log( resp.data );
        } ).catch( ( error ) => console.log( error ) )
    }, [] )

    return (
        <>
            <Text onClick={ onOpen } size='xl' color={ 'black' }>Masuk</Text>
            <Modal isOpen={ isOpen } size={ '2xl' } onClose={ onClose }>
                <ModalOverlay />
                <ModalContent bgColor={ 'white' }>
                    <ModalCloseButton color={ 'black' } />
                    <ModalBody>
                        <Tabs>
                            <TabList color={ 'black' }>
                                <Tab>Login</Tab>
                                <Tab>Sign Up</Tab>
                            </TabList>
                            <TabPanels>
                                <TabPanel>
                                    <Box display={ 'flex' } flexDirection={ [ 'column', 'row' ] }>
                                        <Box >
                                            <FormControl>
                                                <FormLabel htmlFor='usernames' color={ 'black' }>Username</FormLabel>
                                                <Input id='usernames' type='text' value={ email } onChange={ ( e ) => setEmail( e.target.value ) } color={ 'black' } outlineColor={ 'gray.200' } />
                                            </FormControl>
                                            <FormControl>
                                                <FormLabel htmlFor='Password'>Password</FormLabel>
                                                <InputGroup size='md'>
                                                    <Input
                                                        pr='4.5rem'
                                                        type={ show ? 'text' : 'password' }
                                                        placeholder='Enter password'
                                                        value={ password }
                                                        onChange={ ( e ) => setPassword( e.target.value ) }
                                                    />
                                                    <InputRightElement width='4.5rem'>
                                                        <Button h='1.75rem' size='sm' variant={ 'ghost' } onClick={ () => setShow( !show ) }>
                                                            { show ? ( <Icon as={ AiFillEye } /> ) : ( <Icon as={ AiFillEyeInvisible } /> ) }
                                                        </Button>
                                                    </InputRightElement>
                                                </InputGroup>
                                            </FormControl>
                                            <Button size={ 'sm' } mt={ 4 } w={ 'full' } onClick={ Login } colorScheme={ 'purple' }>SUBMIT</Button>
                                            <Box display={ 'flex' } mt={ 4 } justifyContent={ 'space-around' }>
                                                <Divider orientation='horizontal' w={ 20 } mt={ 2 } />
                                                <Text fontWeight={ 'normal' } fontSize={ '12' } color={ 'brand.100' }>Atau</Text>
                                                <Divider w={ 20 } orientation='horizontal' mt={ 2 } />
                                            </Box>
                                            <Box>
                                                <SosmedLogin />
                                            </Box>
                                        </Box>
                                        <Box display={ [ 'none', 'flex' ] } >
                                            <Image src={ logoLogin } />
                                        </Box>
                                    </Box>
                                </TabPanel>
                                <TabPanel>
                                    <Box display={ 'flex' } flexDirection={ [ 'column', 'row' ] }>
                                        <Box>
                                            <FormControl>
                                                <FormLabel fontWeight={ 'normal' } fontSize={ '16px' } htmlFor='email' color={ 'black' }>Email address</FormLabel>
                                                <Input id='email' value={ email } onChange={ ( e ) => setEmail( e.target.value ) } type='email' color={ 'black' } outlineColor={ 'gray.400' } />
                                            </FormControl>
                                            <FormControl>
                                                <FormLabel htmlFor='username' color={ 'black' }>Username</FormLabel>
                                                <Input id='username' value={ username } onChange={ ( e ) => setUsername( e.target.value ) } type='text' outlineColor={ 'gray.400' } />
                                            </FormControl>
                                            <FormControl>
                                                <FormLabel htmlFor='Password' color={ 'black' }>Password</FormLabel>
                                                <Input id='Password' value={ password } onChange={ ( e ) => setPassword( e.target.value ) } type='password' outlineColor={ 'gray.400' } />
                                            </FormControl>
                                            <Button size={ 'sm' } onClick={ Register } mt={ 4 } w={ 'full' } colorScheme={ 'purple' }>SUBMIT</Button>
                                            <Box display={ 'flex' } mt={ 4 } justifyContent={ 'space-around' }>
                                                <Divider orientation='horizontal' w={ 20 } mt={ 2 } />
                                                <Text fontWeight={ 'normal' } fontSize={ '12' } color={ 'brand.100' }>Atau</Text>
                                                <Divider w={ 20 } orientation='horizontal' mt={ 2 } />
                                            </Box>
                                            <Box>
                                                <SosmedLogin />
                                            </Box>
                                        </Box>
                                        <Box display={ [ 'none', 'flex' ] }>
                                            <Image src={ logoLogin } />
                                        </Box>
                                    </Box>
                                </TabPanel>
                            </TabPanels>
                        </Tabs>
                    </ModalBody>
                    <ModalFooter>
                        {/* <Button colorScheme='blue' size={ 'sm' } mr={ 3 } onClick={ onClose }>
                            Close
                        </Button> */}
                        {/* <Button variant='ghost' size={ 'sm' }>Secondary Action</Button> */ }
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default ModalLogin
