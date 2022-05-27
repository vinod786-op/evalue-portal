import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faLinkedin} from "@fortawesome/free-brands-svg-icons";




export class Footer extends Component {
  render() {
    return (
      <div>
          <footer style={{ backgroundColor: "#182334",padding: "10px 15px", marginTop: "15px"}}>
              <div className="containre">
                  <div className="row" style={{marginTop: "25px"}}>
                      <div className="col-12 col-lg-10 mx-auto">
                          <div className="row">
                              <div className="col-6 col-lg-6">
                                  <h2 style={{color: 'white'}}>Evalue Content</h2>
                                 <p style={{color: 'white'}}>Evalue content Portal is The publishers Industry Portal. we Delever Best content for our clients</p>
                              </div>

                              {/* <---Foloow us on social media --> */}
                                <div className="SocialLogo col-6 col-lg-6">
                                    <h2 style={{ color: 'white'}}>Follow us </h2>
                                    <div className=" row">
                                        <div className="Facebook col-1 mx-1">
                                            <FontAwesomeIcon icon={faFacebook} size="xs" />
                                        </div>
                                        <div className="Twitter col-1 mx-1">
                                            <FontAwesomeIcon icon={faTwitter} size="xs" />
                                        </div>
                                        <div className="Linkdin col-1 mx-1">
                                            <FontAwesomeIcon icon={faLinkedin} size="xs" />
                                        </div>
                                    </div>
                                </div>

                          </div>
                          <hr style={{backgroundColor: 'white'}}/>
                          <div className="mt-2">
                         <p className= "main-hero-para text-center w-100" style={{color: 'white'}}> &copy; Copyright 2022 Evalue content All Right Reserved</p>
                         
                        <p className="text-center" style={{color: 'red', marginTop: "10px"}}>Made with ❤️ Design and Developed By <strong>Vinod Sharma</strong></p>
                          </div>
                      </div>
                  </div>
              </div>
          </footer>
      </div>
    )
  }
}

export default Footer