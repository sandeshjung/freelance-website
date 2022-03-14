import React from "react";
import "./About.css";
import Navbar from "../Home/HomepageNav"
import Footer from "../Footer/Footer";


function About() {
  return (
      <>
      <Navbar />
    <div className="about">
      <h1>About Us</h1> <hr />
      <p>Hello, wishes from team MEROLANCER</p>
      <p>
      Merolaancer is the Nepal's largest freelancing marketplace
      by number of users and projects. We connect over many employers and freelancers
      all over Nepal from 77 districts. Through our marketplace,
      employers can hire freelancers to do work in areas such as software development, writing,
      data entry and design right through to engineering, the sciences, sales and marketing, accounting and legal services.
     
      </p>
      <br />
      <h2>About the Company </h2> <hr />
      <p>
        Merolancer is established by the group of Students from Himalaya College of Engineering .<br />
        The member of the team includes:<br/> <br/>
        <li>Suroj Maharjan (Project Co-ordinator)</li>
        <li>Sandesh J. Kunwar (Backend / Database)</li>
        <li>Riwash Neupane (Front End)</li>
        <li>Ayush Kayastha (Front End)</li>
        <li>Prashant Bhattarai (Algorithm)</li>
      </p>
      <br />

    </div>
    <Footer/>
    </>
  );
}

export default About;