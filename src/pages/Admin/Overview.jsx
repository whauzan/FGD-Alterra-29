import { Box, FormControl, FormLabel, HStack, Input, Tag, TagCloseButton, TagLabel, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import CardAdmin from '../../components/CardAdmin'
import ChartsReport from '../../components/ChartsReport'
import LayoutAdmin from '../../components/LayoutAdmin'

const Overview = () =>
{

    const [ display, setDisplay ] = useState( false )
    const kategori = [ 'Hutan', 'Pendidikan', 'Artis' ]
    return (
        <>
            <LayoutAdmin>
                <Box mt={ 10 }>
                    <Box m={ 3 }>
                        <Text fontWeight={ 'bold' }>Admin System Overview</Text>
                        <Text fontWeight={ 'bold' }>Overview</Text>
                    </Box>
                    <Box display={ 'flex' } flexDirection={ [ 'column', 'row' ] }>
                        <CardAdmin title={ 'Post' } />
                        <CardAdmin title={ 'Thread' } />
                        <CardAdmin title={ 'Users' } />
                    </Box>
                    <Box m={ 3 } borderWidth='1px' borderRadius='lg' p={ 3 } overflow='hidden' maxW={ [ 'lg', '4xl' ] }>
                        <ChartsReport />
                    </Box>
                    <Box p={ 3 } flexDirection={ [ 'row', 'column' ] } display={ 'flex' }>
                        <FormControl>
                            <FormLabel htmlFor='kategori'>Kategori Post</FormLabel>
                            <Input id='kategori' type='text' />
                        </FormControl>
                        <Box mt={ '15px' }>
                            <HStack spacing={ 4 }>
                                { kategori.map( ( item, index ) =>
                                    <Tag display={ display ? 'none' : 'flex' }
                                        size={ 'md' }
                                        key={ index }
                                        borderRadius='full'
                                        variant='solid'
                                        colorScheme='green'
                                    >
                                        <TagLabel>{ item }</TagLabel>
                                        <TagCloseButton onClick={ ( id ) => setDisplay( !display ) } />
                                    </Tag> )
                                }
                            </HStack>
                        </Box>
                    </Box>
                </Box>
            </LayoutAdmin>
        </>
    )
}

export default Overview
