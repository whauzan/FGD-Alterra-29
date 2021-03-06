import { Box, Button, Icon } from '@chakra-ui/react'
import React from 'react'
import { FcGoogle } from "react-icons/fc";
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { FaFacebook } from 'react-icons/fa';
import { saveInfo } from '../Redux/sliceUser';
import { useDispatch } from 'react-redux';

const SosmedLogin = () =>
{
    const dispatch = useDispatch();
    const onSuccess = (res) => {
        const data = {
            name: res.profileObj.name,
            imageUrl: res.profileObj.imageUrl,
            email: res.profileObj.email
        }
        console.log(res.profileObj);
        dispatch(saveInfo(data));
    }
    return (
        <Box mt={ 3 } display={ 'flex' } justifyContent={ 'space-between' }>
            <GoogleLogin
                onSuccess={onSuccess}
                clientId="56717403242-0s803ihkiah87e85iloeqpua28qmoslh.apps.googleusercontent.com"
                render={ renderProps => (
                    <Button size={ 'sm' } w={ '100px' } colorScheme={ 'red' } fontWeight={ 'normal' } fontSize={ '12px' } onClick={ renderProps.onClick }>
                        <Icon as={ FcGoogle } mr={ 3 } />
                        Google</Button>
                ) }
            />
            <FacebookLogin
                appId="629431818422391"
                render={ renderProps => (
                    <Button size={ 'sm' } w={ '100px' } leftIcon={ <FaFacebook /> } colorScheme={ 'facebook' } fontWeight={ 'normal' } fontSize={ '12px' } onClick={ renderProps.onClick }>
                        Facebook</Button>
                ) }
            />
        </Box>
    )
}

export default SosmedLogin
