import React from 'react'
//import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import './Home.css'
import HomepageNav from './HomepageNav'
import HomepageSearch from './HomepageSearch'
import HomepageContent from './HomepageContent'

export default function Home() {
  return (
    <>
    <div>
   <HomepageNav />
   <HomepageContent />
    </div>
    <Footer />
   
  
    </>
    
  )
}
