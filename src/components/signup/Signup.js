import { Form, Input, Button, Typography, message } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import React from 'react';
import "../login/login.css"

const Signup = () => {
    const Navigate = useNavigate() ;
    const [signupData , setSignupData] = useState({
        email : "" ,
        password : ""
    });
    
    return (
        <div className='auth-container'>
            <div className='auth-content'>
                <Form name='login-from' className='login-from'>
                    <Typography.Title>Signup</Typography.Title>

                    <label>Email :</label>
                    <Form.Item 
                    className='email' 
                        name='email'
                        rules={[
                            {required: true ,message: 'Ce champs est obligatoire'} ,
                            {type: 'email' , message :'veuillez entre un email valide'}
                        ]}
                    >
                        <Input name="email" value={signupData.email} />
                    </Form.Item>

                    <label>Password</label>
                    <Form.Item
                        className='password'
                        name='password'
                        rules={[
                            {required: true, message: 'Ce champ est obligatoire' }
                        ]}
                    >
                        <Input.Password name='password' value={signupData.password}/>
                    </Form.Item>
                    <Button type="primary" >SignUp</Button>
                </Form>
            </div>
        </div>
    );
};

export default Signup ;