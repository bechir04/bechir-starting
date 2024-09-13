import { useEffect , useState} from "react";
import { useParams } from "react-router";
import {
    Button,
    Form,
    DatePicker,
    Input,
    Table,
    Modal,
    Popconfirm,
    Select,
    Typography,
    notification,
  } from "antd";
import { createPerformance } from "../../../service/perfromance/performance";
import { getAthleteById } from "../../../service/athlete/athlete";
import { all } from "axios";



const AthleteDetails = ()=> {

    const {athleteId}= useParams() ;
    
    const [athlete , setAthlete] = useState({});
    const [isAddingPerformance , setIsAddingPerformance] = useState(false);
    const [performance , setPerformance] = useState({
        federationNote : '',
        createdAT : null ,
        updatedAT: null,
        createdBy: null,
        updatedBy: null,
    });
    const [isPerformanceExists , setIsPerformanceExists] = useState(false) ;


    //Get Athlete  By Id
    const getAthleteByIdData = async(athleteId) =>{
        try{
            const response = await getAthleteById(athleteId , performance);
            console.log("response get Athlete By Id Data", response);
            setAthlete(response)
        }catch(err){
            console.log("error of get Athlete By Id Data" , err);
        }
    }
    
    //Add performance function
    const onOKAddModal = ()=> {
        const jsonPerformance = {
            federationNote : performance.federationNote
        };
        console.log("jsonPerformance " , jsonPerformance);
        handleCreatePerfromance(athleteId ,jsonPerformance );
    }

    const handleCreatePerfromance= async(athleteId , jsonPerformance)=> {
        try{
            const response = await createPerformance(athleteId , jsonPerformance) ;
            console.log("response of create Performance :", response);
            setPerformance(response) ;
            setIsAddingPerformance(false);
        }catch(err){
            console.log("error of create Performance : ", err);
        }
    }

    const onCancelModal = ()=> {
        setIsAddingPerformance(false) ;
        setPerformance({
            federationNote : '',
            createdAT : null ,
            updatedAT: null,
            createdBy: null,
            updatedBy: null,
        })
    }

    // useEffect
    useEffect(()=> {
        getAthleteByIdData(athleteId);
    }, [athleteId])

    return (
        <div className="athlete-details-dashboard-container">
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
            </>
          ) : (
            <p>Athlete not found</p>
          )}

          {isPerformanceExists ? (
            <></>
          ): (
            <>
                <Button 
                    type="primary"
                    onClick={()=>setIsAddingPerformance(true)}
                    style={{ marginBottom: 16, maxWidth: 200}}
                >Add Performance</Button>
                
                <Modal 
                    open= {isAddingPerformance}
                    okText = "Add"
                    cancelText = "cancel"
                    onOk={() => onOKAddModal()}
                    onCancel={()=> onCancelModal()}
                >
                    <Form
                        initialValues={
                            {federationNote : performance.federationNote || ''}
                        }
                        onValuesChange={(_,allValues)=> {
                            setPerformance((prevState) => ({...prevState , ...allValues}))
                        }}
                    >
                        <Form.Item
                            label="Federation Note"
                            name="federationNote"
                            rules={[{ required: true, message: "Please enter the federation note!" }]}
                        >
                            <Input placeholder="Enter federation note" />
                        </Form.Item>
                    </Form>
                
                </Modal>
                
            </>
          )
          }
        </div>
    );
}

export default AthleteDetails ;