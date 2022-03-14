import React,{useEffect, useState} from 'react'
import axios from 'axios'


const RequestList = ({value}) => {
  const [handleData,setHandleData] = useState({})
useEffect = () => {
  value.map((value)=>{
                // console.log(value)
                axios.get(`http://localhost:5000/api/users/${value.fId}`)
                .then(response => { 
                    setHandleData(response.data)
                })
                console.log(handleData)
    
            })
}

  return (
    <div>
        
    </div>
  )
}

export default RequestList