import React, { Component } from 'react'
import './Navbar.css'
import Web from '../photos/Navbarbackground.png'
import Button from '@mui/material/Button';
import Footer from './Footer';
import Cardcom from './Cardcom';
import Typewriter from "typewriter-effect";




export class Home extends Component {
  render() {
    return (
      <div>
          <section id="header" className="d-flex align-item-center">
             <div className="container-fluid nav_bg">
                 <div className="row text-align" style={{backgroundColor: "floralwhite"}}>
                     <div className="col-10 mx-auto">
                         <div className="row">
                           <div className="BandTitle col-md-6 pt-5  order-2 order-lg-1">
                            <h1 className="Textcenter">We are Team of Professional.We Provide
                            <Typewriter ClassName="Type-writing"
                                options={{
                                  strings: [
                                    '<span> Content Production </span>',
                                    '<span> Software Product🧑‍💻 </span>',
                                    '<span> Content Enrichment </span>',
                                    '<span> Software Solutions </span>',
                                  ],
                                  autoStart: true,
                                  loop: true,
                                  deleteAll: 2000,
                                  pauseFor: 2000
                                }}
                              />
                               </h1>

                            {/* <strong className="BrandStyle"> Content Production</strong> </h1> */}
                            <div className="mt-3">
                            <Button size="large" variant="contained">About us</Button>
                            </div>
                           </div>

                           <div className="col-lg-6 order-1 order-lg-2 header-image">
                               <img src={Web} className="img-fluid animated"  alt="landing img"/>
                           </div>
                           </div>
                     </div>
                  </div>
                </div>  
          </section>

          <section>
            <div className="container">
            <div className="row">
                <div className="col-lg-6">
                  <h1 className="weOffers">what we Offers</h1>
                 </div> 
               </div>   
            </div>    
            </section>
            <Cardcom/>  

          <Footer/>
      </div>
    )
  }
}

export default Home