import React from 'react'
import './HomepageContent.css'
import Button from '@mui/material/Button';
import HomepageSearch from './HomepageSearch';



export default function HomepageContent() {
  return (
      <>
       <HomepageSearch />
      <div className='first-section'>
            <div className='row'>
                
                    <div className='column'>
                        <div className='homepage-text'>
                
                
                            <p className="card-text">Find the perfect freelancers for your business. </p>

                        </div>
                        <div className='buttons-align'>
                        <Button variant="outlined" color="success">Earn money freelancing</Button>
                        <br/>
                        <br/>
                        <Button variant="contained" color="success">
                            Hire freelancer
                            </Button>
                    </div>
                    </div>


        
                <div className='column'>
                    <img
                        src="./images/homepage-image.jpg"  
                        className="img-fluid hover-shadow"
                        alt="Homepage Image"
                        />
                </div>
                    </div>
                    </div>


        <div className='second-section'>   

        <br/>
        <br/>
        <br/>
            <hr className="style1"></hr>
             
        
        <h1 className='question-title'>Need something done?</h1>
        
       
            <div className='row'>
                
                <div className="column-2">
                    
                    <h5 className="card-title-2">Post a job</h5>
                    <p className="card-text-2">
                    It’s free and easy to post a job. Simply fill in a title, description and budget and competitive bids come within minutes.
                    </p>

                   
                </div>
                
                
           
            
           
               
                
                <div className="column-2">
                    <h5 className="card-title-2">Choose freelancers</h5>
                    <p className="card-text-2">
                    We've got freelancers for jobs of any size or budget. Choose the best one for you.
                    </p>
                </div>
                
                <br/>
                 <br/>
        
                    <hr className="style1"></hr>

                </div>
            
            
            </div>   
    </>
  )
}
