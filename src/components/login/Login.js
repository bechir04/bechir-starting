
import { Form, Input, Button, Typography, message } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import React from 'react';
import './login.css' ;



const Login = () => {
    const nagvigate= useNavigate() ;

    const [loginData , setLoginData] = useState({
        email : "" ,
        password : ""
    });

    const handleSignUpClick = ()=>{
        nagvigate("/signup")
    }
    return (
        <div className='auth-container'>
            <div className='auth-content'>
                <Form name='login-from' className='login-from'>
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
                        <Input name="email" value={loginData.email} />
                    </Form.Item>

                    <label>Password</label>
                    <Form.Item
                        className='password'
                        name='password'
                        rules={[
                            {required: true, message: 'Ce champ est obligatoire' }
                        ]}
                    >
                        <Input.Password name='password' value={loginData.password}/>
                    </Form.Item>
                    <Button name='submit' type='primary' htmlType='submit' style = {{marginRight :'10px' }} >Login</Button>
                    <Button type="primary" onClick={handleSignUpClick}>SignUp</Button>
                </Form>
            </div>
        </div>
    );
};

export default Login;