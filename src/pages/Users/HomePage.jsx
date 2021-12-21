import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import laNews from '../../assets/img/news.png'
const HomePage = () =>
{
    return (
        <Flex justifyContent={ 'center' } direction={ [ 'column-reverse', 'row' ] } p={ [ 5, 0 ] }>
            <Box w={ '200px' } display={ [ 'none', 'flex' ] }>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit, veniam cumque. Porro, nihil temporibus illum iste ducimus quasi accusamus eos est adipisci. Beatae doloremque dolorem voluptate sint pariatur deserunt facere?
            </Box>
            <Box w={ [ '350px', '700px' ] }>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam sed quam provident quibusdam explicabo nobis neque qui labore, unde asperiores eos ab consequatur in minima sint vitae maxime cupiditate quod?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quos eligendi voluptatum harum laudantium accusamus aliquid sed, perferendis alias excepturi tempora? Laudantium quasi ullam adipisci impedit corporis sapiente! Fugiat, magnam.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis odit officia fugit, magnam debitis esse unde possimus commodi, aperiam explicabo autem cum, doloribus ad. Tempora vitae cupiditate numquam. Dignissimos, optio?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat nemo velit odio dolorum quaerat porro, blanditiis facilis tempora odit maiores voluptatibus minus iusto doloribus. Magnam deleniti voluptatum libero maiores reiciendis!
            </Box>
            <Box w={ [ '350px', '200px' ] }>
                <Text>Recent News</Text>
                <Box display={ 'flex' } flexDirection={ [ 'row', 'column' ] } mb={ 5 }>
                    <Box w={ [ '190px', '208px' ] } p={ 5 } shadow={ 'lg' } borderRadius={ '25px' }>
                        <Box mb={ 3 }>
                            <Image src={ laNews } />
                        </Box>
                        <Box>
                            <Text>
                                Inilah Kenapa FullStack Dibayar Mahal
                            </Text>
                        </Box>
                    </Box>
                    <Box w={ [ '190px', '208px' ] } p={ 5 } shadow={ 'lg' } borderRadius={ '25px' }>
                        <Box>
                            <Image src={ laNews } />
                        </Box>
                        <Box>
                            <Text>
                                Inilah Kenapa FullStack Dibayar Mahal
                            </Text>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Flex >
    )
}

export default HomePage
