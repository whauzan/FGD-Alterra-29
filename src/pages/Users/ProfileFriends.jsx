import { Box, Center, Container, Flex, HStack, Text, useMediaQuery, VStack } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import Achievement from '../../components/Achievement';
import Badges from '../../components/Badges';
import ButtonProfiles from '../../components/ButtonProfiles';
import CoverImage from '../../components/CoverImage';
import Konten from '../../components/Konten';
import NameUsers from '../../components/NameUsers';
import ProfilePict from '../../components/ProfilePict';
import cover from "../../assets/img/629527.jpg";
import Profile from "../../assets/img/Rectangle 42.png";
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import NavBotom from '../../components/NavBotom';
import { useSelector } from 'react-redux';
import { Axios } from '../../helpers/axios';
import { useState } from 'react';
import { useParams } from 'react-router-dom';


const ProfileFriends = () =>
{
    const { id } = useParams()
    const userData = useSelector( ( state ) => state.user.users );
    const [ Mobile ] = useMediaQuery( "(min-width: 500px)" );
    const [ data, setData ] = useState( [] )
    const [ isLoading, setIsLoading ] = useState( true )
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const getUserData = async () =>
    {
        await Axios( `/profile/${ id }` ).then( ( resp ) =>
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


    console.log( data );

    if ( isLoading )
    {
        return "Loading"
    }

    return (
        <Flex direction={ "column" }>
            <Navbar />
            <NavBotom />
            <Container centerContent h={ '100vh' }>
                <CoverImage cover={ cover } />
                <VStack>
                    { Mobile ? (
                        <Flex direction={ "column" }>
                            <HStack spacing={ { md: "3em", lg: "10em", xl: "13em" } }>
                                <ProfilePict Profile={ data.photo_url } Top={ 60 } />
                                <NameUsers
                                    username={ data.name }
                                    tagName={ "Newbiers" }
                                    bio={ data.bio }
                                />
                                <HStack display={ userData.name ? 'flex' : 'none' }>
                                    <ButtonProfiles messages={ "Follow" } />
                                    <ButtonProfiles messages={ "Messages" } />
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
                                        { data.active_on_category === null && data.active_on_category === null ? <Text>Data Kosong</Text> : <Badges badges={ data.badge_list } data={ data.active_on_category } /> }
                                    </HStack>
                                </Flex>
                            </VStack>
                        </Flex>
                    ) : (
                        <VStack>
                            <Center>
                                <ProfilePict Profile={ Profile } Mb={ 30 } />
                            </Center>
                            <Flex
                                direction={ "column" }
                                justifyContent={ "center" }
                                top={ 20 }
                                position={ "relative" }>
                                <Box align={ "center" } mb={ 5 }>
                                    <NameUsers
                                        username={ "Spiderman" }
                                        tagName={ "Newbiers" }
                                        bio={ "Kang Ngarang" }
                                    />
                                </Box>
                                <Center>
                                    <HStack spacing={ 2 } display={ userData.name ? 'flex' : 'none' }>
                                        <ButtonProfiles messages={ "Follow" } />
                                        <ButtonProfiles messages={ "Messages" } />
                                    </HStack>
                                </Center>
                                {
                                    data.post_total === 0 &&
                                        data.following_total === 0 &&
                                        data.thread_total === 0 && data.followers_total === 0 ? <Text>data kosong</Text> : <Achievement post={ data.post_total } thread={ data.thread_total } Followings={ data.following_total } follower={ data.followers_total } />
                                }
                                { data.active_on_category === null && data.active_on_category === null ? <Text>Data Kosong</Text> : <Badges badges={ data.badge_list } data={ data.active_on_category } /> }
                                <Center mt={ 5 }>
                                    {
                                        data.thread_on_profile === null ? "Data Kosong" : <Konten data={ data.thread_on_profile } kiri={ "Post" } kanan={ "Thread" } />
                                    }
                                </Center>
                            </Flex>
                        </VStack>
                    ) }
                </VStack>
                <Footer />
            </Container>
        </Flex>
    );
}

export default ProfileFriends
