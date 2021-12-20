import { Button } from '@chakra-ui/react'
import React from 'react'

const ButtonProfiles = ( { messages } ) =>
{
    return (
        <Button
            size='sm'
            width={ [ '150px' ] }
            border='2px'
            fontWeight={ 'medium' }
            fontSize={ 12 }
            bg={ "white" }
            color={"brand.100"}
            _hover={ { bg: "brand.100", color: "white" } }
            borderColor='brand.100'
            borderRadius={ "full" }
            paddingLeft={ 8 }
            paddingRight={ 8 }>
            { messages }
        </Button>
    )
}

export default ButtonProfiles
