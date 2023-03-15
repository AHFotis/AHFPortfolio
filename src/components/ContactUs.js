import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
        <div className="row section-head">
          <div className="ten columns">
            <p style={{ color: "white", fontSize: "15px"}}>"The more particular you make something, the more universal it becomes." - Greta Gerwig</p>
            <h4>Let's Connect!</h4>
            <div className="row">
              <aside className="eigth columns footer-widgets">
                
                  {resumeData.contact && resumeData.contact.map((item)=>{
                  return(
                    <p className="contact-items"> 
                      <i className={item.icon}/> 
                      {item.link ? <a href={item.link}>{item.detail}</a> : <span className="phone-number">{item.detail}</span>}
                    </p>
                  )})}
              </aside>
            </div>
          </div>
        </div>
      </section>
    );
  }
}