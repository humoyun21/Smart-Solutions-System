import "./stely.scss";

import { Container } from "@containers";

function index() {
    return <section id="smart" className="pt-[122px] pb-[148px]">
        <Container>
       <div className="speak">
        <div className="speak-form">
            <h2>SPEAK WITH AN EXPERT</h2>
            <p>If you are looking for technical support, please click here.</p>
           <form action="">
            <div className="speak-forms">
                <div className="speak-forms-name">
                    <p>First Name *</p>
                    <input type="text" />
                </div>
                <div className="speak-forms-name">
                    <p>First Name *</p>
                    <input type="text" />
                </div>
            </div>

            <div className="speak-forms">
                <div className="speak-forms-name">
                    <p>Email * *</p>
                    <input type="text" />
                </div>
                <div className="speak-forms-name">
                    <p>Phone *</p>
                    <input type="text" />
                </div>
            </div>
            
            <div>
                <div className="speak-forms-company">
                        <p>Company name *</p>
                        <input type="text" />
                </div>
               
                <div className="speak-forms-company">
                    
                    <p>Country *</p>
                    <select name="" id=""></select>
                </div>

                <div className="speak-forms-company">
                    <p>How can we help you? *</p>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
                <div className="speak-forms-company">
                    <p>Sector(s) of Interest *</p>
                    <select name="" id=""></select>
                </div>
            </div>

            <div className="speak-forms-btn">
            <button >
                Sumbit
            </button>
            </div>
            



           
           </form>
        </div>
        <div className="speak-about">
        <h2>
        RST has been one of our trusted partners for years in providing solutions to a wide range of our instrumentation needs—from the prompt shipment of piezometers and inclinometer casing, to the annual calibration of our inclinometer systems. RST takes the time to learn about our projects and provides value by collaborating with us on our monitoring strategy.-Elke Declercq, Geotechnical Dept – Flemish Government
        </h2>
        </div>
       </div>

        </Container>
    </section>
}

export default index;