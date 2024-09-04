
import { Form, Input, Button, Typography, message, notification } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import React from 'react';
import { loginService } from '../../service/Auth';
import { useDispatch } from 'react-redux';
import { AuthAction } from '../../redux/actions';
import './login.css';



const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    });

    const handleDataChange = (event) => {
        const { name, value } = event.target;
        setLoginData({
            ...loginData,
            [name]: value
        })
    }

    const handleLoginClick = (data) => {
        console.log('Form Data:', data);
        loginService(data).then((response) => {
            console.log('API Response:', response);
            localStorage.setItem('token', response.accessToken);
            localStorage.setItem('refreshToken', response.refreshToken);
            localStorage.setItem('user', JSON.stringify(response.userDTO));
            notification.info("login success")
            dispatch(AuthAction.login({
                user : response.userDTO ,
                token : response.accessToken ,
                refreshToken : response.refreshToken 
            }));
            navigate('/');
        })
            .catch((err) => {
                console.log(err);
            });
    }

    const handleSignUpClick = () => {
        navigate("/signup");
    }

    return (
        <div className='auth-container'>
            <div className='auth-content'>
                <Form method='POST' name='login-from' className='login-from' onFinish={handleLoginClick}>
                    <Typography.Title>Login</Typography.Title>

                    <label>Email :</label>
                    <Form.Item
                        className='email'
                        name='email'
                        rules={[
                            { required: true, message: 'Ce champs est obligatoire' },
                            { type: 'email', message: 'veuillez entre un email valide' }
                        ]}
                    >
                        <Input name="email" value={loginData.email} onChange={(e) => handleDataChange(e)} />
                    </Form.Item>

                    <label>Password</label>
                    <Form.Item
                        className='password'
                        name='password'
                        rules={[
                            { required: true, message: 'Ce champ est obligatoire' }
                        ]}
                    >
                        <Input.Password name='password' value={loginData.password} onChange={(e) => handleDataChange(e)} />
                    </Form.Item>
                    <Button name='submit' type='primary' htmlType='submit' style={{ marginRight: '10px' } } >Login</Button>
                    <Button type="primary" onClick={handleSignUpClick}>SignUp</Button>
                </Form>
            </div>
        </div>
    );
};

export default Login;