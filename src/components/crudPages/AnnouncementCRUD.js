import React, { useState } from 'react';
import { Button, Form, Input, Table, Modal, Popconfirm, Typography } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import moment from 'moment';
import './AnnouncementCRUD.css'; // Import unique style for AnnouncementCRUD

const { Title } = Typography;

const AnnouncementCRUD = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentAnnouncement, setCurrentAnnouncement] = useState(null);

  const handleAddAnnouncement = (values) => {
    const now = moment().toISOString();
    const newAnnouncement = {
      id: announcements.length + 1,
      title: values.title,
      content: values.content,
      createdAt: now,
      updatedAt: now,
      createdBY: { // Example user data; replace with actual user info
        id: 1,
        name: 'Admin User'
      }
    };
    if (currentAnnouncement) {
      newAnnouncement.updatedAt = now;
      setAnnouncements(announcements.map(ann => ann.id === currentAnnouncement.id ? newAnnouncement : ann));
    } else {
      setAnnouncements([...announcements, newAnnouncement]);
    }
    setIsModalVisible(false);
    setCurrentAnnouncement(null);
  };

  const handleEditAnnouncement = (record) => {
    setCurrentAnnouncement(record);
    setIsModalVisible(true);
  };

  const handleDeleteAnnouncement = (id) => {
    setAnnouncements(announcements.filter(ann => ann.id !== id));
  };

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Content',
      dataIndex: 'content',
      key: 'content',
    },
    {
      title: 'Created At',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (text) => moment(text).format('YYYY-MM-DD HH:mm')
    },
    {
      title: 'Updated At',
      dataIndex: 'updatedAt',
      key: 'updatedAt',
      render: (text) => moment(text).format('YYYY-MM-DD HH:mm')
    },
    {
      title: 'Created By',
      dataIndex: 'createdBY',
      key: 'createdBY',
      render: (text) => text.name // Adjust based on user data structure
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (text, record) => (
        <div>
          <Button 
            icon={<EditOutlined />} 
            onClick={() => handleEditAnnouncement(record)} 
            style={{ marginRight: 8 }}
          />
          <Popconfirm
            title="Are you sure to delete this announcement?"
            onConfirm={() => handleDeleteAnnouncement(record.id)}
          >
            <Button icon={<DeleteOutlined />} danger />
          </Popconfirm>
        </div>
      ),
    }
  ];

  return (
    <div className="crud-wrapper">
      <Title level={2}>Announcement Management</Title>
      <Button 
        type="primary" 
        onClick={() => setIsModalVisible(true)}
        style={{ marginBottom: 16 }}
      >
        Add Announcement
      </Button>

      <Table 
        dataSource={announcements} 
        columns={columns} 
        rowKey="id"
      />

      <Modal
        title={currentAnnouncement ? "Edit Announcement" : "Add Announcement"}
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
      >
        <Form
          initialValues={currentAnnouncement ? {
            title: currentAnnouncement.title,
            content: currentAnnouncement.content
          } : {}}
          onFinish={handleAddAnnouncement}
        >
          <Form.Item
            name="title"
            label="Title"
            rules={[{ required: true, message: 'Please input the announcement title!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="content"
            label="Content"
            rules={[{ required: true, message: 'Please input the announcement content!' }]}
          >
            <Input.TextArea />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              {currentAnnouncement ? "Update Announcement" : "Add Announcement"}
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default AnnouncementCRUD;
