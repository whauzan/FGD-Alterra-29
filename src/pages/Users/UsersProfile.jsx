import { Box, Center, Container, Flex, HStack, Text, useMediaQuery, VStack } from '@chakra-ui/react';
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
import Badges from '../../components/Badges';

const UsersProfile = () =>
{
    const userData = useSelector( ( state ) => state.user.users );
    const [ data, setData ] = useState( [] )
    const [ isLoading, setIsLoading ] = useState( true )
    const [ Mobile ] = useMediaQuery( "(min-width: 500px)" );
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const getUserData = async () =>
    {
        await Axios( `/profile/${ userData.userID }` ).then( ( resp ) =>
        {
            setData( resp.data.data )
            console.log( data );
            setIsLoading( false )
        } )
            .catch( error => console.log( error ) )
    }
    useEffect( () =>
    {
        getUserData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [] )



    if ( isLoading )
    {
        return "Loading"
    }
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
                                            {
                                                data.post_total === 0 &&
                                                    data.following_total === 0 &&
                                                    data.thread_total === 0 && data.followers_total === 0 ? <Text>data kosong</Text> : <Achievement post={ data.post_total } thread={ data.thread_total } Followings={ data.following_total } follower={ data.followers_total } />
                                            }
                                            <HStack>
                                                <Box width={ { md: "20em", lg: "30em" } }>
                                                    {
                                                        data.thread_on_profile === null ? "Data Kosong" : <Konten data={ data.thread_on_profile } kiri={ "Post" } kanan={ "Thread" } />
                                                    }
                                                </Box>
                                            </HStack>
                                            <Box>
                                                { data.active_on_category === null && data.active_on_category === null ? <Text>Data Kosong</Text> : <Badges badges={ data.badge_list } data={ data.active_on_category } /> }
                                            </Box>
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
                                    {
                                        data.post_total === 0 &&
                                            data.following_total === 0 &&
                                            data.thread_total === 0 && data.followers_total === 0 ? <Achievement post={ data.post_total } thread={ data.thread_total } Followings={ data.following_total } follower={ data.followers_total } /> : "Data Kosong"
                                    }
                                    <Center mt={ 5 }>
                                        { data.active_on_category === null && data.active_on_category === null ? <Text>Data Badges Kosong</Text> : <Badges badges={ data.badge_list } data={ data.active_on_category } /> }
                                    </Center>
                                    {
                                        data.thread_on_profile === null ? <Center mt={ 10 }> Konten Kosong</Center> : <Konten data={ data.thread_on_profile } kiri={ "Post" } kanan={ "Thread" } />
                                    }
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
