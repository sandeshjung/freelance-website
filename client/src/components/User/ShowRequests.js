import axios from 'axios';
import React, {useState, useEffect} from 'react'
import jwt_decode from 'jwt-decode'
const ShowRequests = ({value1}) => {
    var user= localStorage.getItem("token")
	var decode = user;
	var decoded = jwt_decode(decode);
    const [requests, setRequests] = useState({})
  // console.log(value2) 
    const handleClick = () => {
         
        // console.log(toSend)
        axios.get(`http://localhost:5000/api/request/`)
        .then(resp => {
            setRequests(resp.data.filter(
                (job) => 
                    job.jobId === value1
        ))
        })
        requests.map((value)=>{
        return(
            <div>

                {handleRequest(value.fId)}
            </div>
            )
        })
    }


    const handleRequest = (value) => {
        
        console.log(value)
        axios.get(`http://localhost:5000/api/users/${value}`)
        .then(response => { 
            console.log(response.data)
        })
    }

    // React.useEffect(()=>{console.log({requests})},[requests])  

  return (
    <div sx={{display:'flex', justify:'center', align:'center'}}>
         <button onClick={handleClick} className="btn btn-outline-success">Show Requests</button>

    </div>
  )
}

export default ShowRequests
