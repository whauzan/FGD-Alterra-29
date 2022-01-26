import { Box, Button, Center, FormControl, FormLabel, Input } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Axios } from '../helpers/axios';

const AddReputation = () =>
{

    const [ reputation, setReputation ] = useState( '' );
    const [ likePoint, setLikePoint ] = useState( '' );

    const AddRep = () =>
    {
        let formdata = new FormData()
        formdata.append( "reputation", reputation )
        formdata.append( "likepoint", likePoint )
        const data = {
            reputation, likePoint
        }

        console.log( data );
        Axios.post( '/admin/reputation', formdata ).then( resp => console.log( resp.data ) ).catch( err => console.log( err ) )
    }

    return (
        <Box border={ '1px' } p={ 5 } mb={ 20 } borderRadius={ '10px' }>
            <Center>Add Reputation</Center>
            <FormControl>
                <FormLabel htmlFor='reputaiton'>Name Reputation</FormLabel>
                <Input id='reputaiton' value={ reputation } onChange={ ( e ) => setReputation( e.target.value ) } type='text' />
            </FormControl>
            <FormControl mt={ 3 } mb={ 5 }>
                <FormLabel htmlFor='likepoin'>Like Poin</FormLabel>
                <Input id='likepoin' value={ likePoint } onChange={ ( e ) => setLikePoint( e.target.value ) } type='number' />
            </FormControl>
            <Button onClick={ AddRep }>Add Reputation</Button>
        </Box>
    );
};

export default AddReputation;
