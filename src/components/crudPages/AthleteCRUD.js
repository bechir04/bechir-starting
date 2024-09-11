import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AthleteCRUD.css'; // Import the Athlete-specific CSS
import { Button, Input, Table, message } from 'antd';
import { DeleteOutlined, EyeOutlined } from '@ant-design/icons';

const AthleteCRUD = () => {
  const [athletes, setAthletes] = useState([
    { id: 1, name: "John Doe", image: "https://via.placeholder.com/60" },
    { id: 2, name: "Jane Smith", image: "https://via.placeholder.com/60" },
    { id: 3, name: "Alice Johnson", image: "https://via.placeholder.com/60" },
  ]);

  const navigate = useNavigate(); // Initialize useNavigate

  const handleView = (id) => {
    navigate(`/athletes/${id}`); // Navigate to athlete details page
  };

  const handleDelete = (id) => {
    setAthletes(athletes.filter(athlete => athlete.id !== id));
    message.success('Athlete deleted successfully!');
  };

  const columns = [
    {
      title: 'Image',
      dataIndex: 'image',
      key: 'image',
      render: (text) => <img src={text} alt="athlete" className="athlete-image" />,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <div>
          <Button
            icon={<EyeOutlined />}
            onClick={() => handleView(record.id)}
            style={{ marginRight: '8px' }}
          />
          <Button
            icon={<DeleteOutlined />}
            onClick={() => handleDelete(record.id)}
            danger
          />
        </div>
      ),
    },
  ];

  return (
    <div className="crud-wrapper">
      <h2>Athlete Management</h2>
      <Table
        columns={columns}
        dataSource={athletes}
        rowKey="id"
        pagination={false}
      />
    </div>
  );
};

export default AthleteCRUD;
