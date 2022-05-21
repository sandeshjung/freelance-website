import React,{useEffect, useState} from 'react'
import axios from 'axios'


const RequestList = ({value}) => {
  const [handleData,setHandleData] = useState({})
// useEffect = () => {
//   value.map((value)=>{
//                 // console.log(value)
//                 axios.get(`http://localhost:5000/api/users/${value.fId}`)
//                 .then(response => { 
//                     console.log(response.data)
//                 })
//                 // console.log(handleData)
    
//             })
// }
console.log(value)

// const handleChange=(propos)=> {
//   axios.get(`http://localhost:5000/api/users/${value.fId}`)
//                   .then(resp => { 
//                     console.log(resp.data) })
// }


  return (
    <div>
        
    </div>
  )
}

export default RequestList