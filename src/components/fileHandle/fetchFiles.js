import { useEffect  , useState} from "react";
import {downloadFile} from "../../service/file/file.js"



const FetchFiles = ({getSpecificFiles ,id})=>  {
    const [imageUrlList, setImageUrlList] = useState([]); // State for the image URL

    const fetchAthleteFiles  = async (id)=>{
        try{
          console.log(" getAllFilesByAthlete :");
          const response = await getSpecificFiles(id);
          console.log("response from getAllFilesByAthlete :",response);
          
          if(response && response.length){
            const newImageUrlList = await Promise.all(
              response.map(async (item) => {
                const imageBlobUrl = await downloadFile(item.name);
                return imageBlobUrl;
              })
            );
      
            setImageUrlList((prevList)=> [...prevList , ...newImageUrlList ]);
            console.log("Updated imageUrlList", newImageUrlList);
          }
        }catch(err){
          console.log("error from getAllFilesByAthlete" , err); 
        }
      }
      useEffect(()=> {
        fetchAthleteFiles(id) ;
      },[id]);

      return(
        <>
          {imageUrlList.length > 0 ? (
            imageUrlList.map((imageUrl, index) => (
              <img
                key={index}
                src={imageUrl}
                alt={`athlete-file-${index}`}
                style={{ width: "200px", height: "200px", objectFit: "cover" }}
              />
            ))
          ) : (
            <p>No images available</p>
          )}
        </>
      );
}

export default FetchFiles ;