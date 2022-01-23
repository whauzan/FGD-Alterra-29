
import { Box, Center, Divider, Text, useMediaQuery, VStack } from '@chakra-ui/react'
import React from 'react'
import AktifDi from './AktifDi'

const Badges = ( { badges, data } ) =>
{
    const [ Mobile ] = useMediaQuery( "(min-width: 500px)" );
    return (
        <VStack spacing={ 5 } fontWeight={ 'medium' } fontSize={ 13 } color={ 'black' }>
            <Box mt={ 10 } >
                { Mobile ? ( <Text fontSize={ 13 } fontWeight={ 'medium' }>Badges</Text> ) :
                    ( <Center>
                        <Text fontSize={ 13 } fontWeight={ 'medium' }>Badges</Text>
                    </Center> )
                }
                <Box mt={ 10 }>
                    <Box display={ 'flex' } justifyContent={ 'space-between' }>
                        { badges ? badges : "List Kosong" }
                    </Box>
                </Box>
            </Box >
            <Divider mt={ 5 } mb={ 5 } orientation='horizontal' />
            { Mobile ? (
                <Text>{ "Aktif DI" }</Text>
            ) :
                (
                    <Center>
                        <Text>{ "Aktif DI" }</Text>
                    </Center>
                )
            }
            { data.map( ( item, index ) =>
                <AktifDi keys={ index } aktif={ item.category } /> ) }
        </VStack >
    )
}

export default Badges
