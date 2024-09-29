import { useState , useEffect } from "react";
import { useParams } from "react-router";
import { getAthleteById} from "../../service/athlete/athlete.js";
import {getAllFilesByAthlete } from "../../service/file/file.js"
import  FetchFiles  from "../fileHandle/fetchFiles.js"
import "./athleteProfile.css"

const AthleteProfile = ()=>{

    const {athleteId} = useParams() ;
    const [athlete , setAthlete] = useState({});
    const [jsonFiles , setJonFiles]= useState(null) ;
    const [imageUrlList, setImageUrlList] = useState([]); // State for the image URL

    const getAthleteByIdData= async (athleteId)=> {
        try{
            const response = await getAthleteById(athleteId);
            console.log("getAthleteById repsonse : ",response);
            setAthlete(response) ;
        }catch(err){
            console.log("error from getAthleteByIdData",err );
        }
    }

    useEffect(()=> {
        getAthleteByIdData(athleteId);
    },[athleteId])
 
    
    return (
        <div className="athlete-details-container">
          {athlete ? (
            <>
              <h2>{athlete.firstname} {athlete.lastname}</h2>
              <div className="athlete-details">
                <p><strong>Email:</strong> {athlete.email}</p>
                <p><strong>Phone Number:</strong> {athlete.phoneNumber}</p>
                <p><strong>Licence ID:</strong> {athlete.licenceID}</p>
                <p><strong>Date of Birth:</strong> {new Date(athlete.dateOfBirth).toLocaleDateString()}</p>
                <p><strong>Branch:</strong> {athlete.branch}</p>
                <p><strong>Joined On:</strong> {new Date(athlete.createdAt).toLocaleDateString()}</p>
                <p><strong>Medals:</strong> {athlete.hasMedal ? "Yes" : "No"}</p>
              </div>

              <FetchFiles 
                getSpecificFiles={getAllFilesByAthlete}
                id={athleteId}
              />
            </>
            
          ) : (
            <p>Athlete not found</p>
          )}
        </div>
      );
}
export default AthleteProfile;