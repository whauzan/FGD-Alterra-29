import { Avatar, Box, Flex, Icon, Input, InputGroup, InputLeftElement, Text } from '@chakra-ui/react'
import React from 'react'
import Sidebar from './Sidebar'
import { BellIcon, SearchIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'
import { Axios } from '../helpers/axios'
import { useState } from 'react'
import { useEffect } from 'react'

const LayoutAdmin = ( { children } ) =>
{
    const [ dataAdmin, setDataAdmin ] = useState( [] );
    const getAdmin = async () =>
    {
        await Axios( `/profile/1`, {
        } ).then( ( resp ) =>
        {
            setDataAdmin( resp.data.data )
        } )
            .catch( error => console.log( error ) )
    }




    useEffect( () =>
    {
        getAdmin()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [] );


    return (
        <Flex direction={ [ 'column', 'row' ] }>
            <Sidebar />
            <Box p={ 3 }>
                <Box display={ 'flex' }>
                    <Box ml={ { base: '0px', md: '300px', '2xl': '500px' } }>
                        <InputGroup>
                            <InputLeftElement
                                pointerEvents="none"
                                children={ <SearchIcon color={ 'brand.200' } /> }
                            />
                            <Input type="text" borderRadius={ 'full' } w={ { md: '300px', lg: '450px', '2xl': '500px' } } placeholder="Search..." />
                        </InputGroup>
                    </Box>
                    <Box alignItems={ 'center' } ml={ 3 } display={ 'flex' }>
                        <Icon display={ [ 'none', 'flex' ] } as={ BellIcon } ml={ 3 } fontSize={ '20px' } />
                        <Link to={ '/admin/setting' }>
                            <Box ml={ 3 } display={ 'flex' } justifyContent={ 'center' } alignItems={ 'center' }>
                                <Text display={ [ 'none', 'flex' ] } ml={ 3 } fontSize={ '12px' } >{ dataAdmin.name }</Text>
                                <Avatar size={ 'sm' } ml={ 5 } src={ dataAdmin.photo } />
                            </Box>
                        </Link>
                    </Box>
                </Box>
                { children }
            </Box>
        </Flex>
    )
}

export default LayoutAdmin
