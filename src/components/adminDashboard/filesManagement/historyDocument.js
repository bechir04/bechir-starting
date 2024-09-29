
import { useState , useEffect } from "react";
import UploadCustomFile from "../../fileHandle/uploadCustomFile.js";
import {uploadMultipleFiles} from "../../../service/file/file.js";


const HistoryDocument = () => {
    return (
        <>
        <h2>History Document</h2>
        <UploadCustomFile 
            uploadCustomFiles={uploadMultipleFiles}
        />
        </>
    );
}

export default HistoryDocument ;