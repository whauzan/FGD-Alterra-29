import { Avatar, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { GoogleLogout } from 'react-google-login'
import { deleteInfo } from '../Redux/sliceUser'

const Profile = ({ imageUrl }) =>
{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogOut = () => {
        dispatch(deleteInfo());
        navigate('/');
    }
    return (
        <Menu>
            <MenuButton fontWeight={ 'medium' } fontSize={ '18px' }>
                <Avatar src={ imageUrl } />
            </MenuButton>
            <MenuList>
                <Link to={`/my-profile`}>
                    <MenuItem>My Profile</MenuItem>
                </Link>
                <GoogleLogout
                    clientId="56717403242-0s803ihkiah87e85iloeqpua28qmoslh.apps.googleusercontent.com"
                    render={ renderProps => (
                        <MenuItem onClick={handleLogOut}>Log Out</MenuItem>
                    )}
                />
            </MenuList>
        </Menu>
    )
}

export default Profile
