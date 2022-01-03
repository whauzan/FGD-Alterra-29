import { Box, Button, Text, Container, Flex, FormControl, FormLabel, Image, Input, Select, VStack } from '@chakra-ui/react'
import React from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import NavBotom from '../../components/NavBotom'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { useState } from 'react'
import profile from '../../assets/img/Rectangle 42.png'
import { Link } from 'react-router-dom'
import { firebase } from '../../Firebase/firebase-config'
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage'
import imageCompression from 'browser-image-compression';

const compressionOption = {
    maxWidthOrHeight: 1080,
    useWebWorker: true,
};
class MyUploadAdapter {
  constructor(loader) {
    this.loader = loader;
  }
  // Starts the upload process.
  upload() {
    if (firebase) {
    return this.loader.file.then(
      file =>
        new Promise((resolve, reject) => {
          let storageRef = getStorage();
          let fileRef = ref(storageRef, file.name);
          imageCompression(file, compressionOption).then((compressedFile) => {
            uploadBytes(fileRef, compressedFile).then(() => {
              getDownloadURL(fileRef)
                .then((url) => {
                  resolve({
                    default: url
                  })
                }
            )})
            }
          );
        })
    );
  }
}
}

const CreateThread = () => {
    const [data, setData] = useState();

    const handleInput = (e, editor) => {
        setData(editor.getData())
    }
    return (
        <Flex direction={'column'}>
            <Navbar />
            <NavBotom />
            <Container centerContent h={'100vh'}>
            <Flex
                    justifyContent={ 'center' } 
                    direction={ { base: 'column-reverse', md: 'column-reverse', lg: 'row' } } 
                    p={ [ 5, 0 ] } 
                    mb={ 20 } 
                    mt={ 20 }
                >
                    <div>
                        <Box display={ 'flex' } mt={ 10 }>
                            <Link to={`/user/id`}>
                                <Box>
                                    <Image w={ '47px' } src={ profile } borderRadius={ 'full' } />
                                </Box>
                            </Link>
                            <Box ml={ 4 } >
                                <Text fontSize={ '14' } fontWeight={ 'semibold' }>Spiderman Ganteng</Text>
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
                            <Box p={ 6 } >
                                <VStack spacing={ 5 }>
                                    <FormControl>
                                        <FormLabel htmlFor='title'>Judul Thread</FormLabel>
                                        <Input type='text' id='title' placeholder='Judul Thread' />
                                    </FormControl>
                                    <Box w={'full'}>
                                        <CKEditor
                                            editor={ ClassicEditor }
                                            data={ data }
                                            onChange={ handleInput }
                                            onReady={editor => {
                                                editor.plugins.get("FileRepository").createUploadAdapter = loader => {
                                                    return new MyUploadAdapter(loader);
                                                }
                                            }}
                                        />
                                    </Box>
                                    <Button variant={ 'solid' } colorScheme={ 'purple' } w={ 'full' }>Submit</Button>
                                </VStack>
                            </Box>
                        </Box>
                    </div>
                    <Box w={ [ '350px', '200px' ] } ml={ { base: 3, md: 10, xl: 5 } } mr={ { base: 2, md: 10, xl: 3 } }>
                        <FormControl>
                            <FormLabel htmlFor='daftarmasalah'>Kategori</FormLabel>
                            <Select id='kategori' placeholder='Pilih Kategori'>
                                <option>Ilmiah</option>
                                <option>Pendidikan</option>
                                <option>Mitos</option>
                                <option>Gosip</option>
                                <option>Artis</option>
                                <option>Musik</option>
                                <option>Film</option>
                            </Select>
                        </FormControl>
                    </Box>
                </Flex>
                <Footer />
            </Container>
        </Flex>
    )
}

export default CreateThread
