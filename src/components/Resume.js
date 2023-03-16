import React, { Component } from 'react';
import resume from "../pdf/AnnaHickeyFotisResume.pdf"


export default  class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">
         <div className="row education">
            <div className="three columns header-col">
               <h1><span>Experience</span></h1>
            </div>
            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
                  <h3>Resume</h3>
                  <p>
                    <a href={resume} download>Download Anna's Resume</a>
                  </p>
                  {resumeData.work && resumeData.work.map((item) => {
                    return(
                      <div className="row item">
                        <div className="twelve columns">
                          <h3>{item.CompanyName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.MonthOfStarting} {item.YearOfStarting} - {item.MonthOfLeaving} {item.YearOfLeaving}</em></p>
                          <p>
                          {item.Achievements}
                          </p>
                        </div>
                      </div>
                  )})}
                </div>
              </div>
            </div>
         </div>
         <hr></hr>
         <div className="row skill">
            <div className="three columns header-col">
              <h1><span>Skills</span></h1>
            </div>
            <div className="nine columns main-col">
              <div className="row item skills-row">
                {resumeData.skills && resumeData.skills.map((item) => {
                    return(
                      <div className="skills-list">
                        <span>
                          <img className="skills-img" src={item.skillIcon}/>
                          <div style={{ textAlign: 'center', fontSize: 'bold', paddingBottom: '10px'}}>{item.skillName}</div>
                        </span>
                      </div>
                    )})}
              </div>
   				  </div>
   			  </div>
      </section>
    );
  }
}