import { Button } from '@chakra-ui/react'
import React from 'react'

const ButtonProfiles = ( { messages } ) =>
{
    return (
        <Button
            size='sm'
            width={ 40 }
            border='2px'
            fontWeight={ 'medium' }
            fontSize={ 12 }
            bg={ "white" }
            _hover={ { bg: "brand.100", color: "white" } }
            borderColor='brand.100'
            borderRadius={ "full" }
            paddingLeft={ 10 }
            paddingRight={ 10 }>
            { messages }
        </Button>
    )
}

export default ButtonProfiles
