import React, { useContext } from 'react';
import LoginView from "../component/login/login.view";
import { useNavigate } from 'react-router-dom';
import { loginUser, signUpUser } from "../api/auth";
import { AuthContext } from "../context/authContext";
import Toast from "../component/common/toast/toast";

const Login = () => {
    const { user, loading } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate('/', {replace: true})
    }

    async function handleLogin(email: string, password: string) {
        try {
            const res = await loginUser(email, password);
            if (user) {
                // Toast()
                navigate('/');
            }

        } catch (e) {
            console.log('couldnot login', e)
        }

    }

    async function handleAccountCreation(values: any) {
        try {
            const res = await signUpUser(values.email, values.password);
            console.log('User Signed in ', res)
            navigate('/login');
        } catch (e) {
            console.log('error while account creation', e)
        }

    }


    return (
        <LoginView
            handleNavigation={handleNavigation}
            handleLogin={handleLogin}
            handleAccountCreation={handleAccountCreation}
        />

    )
}

export default Login;
