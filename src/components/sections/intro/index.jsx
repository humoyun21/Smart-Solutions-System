import "./stely.scss";
import { Container } from "@containers";
import { Carousel } from 'antd';
import Corusle1 from "../../../assets/images/corusel1.png"
import Corusle2 from "../../../assets/images/corusel2.png"
import Corusle3 from "../../../assets/images/corusel3.jpg"
import Corusle4 from "../../../assets/images/corusel4.jpg"

function index() {
    return <section id="intro" className="bg-[#1C1E53] pt-[92px] pb-[132px] ">
        <Container>
           <Carousel  arrows infinite={true} autoplay={true}>

            <div  className="carousel">
                <img src={Corusle1} alt="" />
            </div>
            <div  className="carousel">
                <img src={Corusle2} alt="" />
            </div>
            <div  className="carousel">
                <img src={Corusle3} alt="" />
            </div>
            <div  className="carousel">
                <img src={Corusle4} alt="" />
            </div>
           </Carousel>
           
        </Container>
    </section>
}

export default index; 