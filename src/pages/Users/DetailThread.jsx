import { Flex } from '@chakra-ui/react'
import React from 'react'
import Detailtread from '../../components/Detailtread'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import NavBotom from '../../components/NavBotom'
const DetailThread = () =>
{
    return (
        <>
            <Navbar />
            <NavBotom />
            <Flex direction={ 'row' } justifyContent={ 'center' }>
                <Detailtread />
            </Flex>
            <Footer />
        </>
    )
}

export default DetailThread
