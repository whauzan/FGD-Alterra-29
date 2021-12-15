import { Button } from '@chakra-ui/react'
import React from 'react'

const ButtonProfiles = ( { messages } ) =>
{
    return (
        <Button
            size='sm'
            width={ 40 }
            border='2px'
            bg={ "white" }
            _hover={ { bg: "purple.500", color: "white" } }
            borderColor='purple.500'
            borderRadius={ "full" }
            paddingLeft={ 10 }
            paddingRight={ 10 }>
            { messages }
        </Button>
    )
}

export default ButtonProfiles
