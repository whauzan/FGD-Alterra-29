import { Box, CircularProgress, CircularProgressLabel, Menu, MenuButton, MenuItem, MenuList, Stat, StatArrow, StatGroup, StatHelpText, StatNumber, Text } from '@chakra-ui/react'
import React from 'react'

const CardAdmin = ( { title, totalData, persenTotal, val } ) =>
{
    return (
        <Box maxW='sm' m={ 3 } display={ 'flex' } p={ 5 } fontSize={ '16px' } fontWeight={ 'bold' } borderWidth='1px' borderRadius='lg' overflow='hidden'>
            <CircularProgress size='90px' value={ val } color='green.400'>
                <CircularProgressLabel>%</CircularProgressLabel>
            </CircularProgress>
            <Box>
                <Text>Total Number of { title }</Text>
                <StatGroup>
                    <Stat>
                        <StatNumber fontSize={ '14px' }>{ totalData }</StatNumber>
                        <StatHelpText>
                            <StatArrow type='increase' />
                            { persenTotal }%
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
