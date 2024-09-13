import { useEffect, useState } from "react";
import { EditOutlined, DeleteOutlined, EyeOutlined } from "@ant-design/icons";
import {
  notification,
  Button,
  Modal,
  Table,
  Form,
  Input,
  Popconfirm,
  message,
  Upload
} from "antd";
import { useNavigate } from 'react-router-dom';

import {
  getAllCustomAthletes,
  updateAthlete,
  deleteAthleteById,
} from "../../../service/athlete/athlete";
import { uploadFile } from "../../../service/file/file";

import "./athleteManagement.css";


const getBase64 = (file) =>
  new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
  });



const AthleteManagement = () => {
  const [isUploadModalVisible, setIsUploadModalVisible] = useState(false);
  const [file, setFile] = useState(null);
  const [previewImage, setPreviewImage] = useState('');
  const [previewVisible, setPreviewVisible] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [sortedBy, setSortedBy] = useState("id");
  const [athletes, setAthletes] = useState([]);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [selectedColumns, setSelectedColumns] = useState([
    "id",
    "firstname",
    "lastname",
    "email",
    "enable",
    "createdAt",
    "phoneNumber",
    "licenceID",
    "dateOfBirth",
    "age",
    "hasMedal",
    "branch",
  ]);
  const [currentAthlete, setCurrentAthlete] = useState({
    id: '',
    firstname: '',
    lastname: '',
    email: '',
    enable: null,
    createdAt: '',
    phoneNumber: '',
    licenceID: '',
    dateOfBirth: null,
    hasMedal: null,
    branch: '',
  });
  const navigate = useNavigate(); 



  const handleFileChange = (info) => {
    if (info.file.status === 'done') {
      notification.success({
        message: 'File uploaded successfully',
      });
    } else if (info.file.status === 'error') {
      notification.error({
        message: 'File upload failed',
      });
    }
  };

  const handleUploadChange = ({ file }) => {
    setFile(file);
};

  const onBeforeUpload = (file) => {
    if (file.type !== 'image/png' && file.type !== 'image/jpeg') {
        message.error(`${file.name} is not a png or jpeg file`);
    }
    return file.type === 'image/png' || file.type === 'image/jpeg' ? false : Upload.LIST_IGNORE;
}

const handlePreview = async (file) => {
  if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
  }
  setPreviewImage(file.url || file.preview);
  setPreviewVisible(true);
};

  const logFormData = (formData) => {
    // Create an iterator for FormData entries
    for (let [key, value] of formData.entries()) {
      if (value instanceof File) {
        console.log(`${key}: File(${value.name}, ${value.size} bytes)`);
      } else {
        console.log(`${key}: ${value}`);
      }
    }
  };
  

  const handleUploadFile = async () => {
    if (!file) {
      notification.error({
        message: 'Please select a file to upload',
      });
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    logFormData(formData);

    try {
      const response = await uploadFile(formData);
      console.log("response from handleUploadFile" , response);
      
      if (response.ok) {
        notification.success({
          message: 'File uploaded successfully',
        });
        setIsUploadModalVisible(false);
      } else {
        throw new Error('Upload failed');
      }
    } catch (error) {
      notification.error({
        message: 'File upload failed',
      });
    }
  };

  const columns = [
    { label: "ID", value: "id" },
    { label: "First Name", value: "firstname" },
    { label: "Last Name", value: "lastname" },
    { label: "Email", value: "email" },
    { label: "Is Enabled", value: "enable" },
    { label: "Created At", value: "createdAt" },
    { label: "Phone Number", value: "phoneNumber" },
    { label: "Licence ID", value: "licenceID" },
    { label: "Date of Birth", value: "dateOfBirth" },
    { label: "Age", value: "age" },
    { label: "Has Medal", value: "hasMedal" },
    { label: "Branch", value: "branch" },
  ];

  const tableColumns = [
    ...columns
      .filter((col) => selectedColumns.includes(col.value))
      .map((col) => ({
        title: col.label,
        dataIndex: col.value,
        key: col.value,
        render: (value) =>
          typeof value == "boolean" ? (value ? "Yes" : "No") : value, // for non-boolean values, display them directly
      })),
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <div>
          <Button
            icon={<EyeOutlined />}
            onClick={() => handleViewDetails(record)}
          />

          <Button icon={<EditOutlined />} 
            onClick={() => handleEdit(record)} 
          />

          <Popconfirm
            title="are sure you want to delete this athlete ?"
            onConfirm={() => handleDelete(record.id)}
            onCancel={() =>
              notification.info({
                message: "Cancelled",
                description: "Athlete deletion cancelled.",
                placement: "topRight",
              })
            }
            okText="Yes"
            cancelText="No"
            overlayClassName="vertical-popconfirm"
          >
            <Button icon={<DeleteOutlined />} type="danger" />
          </Popconfirm>
        </div>
      ),
    },
  ];

  // FETCH Athlete by ID Process
  const handleViewDetails = (athlete) => {
    navigate(`/admin/athlete-details/${athlete.id}`);
  };


  //DELETE Athlete Process
  const handleDelete = async (id) => {
    try {
      const response = await deleteAthleteById(id);
      console.log("response deleteAthleteById", response);
      notification.success({
        message: "Success",
        description: response,
        placement: "topRight", // or 'bottomRight'
      });
      setAthletes(athletes.filter((athlete) => athlete.id !== id));
    } catch (err) {
      console.log("error delete AthleteById  : ", err);
    }
  };

  //EDIT Athlete Process
  const handleEdit = (record) => {
    setCurrentAthlete({
      id: record.id,
      firstname: record.firstname,
      lastname: record.lastname,
      email: record.email,
      enable: record.enable,
      createdAt: record.createdAt,
      phoneNumber: record.phoneNumber,
      licenceID: record.licenceID,
      dateOfBirth: record.dateOfBirth,
      hasMedal: record.hasMedal,
      branch: record.branch,
    });
    setIsEditModalVisible(true);
  };

  const onOkEditModal = () => {
    const jsonAthlete = {
      id: currentAthlete.id,
      firstname: currentAthlete.firstname,
      lastname: currentAthlete.lastname,
      email: currentAthlete.email,
      enable: currentAthlete.enable,
      createdAt: currentAthlete.createdAt,
      phoneNumber: currentAthlete.phoneNumber,
      licenceID: currentAthlete.licenceID,
      dateOfBirth: currentAthlete.dateOfBirth,
      hasMedal: currentAthlete.hasMedal,
      branch: currentAthlete.branch,
    };
    handleUpdateByIdData(currentAthlete.id, jsonAthlete);
  };

  const handleUpdateByIdData = async (id, jsonAthlete) => {
    try {
      const response = await updateAthlete(id, jsonAthlete);
      console.log("response updateAthlete", response);
      notification.success({
        message: "Success",
        description: "athlete updated successfully",
        placement: "topRight",
      });
      setAthletes(
        athletes.map((item) =>
          item.id === id
            ? {
                ...item,
                firstname: jsonAthlete.firstname,
                lastname: jsonAthlete.lastname,
                email: jsonAthlete.email,
                enable: jsonAthlete.enable,
                createdAt: jsonAthlete.createdAt,
                phoneNumber: jsonAthlete.phoneNumber,
                licenceID: jsonAthlete.licenceID,
                dateOfBirth: jsonAthlete.dateOfBirth,
                hasMedal: jsonAthlete.hasMedal,
                branch: jsonAthlete.branch,
              }
            : item
        )
      );
      setIsEditModalVisible(false);
    } catch (err) {
      console.log("error updateAthlete  : ", err);
    }
  };

  const onPageNumberChange = (value) => {
    setPageNumber(value);
  };

  const onSortedByChange = (value) => {
    setSortedBy(value);
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedColumns((prevSelected) => [...prevSelected, value]);
    } else {
      setSelectedColumns((prevSelected) =>
        prevSelected.filter((item) => item !== value)
      );
    }
  };

  //FETCH ALL Athlete Process
  const fetchallCustomAthleteData = async (data) => {
    try {
      console.log("data :", data);
      const columnsString = data.join(",");
      console.log("columnsString :", columnsString);
      const response = await getAllCustomAthletes(columnsString);
      console.log("response from fetchallCustomAthleteData :", response);
      setAthletes(response);
    } catch (err) {
      console.log("error of fetchallCustomAthleteData ", err);
    }
  };

  useEffect(() => {
    if (selectedColumns.length > 0) {
      fetchallCustomAthleteData(selectedColumns);
    }
  }, [selectedColumns, athletes.length]);

  return (
    <>
      <div className="chekedColumn-container">
        <h3>Select Columns to display</h3>
        <form className="checkbox-form">
          {columns.map((column) => (
            <div key={column.value}>
              <label htmlFor={column.value}>{column.label}</label>
              <input
                type="checkbox"
                id={column.value}
                value={column.value}
                checked={selectedColumns.includes(column.value)}
                onChange={handleCheckboxChange}
              />
            </div>
          ))}
        </form>
      </div>
      <div className="athletes-container">
        {athletes.length > 0 && selectedColumns.length > 0 ? (
          <Table
            dataSource={athletes}
            columns={tableColumns}
            rowKey={(row) => row.id}
            scroll={{ x: "max-content" }}
          />
        ) : (
          <p>there is no athletes yet !</p>
        )}
      </div>

      <Modal
        title="Edit Athlete"
        visible={isEditModalVisible}
        onCancel={() => setIsEditModalVisible(false)}
        onOk={() => onOkEditModal()}
      >
        <Form
          initialValues={{
            firstname: currentAthlete?.firstname || "",
            lastname: currentAthlete?.lastname || "",
            phoneNumber: currentAthlete?.phoneNumber || "",
            licenceID: currentAthlete?.licenceID || "",
            dateOfBirth: currentAthlete?.dateOfBirth || "",
            hasMedal: currentAthlete?.hasMedal || false,
            branch: currentAthlete?.branch || "",
          }}
          onValuesChange={(_, allValues) => {
            setCurrentAthlete((previousState) => ({
              ...previousState,
              ...allValues,
            }));
          }}
        >
          <Form.Item
            name="firstname"
            label="First Name"
            rules={[
              { required: true, message: "Please input the first name!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="lastname"
            label="Last Name"
            rules={[{ required: true, message: "Please input the last name!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item name="phoneNumber" label="Phone Number">
            <Input />
          </Form.Item>
          <Form.Item name="licenceID" label="Licence ID">
            <Input />
          </Form.Item>
          <Form.Item name="dateOfBirth" label="Date of Birth">
            <Input />
          </Form.Item>

          <Form.Item name="hasMedal" label="Has Medal" valuePropName="checked">
            <Input type="checkbox" />
          </Form.Item>
          <Form.Item name="branch" label="Branch">
            <Input />
          </Form.Item>
        </Form>
      </Modal>

      {/** file uploading */}
      <Button 
          type="primary" 
          onClick={() => setIsUploadModalVisible(true)}
          style={{ marginBottom: 16, maxWidth: 200}}
      >
      Upload File
      </Button>

      <Modal
        title="Upload File"
        visible={isUploadModalVisible}
        onCancel={() => setIsUploadModalVisible(false)}
        onOk={handleUploadFile}
      >
        <Upload
          maxCount={1}
          onPreview={handlePreview}
          onChange={handleUploadChange}
          beforeUpload={(file) => onBeforeUpload(file)}

         >
          <Button>Select File</Button>
        </Upload>
      </Modal>
    </>
  );
};

export default AthleteManagement;
