import fetch from "../../config/interceptor/interceptor"
import {BaseUrl,APIS} from "../../config/constants/URLS"


export const uploadFile = (formData) => {
    return fetch ({
        method : 'post' ,
        url : BaseUrl + APIS.FILE.uploadFile ,
        body : formData,
        //onUploadProgress : (ProgressEvent) => {console.log(ProgressEvent.progress*100)},
        headers : {'Content-Type': 'multipart/form-data'}
    });
}

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

