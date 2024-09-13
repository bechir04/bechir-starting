import React from 'react';
import { Layout, Menu, Avatar, Typography } from 'antd';
import { Link, Route, Routes } from 'react-router-dom';
import { UserOutlined, CalendarOutlined, PictureOutlined, NotificationOutlined, HomeOutlined } from '@ant-design/icons';
import './Dashboard.css';

// Import your CRUD components
import AthleteCRUD from '../crudPages/AthleteCRUD'; 
import EventCRUD from '../crudPages/EventCRUD';     
import GalleryCRUD from '../crudPages/GalleryCRUD'; 
import AnnouncementCRUD from '../crudPages/AnnouncementCRUD';

const { Sider, Content } = Layout;
const { Title } = Typography;

const Dashboard = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider width={200} className="sider">
        <div className="user-profile">
          <Avatar size={64} icon={<UserOutlined />} />
          <div className="user-info">
            <Title level={5} style={{ color: 'white', margin: 0 }}>John Doe</Title>
            <p style={{ color: '#d0d0d0', margin: 0 }}>Administrator</p>
          </div>
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            <Link to="/dashboard/athletes">Athletes</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<CalendarOutlined />}>
            <Link to="/dashboard/events">Events</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<PictureOutlined />}>
            <Link to="/dashboard/gallery">Gallery</Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<NotificationOutlined />}>
            <Link to="/dashboard/announcements">Announcements</Link>
          </Menu.Item>
        </Menu>
      </Sider>

      <Layout style={{ flex: 1 }}>
        <Content style={{ margin: '16px', padding: '24px', background: '#fff' }}>
          <div className="content-area">
            <Routes>
              <Route path="/athletes" element={<AthleteCRUD />} />
              <Route path="/events" element={<EventCRUD />} />
              <Route path="/gallery" element={<GalleryCRUD />} />
              <Route path="/announcements" element={<AnnouncementCRUD />} />
            </Routes>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
