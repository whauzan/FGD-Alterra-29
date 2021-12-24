import { Box, CircularProgress, CircularProgressLabel, Menu, MenuButton, MenuItem, MenuList, Stat, StatArrow, StatGroup, StatHelpText, StatLabel, StatNumber, Text } from '@chakra-ui/react'
import React from 'react'

const CardAdmin = ( { title } ) =>
{
    return (
        <Box maxW='sm' m={ 3 } display={ 'flex' } p={ 5 } fontSize={ '16px' } fontWeight={ 'bold' } borderWidth='1px' borderRadius='lg' overflow='hidden'>
            <CircularProgress size='90px' value={ 20 } color='green.400'>
                <CircularProgressLabel>1500</CircularProgressLabel>
            </CircularProgress>
            <Box>
                <Text>Total Number of { title }</Text>
                <StatGroup>
                    <Stat>
                        <StatLabel>Registration</StatLabel>
                        <StatNumber fontSize={ '14px' }>345,670</StatNumber>
                        <StatHelpText>
                            <StatArrow type='increase' />
                            23.36%
                        </StatHelpText>
                    </Stat>
                </StatGroup>
            </Box>
            <Box ml={ 4 }>
                <Menu isLazy>
                    <MenuButton>. . .</MenuButton>
                    <MenuList>
                        <MenuItem>Go To Page Users</MenuItem>
                        <MenuItem>Open Closed Tab</MenuItem>
                    </MenuList>
                </Menu>
            </Box>
        </Box>
    )
}

export default CardAdmin
