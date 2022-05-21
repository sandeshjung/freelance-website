import React from 'react'

import './Home.css'

export default function HomepageSearch() {
  return (
      <div className='bright-bg-color'>
          <>
      <div className='search-section'>
    <div className="search-button">
    <div className='row'>
        <div className='col-4 mx-auto'>
        <form className="d-flex justify-content-center">
            <input className="form-control me-2  " type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
       </div>
       </div>
       </div>
       </div>
       </></div>
  )
}
