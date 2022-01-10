import { Box, Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Image, useDisclosure, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/img/DKKU__2_-removebg-preview 1.png'

const Sidebar = () =>
{
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Box w={ '250px' } h={ 'full' }>
            <VStack display={ [ 'none', 'flex' ] } spacing={ '40px' } h={ '100vh' } p={ 5 }>
                <Image src={ logo } />
                <Link to={ '/admin/overview' }>Overview</Link>
                <Link to={ '/admin/users' }>Users</Link>
                <Link to={ '/admin/post' }>Post</Link>
                <Link to={ '/admin/thread' }>Thread</Link>
                <Link to={ '/admin/report' }>Report</Link>
            </VStack>
            <Button display={ [ 'flex', 'none' ] } m={ 3 } variant={ 'outline' } colorScheme={ 'purple' } onClick={ onOpen }>
                Menu
            </Button>
            <Drawer placement={ 'left' } onClose={ onClose } isOpen={ isOpen }>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerHeader borderBottomWidth='1px'>DKKU Admin Page</DrawerHeader>
                    <DrawerBody display={ 'flex' } flexDirection={ 'column' }>
                        <Link to={ '/admin/overview' }>Overview</Link>
                        <Link to={ '/admin/users' }>Users</Link>
                        <Link to={ '/admin/post' }>Post</Link>
                        <Link to={ '/admin/thread' }>Thread</Link>
                        <Link to={ '/admin/report' }>Report</Link>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Box>
    )
}

export default Sidebar
