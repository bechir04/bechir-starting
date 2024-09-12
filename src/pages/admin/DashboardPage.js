import React from 'react';
import { useState } from 'react';
import { Layout, Menu } from 'antd';
import { UserOutlined, CalendarOutlined, PictureOutlined } from '@ant-design/icons';

import {AthleteManagement , EventManagement , GalleryManagement , AnnouncementManagement} from "../../components/adminDashboard/index"

const { Header, Sider, Content } = Layout;

const DashboardPage = () => {

  const [selectedNavItem , setSelectedNavItem] = useState(0);
  const menuItems = [
    {
      key: '1',
      icon: <UserOutlined />,
      label: 'Athletes',
    },
    {
      key: '2',
      icon: <CalendarOutlined />,
      label: 'Events' ,
    },
    {
      key: '3',
      icon: <PictureOutlined />,
      label: 'Gallery',
    },
    {
      key: '4',
      icon: <UserOutlined />,
      label: 'Announcements',
    }
  ];

  const content  = [<AthleteManagement/>  , <EventManagement /> ,<GalleryManagement /> ,<AnnouncementManagement/>]


  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider>
        <div className="logo" />
        <Menu theme="dark" 
              mode="inline" 
              items={menuItems} 
              defaultSelectedKeys={['1']}
              selectedKeys={[String(selectedNavItem + 1)]}
              onSelect={({ key }) => setSelectedNavItem(parseInt(key, 10) - 1)}
        />
      </Sider>

      <Layout>
        <Header className="site-layout-background" style={{ padding: '0 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ color: 'white', margin: 0 }}>Welcome to Dashboard</h2>
        </Header>
        
        <Content style={{ margin: '16px', padding: '24px', background: '#fff' }}>
          {content[selectedNavItem]}
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardPage;
