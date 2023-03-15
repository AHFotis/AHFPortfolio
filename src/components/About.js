import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row">
            <div className="three columns">
               <img className="profile-pic"  src="images/Anna_Main.jpg" alt="" />
            </div>
            <div className="nine columns main-col">
               <h2>About Anna</h2>
               <p className="about-text">{resumeData.aboutme}</p>
               <div className="row">
                  <div className="columns contact-details">
                     <h2>Contact Details</h2>
                     <p className="address about-text">
                        <span>{resumeData.name}</span>
                        <br></br>
                        <a href="mailto:annahickeyfotis@gmail.com">{resumeData.email}</a>
                        <br></br>
                        <span>{resumeData.phone}</span>
       					</p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
  }
}