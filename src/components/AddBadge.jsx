import { Box, Button, Center, FormControl, FormLabel, Input } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Axios } from '../helpers/axios';

const AddBadge = () =>
{
    const [ badgeurl, setBadgeurl ] = useState( '' );
    const [ threadqty, setThreadqty ] = useState( '' );
    const [ category, setCategory ] = useState( '' );



    const Addbadge = () =>
    {
        const formdata = new FormData()
        const data = {
            badgeurl, threadqty, category
        }
        console.log( data );
        // Axios.post( '/admin/badge' ).then( resp => console.log( resp.data ) ).catch( err => console.log( err ) )
    }

    return (
        <Box border={ '1px' } p={ 5 } mb={ 20 } borderRadius={ '10px' }>
            <Center>Add Reputation</Center>
            <FormControl>
                <FormLabel htmlFor='reputaiton'>Name Reputation</FormLabel>
                <Input id='reputaiton' value={ badgeurl } onChange={ ( e ) => setBadgeurl( e.target.value ) } type='text' />
            </FormControl>
            <FormControl mt={ 3 } mb={ 5 }>
                <FormLabel htmlFor='likepoin'>Like Poin</FormLabel>
                <Input id='likepoin' value={ threadqty } onChange={ ( e ) => setThreadqty( e.target.value ) } type='number' />
            </FormControl>
            <FormControl mt={ 3 } mb={ 5 }>
                <FormLabel htmlFor='likepoin'>Like Poin</FormLabel>
                <Input id='likepoin' value={ category } onChange={ ( e ) => setCategory( e.target.value ) } type='number' />
            </FormControl>
            <Button onClick={ AddBadge }>Add Reputation</Button>
        </Box>
    );
};

export default AddBadge;
