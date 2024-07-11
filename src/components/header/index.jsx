import "./style.scss";
import { Container } from "@containers";
import logo from "../../assets/images/logo1.svg"

const index = () => {
    return (
        <header>
            <Container>
                <nav className="header-wrap">
                    <div className="header-wrap-logo"> 
                    <a href="#" className="logo"> <img src={logo} alt="img" /></a>
                    <p>Smart Solutions System</p>
                    </div>
                  
                    <div className="header-ul">
                        <ul className="header-link">
                            <li><a href="#" className="">Maxsulotlar</a></li>
                            <li><a href="#" className="">  Xizmatlar</a></li>
                            <li><a href="#" className=""> Loyihalar</a></li>
                            <li><a href="#" className=""> Malumotlar</a></li>
                            <li><a href="#" className=""> Yangiliklar </a></li>
                            <li><a href="#" className="">  Aloqa</a></li>
                            
                        </ul>
                     <button className="header-btn">
                        <a href="#">Bog'lanish</a>
                     </button>
                    </div>
                </nav>
            </Container>

        </header>
    );
};

export default index;