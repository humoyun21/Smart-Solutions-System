import { NavLink  } from 'react-router-dom';
import navList from "../../router/ruter.js"
import { Container } from "@containers";
import logo from "../../assets/images/logo1.svg"
import "./style.scss";


const index = () => {
    return <>
        <header>
                 <Container>
                <nav className='header-wrap'>
                    <NavLink className="header-wrap-logo"> 
                    <a href="#" className="logo"> <img src={logo} alt="img" />
                    <p>Smart Solutions System</p></a>
                    </NavLink>
                    <div className='header-ul'>
                        <ul className=' header-link'>
                            {
                                navList.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <NavLink to={item.path} activeClassName="active">{item.title}</NavLink>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    
                </nav>
                </Container>
        </header>
    </>
};

export default index;