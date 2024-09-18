import fetch from "../../config/interceptor/interceptor"
import {BaseUrl,APIS} from "../../config/constants/URLS"
import axios from "axios";

export const uploadFile = async (formData) => {
    try {
      const response = await axios.post(BaseUrl + APIS.FILE.uploadFile, formData, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`, // Add token if needed
        }
      });
      return response.data;
    } catch (error) {
      console.error("Error uploading file:", error);
      throw error;
    }
  };

export const uploadMultipleFiles = (formData) => {
    return fetch ({
        method : 'post' ,
        url : BaseUrl + APIS.FILE.uploadMultipleFiles ,
        body :formData 
    });
}

export const downloadFile = (formData) => {
    return fetch ({
        method : 'get' ,
        url : BaseUrl + APIS.FILE.downloadFile(formData) ,
        headers: {
             'Accept': 'application/octet-stream' 
        }, 
    });
}

export const deleteFileById = (formData) => {
    return fetch ({
        method : 'delete' ,
        url : BaseUrl + APIS.FILE.deleteFileById(formData) 
    });
}

