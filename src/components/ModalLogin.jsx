import { Box, Button, Divider, FormControl, FormLabel, Icon, Image, Input, InputGroup, InputRightElement, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalOverlay, Tab, TabList, TabPanel, TabPanels, Tabs, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import logoLogin from '../assets/img/imglogin.png'
import SosmedLogin from './SosmedLogin'
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const ModalLogin = () =>
{
    const [ show, setShow ] = React.useState( false )
    const { isOpen, onOpen, onClose } = useDisclosure()
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
                                                <Input id='usernames' type='text' color={ 'black' } outlineColor={ 'gray.200' } />
                                            </FormControl>
                                            <FormControl>
                                                <FormLabel htmlFor='Password'>Password</FormLabel>
                                                <InputGroup size='md'>
                                                    <Input
                                                        pr='4.5rem'
                                                        type={ show ? 'text' : 'password' }
                                                        placeholder='Enter password'
                                                    />
                                                    <InputRightElement width='4.5rem'>
                                                        <Button h='1.75rem' size='sm' variant={ 'ghost' } onClick={ () => setShow( !show ) }>
                                                            { show ? ( <Icon as={ AiFillEye } /> ) : ( <Icon as={ AiFillEyeInvisible } /> ) }
                                                        </Button>
                                                    </InputRightElement>
                                                </InputGroup>
                                            </FormControl>
                                            <Button size={ 'sm' } mt={ 4 } w={ 'full' } colorScheme={ 'purple' }>SUBMIT</Button>
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
                                                <Input id='email' type='email' color={ 'black' } outlineColor={ 'gray.400' } />
                                            </FormControl>
                                            <FormControl>
                                                <FormLabel htmlFor='username' color={ 'black' }>Username</FormLabel>
                                                <Input id='username' type='text' outlineColor={ 'gray.400' } />
                                            </FormControl>
                                            <FormControl>
                                                <FormLabel htmlFor='Password' color={ 'black' }>Password</FormLabel>
                                                <Input id='Password' type='text' outlineColor={ 'gray.400' } />
                                            </FormControl>
                                            <Button size={ 'sm' } mt={ 4 } w={ 'full' } colorScheme={ 'purple' }>SUBMIT</Button>
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
