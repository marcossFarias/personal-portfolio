import { useEffect, useState} from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import logo from '../assets/img/logo.svg'
import navicon1 from '../assets/img/nav-icon1.svg'
import navicon2 from '../assets/img/nav-icon2.svg'
import navicon3 from '../assets/img/nav-icon3.svg'


function PortifolioNavBar() {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value)
    };

    return (
        <Navbar expand="lg" className={scrolled ? 'scrolled' : ''}>
        <Container>
            <Navbar.Brand href="#home"> <img scr={logo} alt='logo'/>My Personal Portifolio</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                <Nav.Link href="#about-me" className={activeLink === 'about-me' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about-me')}>About me</Nav.Link>
            </Nav>
            <span className='navbar-text'>
                <div className='social-icon'>
                    <a href='#'><img src={navicon1} alt='' /></a>
                    <a href='#'><img src={navicon2} alt='' /></a>
                    <a href='#'><img src={navicon3} alt='' /></a>
                </div>
            </span>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
}

export default PortifolioNavBar;
