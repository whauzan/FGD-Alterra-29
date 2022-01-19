import
{
    Avatar
} from '@chakra-ui/react'
import React from 'react'

const ProfilePict = ( { Profile, Top, Mb, left } ) =>
{
    return (
        <Avatar
            src={ Profile }
            top={ Top }
            ml={ left }
            position='absolute'
            mb={ Mb }
            size={ '2xl' }
        />
    )
}

export default ProfilePict
