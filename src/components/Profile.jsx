import { Avatar, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import profiles from '../assets/img/Rectangle 42.png'
const Profile = () =>
{
    return (
        <Menu>
            <MenuButton fontWeight={ 'medium' } fontSize={ '18px' }>
                <Avatar src={ profiles } />
            </MenuButton>
            <MenuList>
                <MenuItem>Download</MenuItem>
                <MenuItem>Create a Copy</MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
                <MenuItem>Delete</MenuItem>
                <MenuItem>Attend a Workshop</MenuItem>
            </MenuList>
        </Menu>
    )
}

export default Profile
