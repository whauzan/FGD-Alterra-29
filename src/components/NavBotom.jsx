import { Box, Button, HStack, Icon } from '@chakra-ui/react'
import React from 'react'
import { MdHome, MdRecommend } from 'react-icons/md'
import { AiFillFire, AiFillPlusCircle } from "react-icons/ai";
import { Link } from 'react-router-dom';
const NavBotom = () =>
{
    return (
        <Box zIndex={ 3 }>
            <HStack spacing={ [ 1, 5 ] } w={ 'full' } position={ 'fixed' } display={ [ 'flex', 'none' ] } bottom={ 0 } bg={ 'white' }>
                <HStack display={ [ 'flex' ] } p={ 4 } spacing={ 10 }>
                    <Box>
                        <Link to={ `/` }>
                            <Button variant={ 'ghost' }><Icon as={ MdHome } h={ 100 } w={ 'full' } color={ 'red.600' } /></Button>
                        </Link>
                    </Box>
                    <Box>
                        <Link to={ `/recommendation` }>
                            <Button variant={ 'ghost' }><Icon as={ MdRecommend } h={ 100 } w={ 'full' } color={ 'red.600' } /></Button>
                        </Link>
                    </Box>
                    <Box>
                        <Link to={ `/hot-thread` }>
                            <Button variant={ 'ghost' }><Icon as={ AiFillFire } h={ 100 } w={ 'full' } color={ 'red.600' } /></Button>
                        </Link>
                    </Box>
                    <Box>
                        <Link to={ `/create-thread` }>
                            <Button variant={ 'ghost' }><Icon as={ AiFillPlusCircle } h={ 100 } w={ 'full' } color={ 'red.600' } /></Button>
                        </Link>
                    </Box>
                </HStack>
            </HStack>
        </Box>
    )
}

export default NavBotom
