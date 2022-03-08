import React from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import HomepageSearch from './HomepageSearch'
import { Link } from 'react-router-dom';

export default function HomepageNav() {
  return (
    <>
    <div className='bright-bg-color'>
      <div className='container-fluid'>
       <div className='row'>
        <div className='col-10 mx-auto'>
          
            <nav className="navbar navbar-expand-lg" >
            <div className="navbar-custom container-fluid">
            
            <a className="navbar-custom navbar-brand" href="/Home">Merolancer</a>
           
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
           <div className='right-alligned'>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
             
          
            <div className='d-flex justify-content-end'>
              <div className='login-button'>
              <li className="nav-item">
              <Link to="../Login">
              <p><a href="#" class="btn btn-outline">Login</a></p>
              </Link>
                  
                
              </li>
              </div>
              
              <li className="nav-item">
                  <Link to="../Signup">
                  <button type="button" className="btn btn-success btn-rounded">
                    Create new account
                  </button>
                  </Link>
               
              </li>
            
            </div>
              </ul>
              </div>
            </div>
              </div>
        </nav>
           
        </div>
      </div>
    </div>
    </div>
   
    </>
  )
}
