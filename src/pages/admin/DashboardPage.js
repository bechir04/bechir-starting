import React from 'react';
import { Layout, Menu } from 'antd';
import { Link, Route, Routes } from 'react-router-dom';
import { UserOutlined, CalendarOutlined, PictureOutlined } from '@ant-design/icons';

// Import your CRUD components
import {AthleteManagement , EventManagement , GalleryManagement} from "../../components/adminDashboard/index"

const { Header, Sider, Content } = Layout;

const DashboardPage = () => {

  const menuItems = [
    {
      key: '1',
      icon: <UserOutlined />,
      label: <Link to="/dashboard/athletes">Athletes</Link>,
    },
    {
      key: '2',
      icon: <CalendarOutlined />,
      label: <Link to="/dashboard/events">Events</Link>,
    },
    {
      key: '3',
      icon: <PictureOutlined />,
      label: <Link to="/dashboard/gallery">Gallery</Link>,
    },
    {
      key: '4',
      icon: <UserOutlined />,
      label: <Link to="/dashboard/announcements">Announcements</Link>,
    }
  ];


  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} items={menuItems} />
      </Sider>

      <Layout>
        <Header className="site-layout-background" style={{ padding: '0 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ color: 'white', margin: 0 }}>Welcome to Dashboard</h2>
        </Header>
        
        <Content style={{ margin: '16px', padding: '24px', background: '#fff' }}>
          <Routes>
            <Route path="/athletes" element={<AthleteManagement />} />
            <Route path="/events" element={<EventManagement />} />
            <Route path="/gallery" element={<GalleryManagement />} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardPage;
