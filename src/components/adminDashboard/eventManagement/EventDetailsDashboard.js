import React from 'react';
import { useParams } from 'react-router';
import UploadCustomFile from "../../fileHandle/uploadCustomFile.js"
import FetchFiles from "../../fileHandle/fetchFiles.js";
import {getAllFilesByEvent} from "../../../service/file/file.js"
import { ulploadFilesToEvent } from '../../../service/event/event.js';


const EventDetailsDashboard = () => {
    const {eventId} = useParams();

  return (
    <div className="event-details-dashboard-container">
      
      <UploadCustomFile 
        uploadCustomFiles={ulploadFilesToEvent}
        id={eventId}
      />

      <FetchFiles 
        getSpecificFiles={getAllFilesByEvent}
        id={eventId}
      />
    </div>
  )
}

export default EventDetailsDashboard
