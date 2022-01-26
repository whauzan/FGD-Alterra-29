import { Avatar, Box, Button, Flex, HStack, Image, Input, InputGroup, InputLeftElement, Menu, MenuButton, MenuItem, MenuList, Text, } from '@chakra-ui/react'
import React, { useState } from 'react'
import logos from '../assets/img/DKKU__2_-removebg-preview 1.png'
import { ChevronDownIcon, SearchIcon } from '@chakra-ui/icons'
import ModalLogin from './ModalLogin'
import Profile from './Profile'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { Axios } from '../helpers/axios'
import { useEffect } from 'react'

const Navbar = () =>
{
  const userData = useSelector( ( state ) => state.user.users );
  const [ menuOpen, setMenuOpen ] = useState( false )

  const [ listCategory, setListCategory ] = useState( [] );
  const [ search, setSearch ] = useState( "" );
  const [ suggestion, setSuggestion ] = useState( [] );


  const getCategory = async () =>
  {
    await Axios.get( '/categories' )
      .then( resp => setListCategory( resp.data.data ) )
      .catch( err => console.log( err ) )
  }

  const getSearch = async () => {
    await Axios.get( '/search', {
      params: {
        threadname: search
      }
    } )
    .then(response => {
      setSuggestion( response.data.data )
    })
  }

  const onSearch = (e) => {
    setSearch(e.target.value)
  }

  useEffect( () =>
  {
    getCategory()
    if (search.length > 0) {
      getSearch()
    }
  }, [search] );

  console.log(suggestion);
  return (
    <Box
      p={ 1 }
      bg={ 'white' }
      position={ 'fixed' }
      zIndex={ 3 }
      w={ 'full' }
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
                {
                  listCategory.map( ( item, index ) =>
                    <MenuItem key={ index }><Link to={ `/${ item.category_id }` }>{ item.category }</Link></MenuItem>
                  )
                }
              </Flex>
            </Flex>
          </MenuList>
        </Menu>
        <Box display={ [ 'none', 'flex' ] }>
          <Link to={ `/` }>
            <Image
              src={ logos }
            />
          </Link>
        </Box>
        <HStack spacing={ { base: 2, lg: 10, '2xl': '90px' } }>
          <Box display={ { base: 'none', md: 'block' } } alignItems={ 'center' }>
            <Text _active={ { borderBottom: '1px', borderColor: 'brand.100', borderBottomWidth: '2px' } } fontWeight={ 'medium' } fontSize={ 18 } color={ 'black' }>Q & A’s Forums</Text>
          </Box>
          <Box display={ [ 'none', 'flex' ] } alignItems={ 'center' }>
            <Menu>
              <MenuButton as={ Text } fontWeight={ 'medium' } fontSize={ '18px' } color={ 'black' }>
                Kategori <ChevronDownIcon />
              </MenuButton>
              <MenuList>
                {
                  listCategory.map( ( item, index ) =>
                    <MenuItem key={ index } ><Link to={ `/${ item.category_id }` }>{ item.category }</Link></MenuItem>
                  )
                }
              </MenuList>
            </Menu>
          </Box>
          <Box>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={ <SearchIcon color={ 'brand.200' } /> }
              />
              <Input type="text" borderRadius={ 'full' } w={ [ '250px', '300px', '500px' ] }
                placeholder="Search..."
                borderColor={ 'gray.400' }
                _placeholder={ { color: 'gray.400' } }
                color={ 'black' }
                onChange={onSearch}
                onBlur={() => {
                  setTimeout(() => {
                    setSuggestion([])
                  }, 100)
                }}
              />
            </InputGroup>
            <Box position={'absolute'} top={14} backgroundColor={'gray.50'} w={[ '250px', '300px', '500px' ]} borderRadius={'md'}>
              {suggestion && suggestion.map((item, key) => (
                <Link to={ `/detail-thread/${ item.thread_id }` }>
                  <Box borderRadius={'full'} pl={10} py={1} key={key} _hover={{backgroundColor: "gray.100"}}>{item.title}</Box>
                </Link>
              ))}
            </Box>
          </Box>
          <Link to={ `/create-thread` }>
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
          </Link>
          <Box >
            { userData.name ? ( <Profile imageUrl={ userData.imageUrl } /> ) : ( <ModalLogin /> ) }
          </Box>
        </HStack>
      </HStack>
    </Box >
  )
}

export default Navbar