import { Box, Center, Container, Flex, HStack, useMediaQuery, VStack } from '@chakra-ui/react';
import React from 'react'
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

const UsersProfile = () =>
{
    const [ Mobile ] = useMediaQuery( "(min-width: 500px)" );
    return (
        <Container centerContent h={ '100vh' }>
            <CoverImage cover={ cover } />
            <VStack>
                { Mobile ? (
                    <Flex direction={ "column" }>
                        <HStack spacing={ { md: "3em", lg: "15em", xl: "18em" } }>
                            <ProfilePict Profile={ Profile } Top={ 60 } />
                            <NameUsers
                                username={ "Spiderman Ganteng" }
                                tagName={ "Newbiers" }
                                bio={ "Kang Ngarang" }
                            />
                            <HStack>
                                <ButtonProfiles messages={ "Edit Profile" } />
                            </HStack>
                        </HStack>
                        <VStack>
                            <Flex mt={ { md: 20, lg: 8 } } direction={ "column" }>
                                <HStack spacing={ { md: "2em", lg: "5em" } }>
                                    <Achievement post={ 3 } thread={ 5 } />
                                    <HStack>
                                        <Box width={ { md: "20em", lg: "30em" } }>
                                            <Konten kiri={ "Post" } kanan={ "Thread" } />
                                        </Box>
                                    </HStack>
                                    <Badges iconbadges={ "Icon" } title={ "Suka cerita" } />
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
                                <HStack spacing={ 2 }>
                                    <ButtonProfiles messages={ "Edit Profile" } />
                                </HStack>
                            </Center>
                            <Achievement post={ 3 } thread={ 5 } />
                            <Badges iconbadges={ "Icon" } title={ "Suka cerita" } />
                            <Center mt={ 5 }>
                                <Konten kiri={ "Post" } kanan={ "Thread" } />
                            </Center>
                        </Flex>
                    </VStack>
                ) }
            </VStack>
            <Footer />
        </Container>
    )
}

export default UsersProfile
