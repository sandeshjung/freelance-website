import axios from 'axios';
import React, {useState, useEffect} from 'react'
import jwt_decode from 'jwt-decode'
import Button from "@mui/material/Button"
import ProfileData from '../Profile/ProfileData';
import { useNavigate } from 'react-router-dom';
// import RequestList from '../Requests/RequestList';
const ShowRequests = ({value1}) => {
  const [requests, setRequests] = useState([])
    var user= localStorage.getItem("token")
	var decode = user;
	var decoded = jwt_decode(decode);
  const navigate = useNavigate()
  // console.log(value2) 
    const handleClick =async () => {
         
        // console.log(toSend)
        await axios.get(`http://localhost:5000/api/request/`)
        .then(resp => {

            // console.log(resp.data) 
            setRequests(resp.data.filter(
                (job) => 
                    job.jobId === value1
        ))
        })
       

    }
        
 
    React.useEffect(()=>{console.log({requests})},[requests])  

        
        // console.log(handleData)
        
const handleEvent = (id) => {
  alert('Accepted')

}

  return (
    <div sx={{display:'flex', justify:'center', align:'center'}}>
         <button onClick={handleClick} classNameName="btn btn-outline-success">Show Requests</button>
         
         <div>
            {
              requests.map((value,ind)=>{
                return(
                  <div>
                    {/* {console.log(value.fId.firstName)} */}
                    {/* <Button onClick={handleEvent(value.fId.firstName)}> {value.fId.firstName}</Button> */}

                    <div className="modal-body">
  
  <a onClick={handleEvent} role="button" className="btn btn-secondary popover-test" title="Popover title" data-content="Popover body content is set in this attribute.">{value.fId.firstName}</a>
  
</div>
                   
                  </div>
                )
              })
            }

         </div>
             
    </div>
  )
}

export default ShowRequests
