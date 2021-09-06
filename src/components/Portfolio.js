import React, { Component } from 'react';
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Projects.</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{
              return(
                <div className="columns portfolio-item">
                  {/* <div className="item-wrap"> */}
                    {/* <a href="#modal-01"> */}
                      <img src={`${item.imgurl}`} alt="" className="item-img"/>
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{item.name}</h5>
                          <p>{item.description}</p>
                                <a href={item.url}>View the deployed app or repo here</a>
                        </div>
                      </div>
                    {/* </a> */}
                  </div>
                // </div>
              )
            })
          }
          </div>
        </div>
      </div>
  </section>
        );
  }
}