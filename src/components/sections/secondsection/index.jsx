import "./style.scss"

import { Container } from "@containers"
import Icon1 from "../../../assets/images/icon1.svg"
import Icon2 from "../../../assets/images/icon2.svg"
import Icon3 from "../../../assets/images/icon3.svg"
import Icon4 from "../../../assets/images/icon4.svg"
import Woman from "../../../assets/images/woman.jpg"
import Feature from "../../../assets/images/feature.jpg"
import Feature1 from "../../../assets/images/featured1.jpg"
import Feature2 from "../../../assets/images/featured2.jpg"
import Feature3 from "../../../assets/images/featured3.jpg"
function index() {
    return <section id="main-section" className="py-[80px] bg-[#EEF4FA]">
        <Container>
        <div className="second" >
           <div className="second-all">
           <img src={Icon1} alt="" />

           <h2>ALL PRODUCTS</h2>
           <h3>
            Discover our advantage. Offering the widest range of monitoring solutions in the industry.</h3>
           </div>

           <div className="second-all">
           <img src={Icon2} alt="" />

           <h2>DOWNLOAD CENTER</h2>
           <h3>
            Explore our download center. Find everything from product brochures to our software files.</h3>
           </div>

           <div className="second-all">
           <img src={Icon3} alt="" />

           <h2>SUPPORT</h2>
           <h3>
            

Learn from some of the top technical minds in the industry and get the support you need.</h3>
           </div>

           <div className="second-all">
           <img src={Icon4} alt="" />

           <h2>CONTACT US</h2>
           <h3>
           

We want to hear from you. We love learning about your projects and creating new partnerships.</h3>
           </div>

        </div>

        <div className="about">
            <div className="about-us">
                <h2> ABOUT US</h2>
                <h3>YOUR PROJECT’S ON SOLID GROUND WITH RST.</h3>
                <h4>RST was founded in 1977, when Robert Straghan Sr. built a better pneumatic piezometer. We’ve come a long way since then, but some things haven’t changed. Relentless curiosity and a drive to solve exciting problems still fuel us.<br/> <br/> 
            In our bustling lab, we’re continually devising original solutions to evolving engineering challenges. Our sensors enable the next generation of projects so you can go places you’ve never been before with confidence.<br/> <br/> 
            For over 40 years, RST’s pioneering technologies have enabled iconic infrastructure projects, including dams, tunnels, bridges, and more. From our base in Western Canada, we’ve grown a reputation for right-fit solutions that span the lifecycle of your project, from designing and building to training, installing, inspecting and updating monitoring systems.
            That’s a legacy worth protecting.</h4>
            <button >
            REQUEST A QUOTE
            </button>
            </div>

            <div className="about-img">
            <img src={Woman} alt="" />
            </div>

           


        </div>

        <div className="photos">
             <img src={Feature} alt="" />
             <img src={Feature1} alt="" />
             <img src={Feature2} alt="" />
             <img src={Feature3} alt="" />


        </div>
        </Container>
    </section>
}

export default index;