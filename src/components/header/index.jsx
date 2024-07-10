import "./style.scss";
import { Container } from "@containers";
import logo from "../../assets/images/logo.jpeg"

const index = () => {
    return (
        <header>
            <Container>
                <nav className="header-wrap">
                    <a href="#" className="logo"> <img src={logo} alt="img" /></a>
                    <div className="header-ul">
                        <ul className="header-link">
                            <li><a href="#" className="">PRODUCTS</a></li>
                            <li><a href="#" className="">  SERVICES</a></li>
                            <li><a href="#" className=""> SUCCESS STORIES</a></li>
                            <li><a href="#" className=""> RESOURCES</a></li>
                            <li><a href="#" className=""> ABOUT US </a></li>
                            <li><a href="#" className="">  CONTACT</a></li>
                            
                        </ul>
                     <button className="header-btn">
                        <a href="#">Requset a quote</a>
                     </button>
                    </div>
                </nav>
            </Container>

        </header>
    );
};

export default index;