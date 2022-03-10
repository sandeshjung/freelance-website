import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import Card from './Card'
import { Link } from 'react-router-dom'

export class Content extends Component {
    
  render() {
    var user= JSON.parse(localStorage.getItem("token"))
	
	
		var decode = user;
		var decoded = jwt_decode(decode);
		
		console.log(decoded);
        var loggedIn = decoded.role;
        console.log(loggedIn)

        
    return (
      <div>
          {(() => {
        if (loggedIn==='Hirer') {
          return (
            <div>
                <h3 className="titleFirst">Hire Freelancers</h3>
                </div>
          )
        } else  {
          return (
              <>
            <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                <Link to='/Freelancer'>
                <button className='btn btn-outline-success' >Choose Category</button>
                </Link>
            </div>
                <br/>
                <Card />
                </>
          )
        }
      })()}
      </div>
    )
  }
}

export default Content