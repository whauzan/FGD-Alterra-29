import { Box, Button, Container, Flex, FormControl, FormHelperText, FormLabel, Image, Input, Stack, Text, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import camera from '../../assets/icons/kamera.png'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import NavBotom from '../../components/NavBotom'
import { Axios } from '../../helpers/axios'
import { ref, getDownloadURL, uploadBytes, getStorage } from "firebase/storage";
import { firebase } from '../../Firebase/firebase-config';

const SettingUser = () =>
{
    
    const [ name, setName ] = useState( '' );
    const [ address, setAddress ] = useState( '' );
    const [ email, setEmail ] = useState( '' );
    const [ bio, setBio ] = useState( '' );
    const [ phone, setPhone ] = useState( '' );
    const [ photo, setPhoto ] = useState( '' );

    const getDetailUser = async () =>
    {
        await Axios.get( `/profile/user/edit` )
            .then( ( resp ) =>
            {
                setName(resp.data.data.name)
                setAddress(resp.data.data.address)
                setEmail(resp.data.data.email)
                setBio(resp.data.data.bio)
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

    const EditUser = () =>
    {
        const data = {
            name, email, address, bio, phone, photo
        }
        Axios.put( `profile/user/edit`, data )
            .then( ( resp ) =>
            {
                console.log( resp.data );
            } ).catch( err => console.log( err ) )
    }

    useEffect( () =>
    {
        getDetailUser()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [] );
    console.log(photo);

    return (
        <>
            <Flex direction={ 'column' } bgColor={ 'white' } color={ 'black' }>
                <Navbar />
                <NavBotom />
                <Container p={ 5 } mb={ 20 } h={ '100vh' }>
                    <Box>
                        <Text fontWeight={ 'semibold' } fontSize={ 22 }>Sunting Profile</Text>
                    </Box>
                    <Box mt={ 10 } >
                        <FormControl>
                            <Stack direction={ 'row' } >
                                <Box position={ 'absolute' } ml={ 2 } borderRadius={ 50 } overflow={ 'hidden' } border={ '1px' } borderColor={ 'gray.300' }>
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
                                    <Image src={ photo } zIndex={ '-3' } w={ 20 } />
                                    <Input type={ 'file' } name='file' display={ 'none' } onChange={onChangeFile}/>
                                </Box>
                                <Box position={ 'absolute' } left={ '100px' } width={ [ '250px', '21em' ] }>
                                    <Text fontSize={ '18px' } fontWeight={ 'semibold' }>Ganti Profile</Text>
                                    <Text>Gunakan foto/gambar terbaikmu.
                                        Hindari gambar yang mengandung Pornografi,
                                        dan menyinggung SARA.</Text>
                                </Box>
                            </Stack>
                        </FormControl>
                        <VStack mt={ '130px' } position={ 'relative' } spacing={ '5' }>
                            <FormControl id='username'>
                                <FormLabel>Username</FormLabel>
                                <Input type='text' value={ name } onChange={ ( e ) => setName( e.target.value ) } placeholder={ name.length === 0 ? "Isi Username" : name } _placeholder={ { color: 'gray.400' } } outlineColor={ 'gray.400' } />
                            </FormControl>
                            <FormControl id='email'>
                                <FormLabel>Email address</FormLabel>
                                <Input type='email' value={ email } onChange={ ( e ) => setEmail( e.target.value ) } placeholder={ email.length === 0 ? "Isi Email" : email } _placeholder={ { color: 'gray.400' } } outlineColor={ 'gray.400' } />
                                <FormHelperText>We'll never share your email.</FormHelperText>
                            </FormControl>
                            <FormControl id='telp'>
                                <FormLabel>No Telp</FormLabel>
                                <Input type='tel' value={ phone } onChange={ ( e ) => setPhone( e.target.value ) } placeholder={ phone.length === 0 ? "Anda Belum Mengisi Nomor telpon" : phone } _placeholder={ { color: 'gray.400' } } outlineColor={ 'gray.400' } />
                            </FormControl>
                            <FormControl id='bio'>
                                <FormLabel>Biodata</FormLabel>
                                <Input type='text' value={ bio } onChange={ ( e ) => setBio( e.target.value ) } placeholder={ bio.length === 0 ? "Isi Bio Anda" : bio } _placeholder={ { color: 'gray.400' } } outlineColor={ 'gray.400' } />
                            </FormControl>
                            <FormControl id='address'>
                                <FormLabel>Alamat</FormLabel>
                                <Input type='text' value={ address } onChange={ ( e ) => setAddress( e.target.value ) } placeholder={ address.length === 0 ? "isi alamat anda" : address } _placeholder={ { color: 'gray.400' } } outlineColor={ 'gray.400' } />
                            </FormControl>
                            <Button position={ 'relative' } onClick={ EditUser } colorScheme={ 'purple' } mb={ 20 } w={ 'full' }>Submit</Button>
                        </VStack >
                    </Box >
                </Container >
                <Footer />
            </Flex >
        </>
    )
}

export default SettingUser
