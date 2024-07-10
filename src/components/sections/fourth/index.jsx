import "./style.scss";
import { Container } from "@containers";
import Blog from "../../../assets/images/blog.png"
import Blog2 from "../../../assets/images/blog2.png"

function index() {
    return <>
    
        <section id="gratis">

        <Container>
            <div className="blog">
                <div className="blog-text">
                <h2>LATEST BLOG POST</h2>
                <h3>LEVERAGING SHAPEARRAY FOR WIRELESS AUTOMATED REMOTE DEFORMATION MONITORING </h3>
                <h4>Wireless automated remote deformation monitoring is transforming how engineers collect data to ensure the safety and durability of their projects.   Through a network of interconnected technology, this real-time monitoring system delivers proactive risk management by evaluating structural and geog…</h4>
                    <button>
                        Read More <i class="bi bi-arrow-right"></i>
                    </button>
                </div>

                <div className="blog-photo">
                    <img src={Blog} alt="" />
                </div>
            </div>

        </Container>
        
        </section>

        <section id="gratis1">

<Container>
    <div className="blog">
    <div className="blog-photo">
            <img src={Blog2} alt="" />
        </div>
        <div className="blog-text">
           <h2>LATEST SUCCESS STORY</h2>
           <h3>DEEP EXCAVATION MONITORING </h3>
           <h4>Location: Burnaby, British Columbia, Canada  …</h4>
            <button>
                  Read More <i class="bi bi-arrow-right"></i>
             </button>
        </div>

        
    </div>

</Container>

        </section>

        <section id="last">
            <Container>
                <div className="last">
                         <div>
                            <h2>SUBSCRIBE</h2>
                            <h3>FOR</h3>
                            <h4>UPDATES</h4>
                        </div> 

                        <div className="last-form">
                          <form action="">
                            <div>
                            <div className="last-form-wrap">
                                <div>
                                    <p>First Name *</p>
                                    <input type="text" />
                                </div>

                                <div>
                                    <p>Last Name *</p>
                                    <input type="text" />
                                </div>
                            </div>

                             
                    </div>
                                <div  className="last-form-email">
                                    <p>Email *</p>
                                    <input type="text" />

                                    
                                </div>

                                <div className="last-form-btn">
                                <button>
                                    Subscribe
                                </button>
                                </div>
                                
                                
                          </form>
                            </div> 
                </div>

            </Container>
        </section>
     </>
    
    
    
}



export default index;