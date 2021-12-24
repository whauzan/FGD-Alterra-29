import { Box, Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, HStack, Image, Text, useDisclosure, VStack } from '@chakra-ui/react'
import React from 'react'
import logo from '../assets/img/DKKU__2_-removebg-preview 1.png'

const Sidebar = () =>
{
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Box w={ '250px' }>
            <VStack display={ [ 'none', 'flex' ] } spacing={ '40px' } h={ '100vh' } p={ 5 }>
                <Image src={ logo } />
                <Text>Overview</Text>
                <Text>Users</Text>
                <Text>Post</Text>
                <Text>Thread</Text>
                <Text>Report</Text>
            </VStack>
            <Button display={ [ 'flex', 'none' ] } m={ 3 } variant={ 'outline' } colorScheme={ 'purple' } onClick={ onOpen }>
                Menu
            </Button>
            <Drawer placement={ 'left' } onClose={ onClose } isOpen={ isOpen }>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerHeader borderBottomWidth='1px'>DKKU Admin Page</DrawerHeader>
                    <DrawerBody>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Box>
    )
}

export default Sidebar
