import axios from 'axios';
import React, {useState, useEffect} from 'react'
import jwt_decode from 'jwt-decode'
import RequestList from '../Requests/RequestList';
const ShowRequests = ({value1}) => {
    
    var user= localStorage.getItem("token")
	var decode = user;
	var decoded = jwt_decode(decode);
    const [requests, setRequests] = useState({})
  // console.log(value2) 
    const handleClick =async () => {
         
        // console.log(toSend)
        await axios.get(`http://localhost:5000/api/request/`)
        .then(resp => {
            setRequests(resp.data.filter(
                (job) => 
                    job.jobId === value1
        ))
        })

        
//  requests.map((value)=>{
//             // console.log(value)
//             axios.get(`http://localhost:5000/api/users/${value.fId}`)
//             .then(response => { 
//                 setHandleData(response.data)
//             })
//             console.log(handleData)

//         })
    }
    React.useEffect(()=>{console.log({requests})},[requests])  

    // const [handleData, setHandleData] = useState({})
    // const handleRequest = (value) => {
        
        
        
    //     console.log(handleData)
        
    // }


  return (
    <div sx={{display:'flex', justify:'center', align:'center'}}>
         <button onClick={handleClick} className="btn btn-outline-success">Show Requests</button>
         <br/>
         <div>
             <RequestList value={requests}/>
         </div>
             
    </div>
  )
}

export default ShowRequests
