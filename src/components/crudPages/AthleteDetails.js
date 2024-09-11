import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './AthleteDetails.css'; // Import the Athlete Details-specific CSS
import { Button, Card, message } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';

const AthleteDetails = () => {
  const { id } = useParams(); // Extract athlete ID from URL
  const navigate = useNavigate(); // Initialize useNavigate

  // Dummy data for demonstration
  const athlete = {
    id: parseInt(id),
    name: "John Doe",
    image: "https://via.placeholder.com/150",
    details: "Some detailed information about the athlete.",
  };

  const handleBack = () => {
    navigate('/athletes'); // Navigate back to the athletes list
  };

  return (
    <div className="athlete-details-wrapper">
      <Button 
        type="primary" 
        icon={<ArrowLeftOutlined />} 
        onClick={handleBack}
        style={{ marginBottom: '20px' }}
      >
        Back to Athletes
      </Button>
      <Card
        hoverable
        cover={<img alt="athlete" src={athlete.image} className="athlete-detail-image" />}
      >
        <Card.Meta
          title={athlete.name}
          description={athlete.details}
        />
      </Card>
    </div>
  );
};

export default AthleteDetails;
