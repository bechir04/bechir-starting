
import { Form, Input, Button, Typography, message, notification } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import React from 'react';
import { loginService } from '../../service/Auth';
import './login.css' ;
import LocaleProvider from 'antd/es/locale';



const Login = () => {
    const navigate= useNavigate() ;

    const [loginData , setLoginData] = useState({
        email : "" ,
        password : ""
    });

    const handleLoginClick = (e) =>{
        loginService().then((resp) => {
            localStorage.setItem('token',resp.data.accessToken);
            localStorage.setItem('refreshToken', resp.data.refreshToken) ;
            localStorage.setItem('user', JSON.stringify(resp.data.userEntityDTO));
            navigate('/');
        })
        .catch((err) => {
            console.log(err);
        }) ;
    }

    const handleSignUpClick = ()=>{
        navigate("/signup");
    }

    const handleDataChange =(event) =>{
        const {name ,value} = event.target ;
        setLoginData({
            ...loginData,
            [name] :value
        })
    }


    return (
        <div className='auth-container'>
            <div className='auth-content'>
                <Form name='login-from' className='login-from' onFinish={handleLoginClick}>
                    <Typography.Title>Login</Typography.Title>

                    <label>Email :</label>
                    <Form.Item 
                    className='email' 
                        name='email'
                        rules={[
                            {required: true ,message: 'Ce champs est obligatoire'} ,
                            {type: 'email' , message :'veuillez entre un email valide'}
                        ]}
                    >
                        <Input name="email" value={loginData.email} onChange={handleDataChange} />
                    </Form.Item>

                    <label>Password</label>
                    <Form.Item
                        className='password'
                        name='password'
                        rules={[
                            {required: true, message: 'Ce champ est obligatoire' }
                        ]}
                    >
                        <Input.Password name='password' value={loginData.password} onChange={handleDataChange}/>
                    </Form.Item>
                    <Button name='submit' type='primary' htmlType='submit' style = {{marginRight :'10px' } } >Login</Button>
                    <Button type="primary" onClick={handleSignUpClick}>SignUp</Button>
                </Form>
            </div>
        </div>
    );
};

export default Login;