import { Form, Input, Button, Typography, DatePicker, Select, message, notification } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router";
import React from "react";
import { registerService } from "../../service/auth/Auth";
import '../login/login.css'; // Include this in your app for Ant Design styles
import {Starting} from "../../assets/index";

const { Option } = Select;

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

  const validateConfirmPassword = (rule, ConfirmPassword) => {
    if (ConfirmPassword !== signupData.password) {
      return Promise.reject('Confirm password does not match the password');
    }
    return Promise.resolve();
  };

  const handledataChange = (e) => {
    const { name, value } = e.target;
    setSignupData({
      ...signupData,
      [name]: value,
    });
  };

  const handleSignupClick = async (data) => {
    try {
      console.log('Signup Data:', data);
      await registerService(data);
      notification.info({ message: 'Please check your email for verification.', placement: 'topRight', duration: 20 });
    } catch (err) {
      message.error('Sign up failed. Please try again.');
    }
  };

  return (
    <div className="auth-container">
      {/* Welcome Section with Logo */}
      <div className="welcome-section">
        <Typography.Title className="welcome-text">Welcome to the Club!</Typography.Title>
        {/* Replace the src with your club's logo image path */}
        <img src={Starting} alt="Club Logo" className="club-logo" />
        </div>

      {/* Sign-up Form Section */}
      <div className="auth-card">
        <Typography.Title className="auth-title">Sign Up</Typography.Title>
        <Form name="signup-form" className="signup-form" onFinish={handleSignupClick}>
          <Form.Item
            name="firstname"
            rules={[{ required: true, message: "First name is required" }]}
          >
            <Input name="firstname" placeholder="First Name" value={signupData.firstname} onChange={handledataChange} />
          </Form.Item>

          <Form.Item
            name="lastname"
            rules={[{ required: true, message: "Last name is required" }]}
          >
            <Input name="lastname" placeholder="Last Name" value={signupData.lastname} onChange={handledataChange} />
          </Form.Item>

          <Form.Item
            name="email"
            rules={[{ required: true, type: "email", message: "Please enter a valid email" }]}
          >
            <Input name="email" placeholder="Email" value={signupData.email} onChange={handledataChange} />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Password is required" }]}
          >
            <Input.Password name="password" placeholder="Password" value={signupData.password} onChange={handledataChange} />
          </Form.Item>

          <Form.Item
            name="confirmPassword"
            rules={[{ required: true, message: 'Please confirm your password' }, { validator: validateConfirmPassword }]}
          >
            <Input.Password placeholder="Confirm Password" />
          </Form.Item>

          <Form.Item
            name="phoneNumber"
            rules={[{ required: true, message: "Phone number is required" }]}
          >
            <Input name="phoneNumber" placeholder="Phone Number" value={signupData.phoneNumber} onChange={handledataChange} />
          </Form.Item>

          <Form.Item
            name="dateOfBirth"
            rules={[{ required: true, message: "Date of Birth is required" }]}
          >
            <DatePicker placeholder="Date of Birth" onChange={(date, dateString) => handledataChange({ target: { name: "dateOfBirth", value: dateString } })} />
          </Form.Item>

          <Form.Item name="branch" rules={[{ required: true, message: "Branch is required" }]}>
            <Select placeholder="Select Branch" value={signupData.branch} onChange={(value) => handledataChange({ target: { name: "branch", value } })}>
              <Option value="HEALTH_SPORT">Health Sport</Option>
              <Option value="PERFORMANCE_SPORT">Performance Sport</Option>
              <Option value="DISABLED_SPORT">Disabled Sport</Option>
            </Select>
          </Form.Item>

          <Button className="submit-btn" type="primary" htmlType="submit">
            Sign Up
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Signup;
