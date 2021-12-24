import { Avatar, Box, Flex, Icon, Input, InputGroup, InputLeftElement, Text } from '@chakra-ui/react'
import React from 'react'
import Sidebar from './Sidebar'
import { BellIcon, SearchIcon } from '@chakra-ui/icons'


const LayoutAdmin = ( { children } ) =>
{
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
                        <Text display={ [ 'none', 'flex' ] } ml={ 3 } fontSize={ '12px' } >ini Admin</Text>
                        <Avatar ml={ 5 } src='' />
                    </Box>
                </Box>
                { children }
            </Box>
        </Flex>
    )
}

export default LayoutAdmin
