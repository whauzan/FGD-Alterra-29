import { Box, Center, Container, Flex, HStack, useMediaQuery, VStack } from '@chakra-ui/react';
import React from 'react'
import Achievement from '../../components/Achievement';
import ButtonProfiles from '../../components/ButtonProfiles';
import CoverImage from '../../components/CoverImage';
import Konten from '../../components/Konten';
import NameUsers from '../../components/NameUsers';
import ProfilePict from '../../components/ProfilePict';
import cover from "../../assets/img/629527.jpg";
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import NavBotom from '../../components/NavBotom';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Axios } from '../../helpers/axios';
import { useState } from 'react';
import { useEffect } from 'react';

const UsersProfile = () =>
{

    const userData = useSelector( ( state ) => state.user.users );
    const [ data, setData ] = useState( [] )
    const [ isLoading, setIsLoading ] = useState( true )
    const [ Mobile ] = useMediaQuery( "(min-width: 500px)" );
    const getUserData = async () =>
    {
        await Axios( `/profile/${ userData.userID }`, {
            headers: {
                "Authorization": 'Bearer ' + userData.token
            }
        } ).then( ( resp ) =>
        {
            setData( resp.data.data )
            setIsLoading( false )
        } )
            .catch( error => console.log( error ) )
    }
    useEffect( () =>
    {
        getUserData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [] )
    return (
        <>
            <Flex direction={ "column" } bgColor={ 'white' } color={ 'black' }>
                <Navbar />
                <NavBotom />
                <Container centerContent h={ '100vh' }>
                    <CoverImage cover={ cover } />
                    <VStack bgColor={ 'white' }>
                        { Mobile ? (
                            <Flex direction={ "column" }>
                                <HStack spacing={ { md: "3em", lg: "10em", xl: "13em" } }>
                                    <ProfilePict Profile={ data.photo_url } Top={ 60 } />
                                    <NameUsers
                                        username={ data.name }
                                        bio={ data.bio }
                                    />
                                    <HStack>
                                        <Link to={ `/my-profile/setting` }>
                                            <ButtonProfiles messages={ "Edit Profile" } />
                                        </Link>
                                    </HStack>
                                </HStack>
                                <VStack>
                                    <Flex mt={ { md: 20, lg: 8 } } direction={ "column" }>
                                        <HStack spacing={ { md: "2em", lg: "5em" } }>
                                            <Achievement post={ data.post_total } thread={ data.thread_total } Followings={ data.following_total } follower={ data.followers_total } />
                                            <HStack>
                                                <Box width={ { md: "20em", lg: "30em" } }>
                                                    {
                                                        isLoading ? <Konten data={ data?.thread_on_profile } kiri={ "Post" } kanan={ "Thread" } /> : "Data Kosong"
                                                    }
                                                </Box>
                                            </HStack>
                                            {/* { isLoading ? <Badges iconbadges={ "Icon" } data={ data?.active_on_category } title={ "Suka cerita" } /> : "kosong" } */ }
                                        </HStack>
                                    </Flex>
                                </VStack>
                            </Flex>
                        ) : (
                            <VStack>
                                <Center>
                                    <ProfilePict Profile={ userData.imageUrl } Mb={ 30 } />
                                </Center>
                                <Flex
                                    direction={ "column" }
                                    justifyContent={ "center" }
                                    top={ 20 }
                                    position={ "relative" }>
                                    <Box align={ "center" } mb={ 5 }>
                                        <NameUsers
                                            username={ userData.name }
                                            bio={ data.bio }
                                        />
                                    </Box>
                                    <Center>
                                        <HStack spacing={ 2 }>
                                            <Link to={ `/my-profile/setting` }>
                                                <ButtonProfiles messages={ "Edit Profile" } />
                                            </Link>
                                        </HStack>
                                    </Center>
                                    <Achievement post={ 3 } thread={ 5 } />
                                    <Center mt={ 5 }>
                                    </Center>
                                </Flex>
                            </VStack>
                        ) }
                    </VStack>
                    <Footer />
                </Container>
            </Flex>
        </>
    )
}

export default UsersProfile
