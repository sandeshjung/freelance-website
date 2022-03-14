import React from 'react'
import './Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import { IconButton } from '@mui/material'

 
export default function Footer() {
 
  return (
        <footer className='footerHead'>
            
            <p className=" info"> <span className='email'>Support emails: </span><span className='click'> support.merolancer@gmail.com </span> </p>
            <p className="info"><span className='phone'>telephone: </span><span className='click'> 123456789</span> , <span className='click'>9876543210 </span></p>
            <div className="footer-social-container">
                <div style={{margin: 'auto 0px'}}>
                    <a href="/About" className="social-link">About us</a>
                    <a href="/Contact" className="social-link">Contact us</a>       
                </div>
                <div>
                    <IconButton
                        href='https://www.facebook.com'
                        target = '_blank'
                        title = 'facebook'
                        className = "socialIcon"
                    >
                        <FacebookIcon 
                            sx={{fontSize : '45px'}}
                        />
                    </IconButton>
 
                    <IconButton
                        href="https://www.instagram.com"
                        target = '_blank'
                        title = 'Instagram'
                        className = "socialIcon"

                    >
                        <InstagramIcon 
                            sx={{fontSize : '45px'}}
                        />
                    </IconButton>
 
                    <IconButton
                        href="https://www.twitter.com"
                        target = '_blank'
                        title = 'Twitter'
                        className = "socialIcon"

                    >
                        <TwitterIcon 
                            sx={{fontSize : '45px'}}
                        />
                    </IconButton>
 
    
                </div>
            </div>
            <p className="footer-credit">Merolancer, the complete freelancing website</p>
        </footer>  
 
    )
}