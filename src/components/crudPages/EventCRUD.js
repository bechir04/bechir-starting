import React, { useState } from 'react';
import { Button, Form, Input, DatePicker, Select, Table, Modal, Popconfirm, Typography } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import moment from 'moment';
import './EventCRUD.css'; // Import unique style for EventCRUD

const { Option } = Select;
const { Title } = Typography;

const EventCRUD = () => {
  const [events, setEvents] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentEvent, setCurrentEvent] = useState(null);

  const handleAddEvent = (values) => {
    const newEvent = {
      id: events.length + 1,
      title: values.title,
      location: values.location,
      description: values.description,
      date: values.date,
      type: values.type,
      createdAt: moment().toISOString(), // Use current timestamp
      createdBY: { // Example user data; replace with actual user info
        id: 1,
        name: 'Admin User'
      }
    };
    setEvents([...events, newEvent]);
    setIsModalVisible(false);
  };

  const handleEditEvent = (record) => {
    setCurrentEvent(record);
    setIsModalVisible(true);
  };

  const handleDeleteEvent = (id) => {
    setEvents(events.filter(event => event.id !== id));
  };

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Location',
      dataIndex: 'location',
      key: 'location',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      render: (text) => moment(text).format('YYYY-MM-DD HH:mm')
    },
    {
      title: 'Created At',
      dataIndex: 'createdAt',
      key: 'createdAt',
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
            onClick={() => handleEditEvent(record)} 
            style={{ marginRight: 8 }}
          />
          <Popconfirm
            title="Are you sure to delete this event?"
            onConfirm={() => handleDeleteEvent(record.id)}
          >
            <Button icon={<DeleteOutlined />} danger />
          </Popconfirm>
        </div>
      ),
    }
  ];

  return (
    <div className="crud-wrapper">
      <Title level={2}>Event Management</Title>
      <Button 
        type="primary" 
        onClick={() => setIsModalVisible(true)}
        style={{ marginBottom: 16 }}
      >
        Add Event
      </Button>

      <Table 
        dataSource={events} 
        columns={columns} 
        rowKey="id"
      />

      <Modal
        title={currentEvent ? "Edit Event" : "Add Event"}
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
      >
        <Form
          initialValues={currentEvent ? {
            title: currentEvent.title,
            location: currentEvent.location,
            description: currentEvent.description,
            date: moment(currentEvent.date),
            type: currentEvent.type
          } : {}}
          onFinish={handleAddEvent}
        >
          <Form.Item
            name="title"
            label="Title"
            rules={[{ required: true, message: 'Please input the event title!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="location"
            label="Location"
            rules={[{ required: true, message: 'Please input the event location!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="description"
            label="Description"
            rules={[{ required: true, message: 'Please input the event description!' }]}
          >
            <Input.TextArea />
          </Form.Item>
          <Form.Item
            name="date"
            label="Date"
            rules={[{ required: true, message: 'Please select the event date!' }]}
          >
            <DatePicker showTime format="YYYY-MM-DD HH:mm" />
          </Form.Item>
          <Form.Item
            name="type"
            label="Type"
            rules={[{ required: true, message: 'Please select the event type!' }]}
          >
            <Select>
              <Option value="_100M">100M</Option>
              <Option value="_400m">400m</Option>
              <Option value="_800M">800M</Option>
              <Option value="LONGUEUR">LONGUEUR</Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              {currentEvent ? "Update Event" : "Add Event"}
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default EventCRUD;
