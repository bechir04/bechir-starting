import React from 'react';
import { Layout, Menu } from 'antd';
import { Link, Route, Routes } from 'react-router-dom';
import { UserOutlined, CalendarOutlined, PictureOutlined, NotificationOutlined } from '@ant-design/icons';

// Import your CRUD components
import AthleteCRUD from '../crudPages/AthleteCRUD'; // Update path to your component
import EventCRUD from '../crudPages/EventCRUD';     // Update path to your component
import GalleryCRUD from '../crudPages/GalleryCRUD'; // Update path to your component
import AnnouncementCRUD from '../crudPages/AnnouncementCRUD';

const { Header, Sider, Content } = Layout;

const Dashboard = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider>
        <div className="logo" />
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

      <Layout>
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: '16px', padding: '24px', background: '#fff' }}>
          <Routes>
            <Route path="/athletes" element={<AthleteCRUD />} />
            <Route path="/events" element={<EventCRUD />} />
            <Route path="/gallery" element={<GalleryCRUD />} />
            <Route path="/announcements" element={<AnnouncementCRUD />} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
