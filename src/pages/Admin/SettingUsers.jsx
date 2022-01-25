import { Box, Button, Center, Divider, FormControl, FormLabel, Image, Input, Text, } from '@chakra-ui/react'
import React from 'react'
import LayoutAdmin from '../../components/LayoutAdmin'
import camera from '../../assets/icons/kamera.png'
import { useState } from 'react'
import { Axios } from '../../helpers/axios'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { deleteInfo } from '../../Redux/sliceUser'
import { firebase } from '../../Firebase/firebase-config'
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage'


const SettingUsers = () =>
{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [ name, setName ] = useState( '' );
    const [ email, setEmail ] = useState( '' );
    const [ phone, setPhone ] = useState( '' );
    const [ photo, setPhoto ] = useState( '' );
    const getAdmin = async () =>
    {
        await Axios.get( '/admin/edit' ).then( ( resp ) =>
        {
            setName(resp.data.data.name)
            setEmail(resp.data.data.email)
            setPhone(resp.data.data.phone)
            setPhoto(resp.data.data.photo)
        } ).catch( err => console.log( err ) )
    }

    const onChangeFile = ( e ) =>
    {
        if ( firebase )
        {
            const file = e.target.files[ 0 ];
            // console.log( file );
            const storageRef = getStorage();
            // console.log("ref",storageRef);
            const fileRef = ref(
                storageRef,
                file.name );
            // console.log( "file ref nih",fileRef );
            uploadBytes( fileRef, file ).then( () =>
            {
                getDownloadURL( fileRef )
                    .then( ( url ) =>
                    {
                        console.log( "ini link",url );
                        setPhoto( url )
                    } )
            } );
        };  
    };

    const EditAdmin = () =>
    {
        const data = {
            name, email, phone, photo
        }
        Axios.put( '/admin/edit', data )
            .then( resp => console.log( resp ) )
            .catch( err => console.log( err ) )
    }

    useEffect( () =>
    {
        getAdmin()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [] );

    const handleLogOut = () =>
    {
        dispatch( deleteInfo() );
        navigate( '/' );
    }

    return (
        <>
            <LayoutAdmin>
                <Box mt={ 10 }>
                    <Box m={ 3 }>
                        <Text fontWeight={ 'bold' }>Admin System Users</Text>
                        <Text fontWeight={ 'bold' }>Users</Text>
                    </Box>
                    <Box maxW={ [ 'lg', 'xl', '2xl', '5xl' ] } m={ 3 } display={ 'flex' } flexDirection={ 'column' } p={ 5 } fontSize={ '16px' } borderWidth='1px' borderRadius='lg' >
                        <Text mb={ 5 } fontWeight={ 'bold' } fontSize={ '16px' }>Profile</Text>
                        <Divider orientation='horizontal' />
                        <Box mt={ 5 } display={ 'flex' } justifyContent={ 'center' }>
                            <Box position={ 'absolute' } ml={ 2 } borderRadius={ 50 } overflow={ 'hidden' } border={ '1px' } borderColor={ 'gray.300' }>
                                <FormControl>
                                    <FormLabel
                                        width={ '100%' } height={ '100%' }
                                        position={ 'absolute' }
                                        bgColor={ 'rgba(0, 0, 0, 0.6)' }
                                        lineHeight={ '80px' }
                                        mr={ 10 }
                                        display={ 'flex' }
                                        justifyContent={ 'center' }
                                        alignItems={ 'center' }
                                        fontSize={ '5px' }
                                        cursor={ 'pointer' }
                                        color={ 'gray.400' }
                                    >
                                        <Image src={ camera } w={ 6 } />
                                    </FormLabel>
                                    <Image src={ photo } borderRadius={ 'full' } w={ 20 } />
                                    <Input type={ 'file' } display={ 'none' } onChange={onChangeFile} />
                                </FormControl>
                            </Box>
                            <Box mt={ 20 }>
                                <Center><Text mb={ 3 }>Image Uploaded Here</Text></Center>
                                <FormControl mb={ 3 } isRequired>
                                    <FormLabel htmlFor='first-name'>Name</FormLabel>
                                    <Input w={ [ '300px', '400px' ] } type={ 'text' } value={ name } onChange={ ( e ) => setName( e.target.value ) } id='first-name' placeholder={ name.length === 0 ? "isi Nama anda" : name } />
                                </FormControl>
                                <FormControl mb={ 3 } isRequired>
                                    <FormLabel htmlFor='Email'>Email</FormLabel>
                                    <Input w={ [ '300px', '400px' ] } type={ 'email' } id='Email' value={ email } onChange={ ( e ) => setEmail( e.target.value ) } placeholder={ email.length === 0 ? "Email anda" : email } />
                                </FormControl>
                                <FormControl mb={ 3 } isRequired>
                                    <FormLabel htmlFor='Phone'>Phone</FormLabel>
                                    <Input type={ 'tel' } value={ phone } onChange={ ( e ) => setPhone( e.target.value ) } w={ [ '300px', '400px' ] } id='Phone' placeholder={ phone.length === 0 ? "Phone anda" : phone } />
                                </FormControl>
                                <Button onClick={ EditAdmin } mb={ 5 } w={ 'full' } colorScheme={ 'purple' }>Submit</Button>
                                <Button mb={ 60 } w={ 'full' } onClick={ handleLogOut } colorScheme={ 'red' }>LogOut</Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </LayoutAdmin>
        </>
    )
}

export default SettingUsers
