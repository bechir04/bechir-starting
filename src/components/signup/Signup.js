import { Form, Input, Button, Typography, DatePicker, Select  , message, notification} from "antd";
import { useState } from "react";
import { useNavigate } from "react-router";
import React from "react";
import { registerService } from "../../service/auth/Auth";

import "./signup.css";

const { Option } = Select;
const regexs ={
    emailRegex : "^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$" 
}
const Signup = () => {
  const Navigate = useNavigate();
  const [signupData, setSignupData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    phoneNumber: "",
    licenceID: "",
    dateOfBirth: "",
    branch: "",
  });

  const validateConfirmPassword = (rule , ConfirmPassword) => {
    if(ConfirmPassword != signupData.password){
     return Promise.reject('confrim password do not match password')
    }
    return Promise.resolve();
   }

   /**const validateEmail = (rule , currEmail) => {
    if(regexs.emailRegex.test(currEmail)){
        return Promise.resolve() ;
    }
    return Promise.reject('email do not match email standards');
   }  */

   const validateDateOfBirth = (rule,dateOfBirth)=> {
    const today = new Date();
    const minRequiredDate = new Date() ;
    const selectedDate = new Date(dateOfBirth)
    const minAge = 6 ;  

    minRequiredDate.setFullYear(today.getFullYear() - minAge) ;
    

    if(selectedDate > minRequiredDate){
        return Promise.reject("Date of birth must be at least ", minAge,"years ago") ;
    }
    return Promise.resolve();
   }

  const handledataChange = (e) => {
    const { name, value } = e.target;
    setSignupData({
      ...signupData,
      [name]: value,
    });
  };

  const handleSignupClick = async (data) => {
    try{
        console.log('signup Data:', data);
        await registerService(data);
        notification.info({ message: 'Please check your email for verification.' , placement: 'topRight', duration: 20});
    }catch(err) {
        message.error('Sign up failed. Please try again.');
    }
  };

  

  return (
    <div className="signup-container">
      <div className="signup-content">
        <Typography.Title>Signup</Typography.Title>
        <Form name="signup-from" className="signup-from" onFinish={handleSignupClick}>
          <div className="from-grid">
            {/* Firstname */}
            <label>Firstname :</label>
            <Form.Item
              className="firstname"
              name="firstname"
              rules={[
                { required: true, message: "First name is required" },
                { min: 2, max: 20, message: "Invalid firstname length" },
              ]}
            >
              <Input
                name="firstname"
                value={signupData.firstname}
                onChange={handledataChange}
              />
            </Form.Item>

            {/* Lastname */}
            <label>Lastname :</label>
            <Form.Item
              className="lastname"
              name="lastname"
              rules={[
                { required: true, message: "Last name is required" },
                { min: 2, max: 20, message: "Invalid lastname length" },
              ]}
            >
              <Input
                name="lastname"
                value={signupData.lastname}
                onChange={handledataChange}
              />
            </Form.Item>

            {/* Email */}
            <label>Email :</label>
            <Form.Item
              className="email"
              name="email"
              rules={[
                { required: true, message: "Ce champs est obligatoire" },
                { type: "email", message: "veuillez entre un email valide" },
                //{validator: validateEmail}
              ]}
            >
              <Input
                name="email"
                value={signupData.email}
                onChange={handledataChange}
              />
            </Form.Item>

            {/* Password */}
            <label>Password</label>
            <Form.Item
              className="password"
              name="password"
              rules={[{ required: true, message: "Ce champ est obligatoire" }]}
            >
              <Input.Password
                name="password"
                value={signupData.password}
                onChange={handledataChange}
              />
            </Form.Item>


            <label>Confirm Password</label>
            <Form.Item
              name="confirmPassword"
              rules={[
                { required: true, message: 'Please confirm your password' },
                { validator: validateConfirmPassword },
              ]}
            >
              <Input.Password  name="confirmPassword" />
            </Form.Item>


            {/* PhoneNumber */}
            <label>PhoneNumber :</label>
            <Form.Item
              className="phoneNumber"
              name="phoneNumber"
              rules={[
                { required: true, message: "Phone number is required" },
                {
                  len: 8,
                  message:
                    "Invalid phone number length, please enter 8 characters",
                },
              ]}
            >
            <Input
                name="phoneNumber"
                value={signupData.phoneNumber}
                onChange={handledataChange}
            />
            </Form.Item>

            {/* Licence ID */}
            <label>Licence ID :</label>
            <Form.Item
              className="licenceID"
              name="licenceID"
              rules={[{ required: true, message: "Licence ID is required" }]}
            >
              <Input
                name="licenceID"
                value={signupData.licenceID}
                onChange={handledataChange}
              />
            </Form.Item>

            {/* Date of Birth */}
            <label>Date of Birth :</label>
            <Form.Item
              className="dateOfBirth"
              name="dateOfBirth"
              rules={[
                    { required: true, message: "Date of birth is required" },
                    {validator: validateDateOfBirth}
                ]
                   
            }
            >
              <DatePicker
                name="dateOfBirth"
                onChange={(date, dateString) =>
                  handledataChange({
                    target: { name: "dateOfBirth", value: dateString },
                  })
                }
              />
            </Form.Item>

            {/* Branch */}
            <label>Branch :</label>
            <Form.Item
              className="branch"
              name="branch"
              rules={[{ required: true, message: "Branch is required" }]}
            >
              <Select
                name="branch"
                value={signupData.branch}
                onChange={(value) =>
                  handledataChange({ target: { name: "branch", value } })
                }
              >
                <Option value="HEALTH_SPORT">Health Sport</Option>
                <Option value="PERFORMANCE_SPORT">Performance Sport</Option>
                <Option value="DISABLED_SPORT">Disabled Sport</Option>
              </Select>
            </Form.Item>
          </div>
          <Button name='submit' type='primary' htmlType='submit'>SignUp</Button>
        </Form>
      </div>
    </div>
  );
};

export default Signup;
