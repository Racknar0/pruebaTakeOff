import {useRef} from 'react'
import styled from "styled-components";
import Logo from "../img/logo.png";
import '../styles/main.css'



const NavStyled = styled.div`
   /*  background-color: #ffffff;
 */
    /* @media (min-width: 768px) {
        background-color: #ffffff;
    } */
`;

const ImagenLogo = styled.img`
    display: none;
    margin: 15px 0px;
    @media (min-width: 768px) {
        display: flex;
        width: 160px;
        height: 45px;
    }
`;

const NavLink = styled.a`
    color: #ffffff !important;
    font-size: 1.2rem;
    font-weight: bold;
    text-decoration: none;
    margin: 5px 0px;

    @media (min-width: 768px) {
        color: #000000 !important;
        margin: 0;
    }

    &:hover {
        color: #c000b6 !important;
        

        @media (min-width: 768px) {
            &::after {
                content: '';
                display: block;
                width: 100%;
                height: 2px;
                margin-top: 10px;
                background-color: #c000b6;
            }
        }
    }
`




const Header = () => {

    //referenciar
    const navRef = useRef(null);
    const imgRef = useRef(null);

    //funcion para abrir el nav
    const handleClick = () => {
        console.log(navRef.current);
        navRef.current.classList.toggle('close');
        navRef.current.classList.toggle('open');
        imgRef.current.classList.toggle('removeImg');
        imgRef.current.classList.toggle('AddImg');

    }


    return (
        <div>
            <NavStyled ref={navRef} className="navbar navbar-expand-md navbar-light py-3 px-2 close">
                <div className="container-fluid justify-content-end">
                        <ImagenLogo 
                            
                            src={Logo}
                            alt="Logo"
                        />
                    <img alt="imagenLogo" ref={imgRef} width='100px' height='50px' src={Logo} className='text-primary d-md-none me-auto AddImg'/>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={handleClick} >
                        <span className="toggler-icon top-bar"></span>
                        <span className="toggler-icon middle-bar"></span>
                        <span className="toggler-icon bottom-bar"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        
                        <ul className="navbar-nav ms-auto mb-4 mb-lg-0 text-center">
                            <li className="nav-item">
                                <NavLink className="nav-link" href="/" > BECAS </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" href="/"> FESTIVAL DE CINE </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" href="/"> PELICULAS </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" href="/"> A TI y A TI </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" href="/"> MASTER class </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </NavStyled>









        </div>
    );
};

export default Header;
