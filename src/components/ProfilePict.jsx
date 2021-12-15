import { Image } from '@chakra-ui/react'
import React from 'react'

const ProfilePict = ( { Profile, Top, Mb, left } ) =>
{
    return (
        <Image
            src={ Profile }
            top={ Top }
            ml={ left }
            borderRadius='full'
            position='absolute'
            mb={ Mb }
        />
    )
}

export default ProfilePict
