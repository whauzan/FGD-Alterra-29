import { Box, Button, HStack, Image, Input, InputGroup, InputLeftElement, Menu, MenuButton, MenuItem, MenuList, Text, } from '@chakra-ui/react'
import React from 'react'
import logos from '../assets/img/DKKU__2_-removebg-preview 1.png'
import { BellIcon, ChevronDownIcon, SearchIcon } from '@chakra-ui/icons'
import profiles from '../assets/img/Rectangle 42.png'

const Navbar = () =>
{
    return (
        <Box
            p={ 1 }
        >
            <HStack spacing={ 5 } w={ 'full' }>
                <Box>
                    <Image
                        src={ logos }
                    />
                </Box>
                <HStack spacing={ { base: 1, lg: 10, '2xl': '90px' } }>
                    <Box display={ 'flex' } alignItems={ 'center' }>
                        <Text _active={ { borderBottom: '1px', borderColor: 'brand.100', borderBottomWidth: '2px' } } fontWeight={ 'medium' } fontSize={ 18 }>Q & A’s Forums</Text>
                    </Box>
                    <Box display={ 'flex' } alignItems={ 'center' }>
                        <Menu>
                            <MenuButton as={ Text } fontWeight={ 'medium' } fontSize={ '18px' }>
                                Kategori <ChevronDownIcon />
                            </MenuButton>
                            <MenuList>
                                <MenuItem>Download</MenuItem>
                                <MenuItem>Create a Copy</MenuItem>
                                <MenuItem>Mark as Draft</MenuItem>
                                <MenuItem>Delete</MenuItem>
                                <MenuItem>Attend a Workshop</MenuItem>
                            </MenuList>
                        </Menu>
                    </Box>
                    <Box>
                        <InputGroup>
                            <InputLeftElement
                                pointerEvents="none"
                                children={ <SearchIcon color={ 'brand.200' } /> }
                            />
                            <Input type="text" borderRadius={ 'full' } w={ '500px' } placeholder="Search..." />
                        </InputGroup>
                    </Box>
                    <Button
                        size='sm'
                        width={ 40 }
                        variant='solid'
                        colorScheme={ 'purple' }
                        fontWeight={ 'medium' }
                        fontSize={ 12 }
                        borderRadius={ "full" }
                    >
                        Create Thread
                    </Button>
                    <BellIcon />
                    <Box>
                        <Image src={ profiles } borderRadius={ 'full' } w={ '46px' } />
                    </Box>
                </HStack>
            </HStack>
        </Box >
    )
}

export default Navbar
