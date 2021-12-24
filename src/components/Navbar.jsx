import { Avatar, Box, Button, Flex, HStack, Image, Input, InputGroup, InputLeftElement, Menu, MenuButton, MenuItem, MenuList, Text, } from '@chakra-ui/react'
import React, { useState } from 'react'
import logos from '../assets/img/DKKU__2_-removebg-preview 1.png'
import { ChevronDownIcon, SearchIcon } from '@chakra-ui/icons'
import ModalLogin from './ModalLogin'
import Profile from './Profile'
import { Link } from 'react-router-dom'


const Navbar = () =>
{
  const [ IsLogin, ] = useState( false )
  const [ menuOpen, setMenuOpen ] = useState( false )
  return (
    <Box
      p={ 1 }
      bg={ 'white' }
      position={ 'fixed' }
      zIndex={ 3 }
    >
      <HStack spacing={ [ 1, 5 ] } w={ 'full' }>
        <Menu>
          <MenuButton display={ [ 'flex', 'none' ] } fontWeight={ 'medium' } fontSize={ '18px' }>
            <Avatar src={ logos } bg={ 'white' } />
          </MenuButton>
          <MenuList>
            <Flex direction={ 'column' }>
              <HStack onClick={ () => setMenuOpen( !menuOpen ) }>
                <Text ml={ 3 }>Kategori</Text>
              </HStack>
              <Flex direction={ 'column' } display={ menuOpen ? 'flex' : 'none' }>
                <MenuItem>adwd</MenuItem>
                <MenuItem>adwd</MenuItem>
                <MenuItem>adwd</MenuItem>
              </Flex>
            </Flex>
          </MenuList>
        </Menu>
        <Box display={ [ 'none', 'flex' ] }>
          <Link to={`/`}>
            <Image
              src={ logos }
            />
          </Link>
        </Box>
        <HStack spacing={ { base: 2, lg: 10, '2xl': '90px' } }>
          <Box display={ { base: 'none', md: 'block' } } alignItems={ 'center' }>
            <Text _active={ { borderBottom: '1px', borderColor: 'brand.100', borderBottomWidth: '2px' } } fontWeight={ 'medium' } fontSize={ 18 }>Q & A’s Forums</Text>
          </Box>
          <Box display={ [ 'none', 'flex' ] } alignItems={ 'center' }>
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
              <Input type="text" borderRadius={ 'full' } w={ [ '250px', '300px', '500px' ] } placeholder="Search..." />
            </InputGroup>
          </Box>
          <Button
            size='sm'
            width={ 40 }
            display={ [ 'none', 'flex' ] }
            variant='solid'
            colorScheme={ 'purple' }
            fontWeight={ 'medium' }
            fontSize={ 12 }
            borderRadius={ "full" }
          >
            Create Thread
          </Button>
          <Box >
            { IsLogin ? ( <Profile /> ) : ( <ModalLogin /> ) }
          </Box>
        </HStack>
      </HStack>
    </Box >
  )
}

export default Navbar