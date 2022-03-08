import React from "react";
import "./Contact.css";
import Navbar from "../Home/HomepageNav"




function Contact() {
  return (
    <>
    <Navbar />
    
<div className="background">
  <div className="container">
    {/* <div className="screen"> */}
      
      <div className="screen-body">
        <div className="screen-body-item left">
          <div className="app-title">
              <h2>MEROLANCER</h2>
              <hr/>
            <span>CONTACT</span>
            <span>US</span>
          </div>
          <div className="app-contact">
              CONTACT No : +977 986-131-3477
              <hr />
                EMAIL: riwazn@gmail.com
            </div>
        </div>
        <div className="screen-body-item">
          <div className="app-form">
            <div className="app-form-group">
              <input type= "text" className="app-form-control" placeholder="NAME" required="true" />
            </div>
            <div className="app-form-group">
              <input type= "email" className="app-form-control" placeholder="EMAIL" required="true" />
            </div>
            <div className="app-form-group">
              <input type= "text" className="app-form-control" placeholder="CONTACT NO" required="true" />
            </div>
            <div className="app-form-group message">
              <input className="app-form-control" placeholder="MESSAGE" required="true"/>
            </div>
            <div className="app-form-group buttons">
              
              <button className="app-form-button">SEND</button>
            </div>
          </div>
        </div>
      </div>
    
  </div>
</div>
</>
);
}

export default Contact;