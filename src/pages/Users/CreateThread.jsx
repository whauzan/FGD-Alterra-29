import { Box, Button, Text, Container, Flex, FormControl, FormLabel, Input, Select, VStack, Avatar } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import NavBotom from '../../components/NavBotom'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { firebase } from '../../Firebase/firebase-config'
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage'
import imageCompression from 'browser-image-compression';
import { useSelector } from 'react-redux'
import { Axios } from '../../helpers/axios'

const compressionOption = {
    maxWidthOrHeight: 1080,
    useWebWorker: true,
};
class MyUploadAdapter
{
    constructor ( loader )
    {
        this.loader = loader;
    }
    // Starts the upload process.
    upload ()
    {
        if ( firebase )
        {
            return this.loader.file.then(
                file =>
                    new Promise( ( resolve, reject ) =>
                    {
                        let storageRef = getStorage();
                        let fileRef = ref( storageRef, file.name );
                        imageCompression( file, compressionOption ).then( ( compressedFile ) =>
                        {
                            uploadBytes( fileRef, compressedFile ).then( () =>
                            {
                                getDownloadURL( fileRef )
                                    .then( ( url ) =>
                                    {
                                        resolve( {
                                            default: url
                                        } )
                                    }
                                    )
                            } )
                        }
                        );
                    } )
            );
        }
    }
}

const CreateThread = () =>
{
    const [ data, setData ] = useState();
    const [ user, setUser ] = useState();
    const [ listCategory, setListCategory ] = useState( [] );
    const [ category, setCategory ] = useState( '' );
    const userData = useSelector( ( state ) => state.user.users );
    const [ title, setTitle ] = useState( '' );
    useEffect( () =>
    {
        if ( userData )
        {
            setUser( userData );
        }
    }, [ userData ] )

    const handleInput = ( e, editor ) =>
    {
        setData( editor.getData() )
    }

    const AddThread = () =>
    {
        let dataThread = {
            title, content: data, category_id: parseInt( category )
        }
        console.log( dataThread );
        Axios.post( '/thread', dataThread ).then( ( resp ) =>
        {
            console.log( resp.data );
        } ).catch( err => console.log( err ) )
    }

    const getCategory = async () =>
    {
        await Axios.get( 'http://54.196.139.145:8080/categories' ).then( ( resp ) => setListCategory( resp.data.data ) ).catch( err => console.log( err ) )
    }

    useEffect( () =>
    {
        getCategory()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [] );

    return (
        <>
            <Flex direction={ 'column' } bgColor={ 'white' } color={ 'black' }>
                <Navbar />
                <NavBotom />
                <Container centerContent h={ '100vh' }>
                    <Flex
                        justifyContent={ 'center' }
                        direction={ { base: 'column-reverse', md: 'column-reverse', lg: 'row' } }
                        p={ [ 5, 0 ] }
                        mb={ 20 }
                        mt={ 20 }
                    >
                        <div>
                            <Box display={ 'flex' } mt={ 10 }>
                                <Link to={ `/user/id` }>
                                    <Box>
                                        <Avatar w={ '47px' } src={ user?.imageUrl } />
                                    </Box>
                                </Link>
                                <Box ml={ 4 } color={ 'black' }>
                                    <Text fontSize={ '14' } fontWeight={ 'semibold' }>{ user?.name }</Text>
                                    <Box display={ 'flex' }>
                                        <Text mt={ 1 } fontSize={ '13' } fontWeight={ 'normal' } color={ 'brand.200' }>Post: 0</Text>
                                        <Text mt={ 1 } ml={ 6 } fontSize={ '13' } fontWeight={ 'normal' } color={ 'brand.200' }>Newbiersss</Text>
                                    </Box>
                                </Box>
                            </Box>
                            <Box
                                mx="auto"
                                rounded="lg"
                                shadow="md"
                                w={ [ '350px', '800px' ] }
                                maxW="2xl"
                                mt={ 10 }
                            >
                                <Box p={ 6 } color={ 'black' }>
                                    <VStack spacing={ 5 }>
                                        <FormControl>
                                            <FormLabel htmlFor='title'>Judul Thread</FormLabel>
                                            <Input type='text' value={ title } onChange={ ( e ) => setTitle( e.target.value ) } id='title' placeholder='Judul Thread' _placeholder={ { color: 'gray.400' } } outlineColor={ 'gray.400' } />
                                        </FormControl>
                                        <Box w={ 'full' }>
                                            <CKEditor
                                                editor={ ClassicEditor }
                                                data={ data }
                                                onChange={ handleInput }
                                                onReady={ editor =>
                                                {
                                                    editor.plugins.get( "FileRepository" ).createUploadAdapter = loader =>
                                                    {
                                                        return new MyUploadAdapter( loader );
                                                    }
                                                } }
                                            />
                                        </Box>
                                        <Button onClick={ AddThread } variant={ 'solid' } colorScheme={ 'purple' } w={ 'full' }>Submit</Button>
                                    </VStack>
                                </Box>
                            </Box>
                        </div>
                        <Box w={ [ '350px', '200px' ] } ml={ { base: 3, md: 10, xl: 5 } } mr={ { base: 2, md: 10, xl: 3 } }>
                            <FormControl>
                                <FormLabel htmlFor='daftarmasalah'>Kategori</FormLabel>
                                <Select id='kategori' onChange={ ( e ) => setCategory( e.target.value ) } placeholder='Pilih Kategori' outlineColor={ 'gray.400' }>
                                    {
                                        listCategory.map( ( item, index ) =>
                                            <option key={ index } value={ item.category_id }>{ item.category }</option>
                                        )
                                    }
                                </Select>
                            </FormControl>
                        </Box>
                    </Flex>
                    <Footer />
                </Container>
            </Flex>
        </>
    )
}

export default CreateThread
