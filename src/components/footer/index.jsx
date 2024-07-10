import "./style.scss";
import { Container } from "@containers";
import Orica from "../../assets/images/Orica.svg"

import Bgimg from "../../assets/images/bgimg.jpg"

const index = () => {
    return (
        <footer className="bg-[#010101]">
            <Container>
                <div className="footer"> 
                       <div className="footer-midle" >
                        <ul className="footer-about"> 
                            <li><a href="#" className="footer-ul-li">Products</a></li>
                            <li><a href="#" className="footer-ul-li">Instruments</a></li>
                            <li><a href="#" className="footer-ul-li"> Data Collection</a></li>
                            <li><a href="#" className="footer-ul-li"> Software</a></li>
                           
                        </ul>

                        <ul className="footer-about">
                            <li><a href="#" className="footer-ul-li"> Services</a></li>
                            <li><a href="#" className="footer-ul-li"> ServicesCalibrations and Repairs </a></li>
                            <li><a href="#" className="footer-ul-li"> Field Services</a></li>
                            <li><a href="#" className="footer-ul-li"> Rentals</a></li>
                            <li><a href="#" className="footer-ul-li"> Training</a></li>
                            <li><a href="#" className="footer-ul-li"> Return Request</a></li>
                           
                        </ul>
                        <ul className="footer-about">
                            <li><a href="#" className="footer-ul-li"> Resources</a></li>
                            <li><a href="#" className="footer-ul-li">  Blog</a></li>
                            <li><a href="#" className="footer-ul-li"> Success Stories</a></li>
                            <li><a href="#" className="footer-ul-li"></a>Applications</li>
                            <li><a href="#" className="footer-ul-li"></a>Videos</li>
                            <li><a href="#" className="footer-ul-li"></a>Downloads</li>
                           
                        </ul>
                        <ul className="footer-about">
                            <li><a href="#" className="footer-ul-li"> About Us</a></li>
                            <li><a href="#" className="footer-ul-li">  Events</a></li>
                            <li><a href="#" className="footer-ul-li"> Careers</a></li>
                            <li><a href="#" className="footer-ul-li"> Certifications</a></li>
                           
                        </ul>
                        <ul className="footer-about">
                            <li><a href="#" className="footer-ul-li"> RST HQ Canada</a></li>
                            <li><a href="#" className="footer-ul-li">  RST Instruments Ltd.</a></li>
                            <li><a href="#" className="footer-ul-li"> 11545 Kingston Street</a></li>
                            <li><a href="#" className="footer-ul-li"> Maple Ridge, BC</a></li>
                            <li><a href="#" className="footer-ul-li"> Canada V2X 0Z5</a></li>
                            <li><a href="#" className="footer-ul-li"> 1-800-665-5599</a></li>
                            <li><a href="#" className="footer-ul-li"> 604-540-1100</a></li>
                            <li><a href="#" className="footer-ul-li"> Mon-Fri: 7:30 a.m – 5:00</a></li>
                            <li><a href="#" className="footer-ul-li"> p.m (PST)</a></li>

                           
                        </ul>
                        <ul className="footer-about">
                            <li><a href="#" className="footer-ul-li">RST UK</a></li>
                            <li><a href="#" className="footer-ul-li"> Unit 4 -</a></li>
                            <li><a href="#" className="footer-ul-li"> Charles Industrial Estate</a></li>
                            <li><a href="#" className="footer-ul-li"> Stowupland Road,</a></li>
                            <li><a href="#" className="footer-ul-li"> StowmarketH</a></li>
                            <li><a href="#" className="footer-ul-li"> Suffolk, UK, IP14 5AH</a></li>
                            <li><a href="#" className="footer-ul-li"> +44 1449 706680</a></li>

                           
                        </ul>

                       </div>
                       
                <div className="footer-terra">
                    <h2>Terra Insights</h2> 
                    <ul>
                            <li><a href="#" className="footer-ul-li"> Measurand</a></li>
                            <li><a href="#" className="footer-ul-li"> 3vGeomatics </a></li>
                            <li><a href="#" className="footer-ul-li">  Syscom Instruments</a></li>
                            <li><a href="#" className="footer-ul-li"> NavStar</a></li>
                           
                    </ul>
                </div>     


                <div>
                <img src={Orica} alt="" />

                <div className="footer-icon">
                <li><i class="bi bi-linkedin"></i></li>
                <li><i class="bi bi-youtube"></i></li>
                <li> <i class="bi bi-envelope"></i></li>

                </div> 

                <div className="footer-end">

                    <div>
                    <ul>
                                    <li> RST Portal </li>
                                    <p>|</p>
                                    <li>Terms & Conditions </li>
                                    <p>|</p>
                                    <li> Privacy Policy </li>

                                    
                     </ul>
                     <p className="about">Copyright 2024 RST Instruments Ltd. RST reserves the right to change specification without notice.</p>
                    </div>


                   
                
                <img src={Bgimg} alt="" />
                </div>
              

                </div>


                </div>
            </Container>

        </footer>
    );
};

export default index;