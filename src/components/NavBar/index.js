import React, { useEffect, useState } from 'react';
import {
    Collapse,
    Container,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
} from 'reactstrap';

import Logo from '../../assets/images/logo.svg';
import { Link, scrollSpy } from 'react-scroll';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    
    useEffect(() => {
        scrollSpy.update();
    }, [])

    return (
        <Navbar dark expand="md" fixed="top" style={{ backgroundColor: '#01BAB5' }}>
            <Container>
                <div>
                    <Link className="NavLogo" activeClass="activeNav" to="HeroSection" spy={true} smooth={true} offset={0} duration={100} style={{ cursor: 'pointer' }}>
                        <img className="Logo me-2" src={Logo} alt="Logo" />
                        <b>COVID</b>Tracker
                    </Link>
                </div>
                <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                    <Nav className="ms-auto" navbar>
                        <NavItem className="mx-3" style={{ cursor: 'pointer' }}>
                            <Link className="NavLink" activeClass="activeNav" to="HeroSection" spy={true} smooth={true} offset={0} duration={100}>
                                Beranda
                            </Link>
                        </NavItem>
                        <NavItem className="mx-3" style={{ cursor: 'pointer' }}>
                            <Link className="NavLink" activeClass="activeNav" to="RiskSection" spy={true} smooth={true} offset={0} duration={100}>
                                Resiko
                            </Link>
                        </NavItem>
                        <NavItem className="mx-3" style={{ cursor: 'pointer' }}>
                            <Link className="NavLink" activeClass="activeNav" to="IndicationSection" spy={true} smooth={true} offset={0} duration={100}>
                                Gejala
                            </Link>
                        </NavItem>
                        <NavItem className="mx-3" style={{ cursor: 'pointer' }}>
                            <Link className="NavLink" activeClass="activeNav" to="InfectionSection" spy={true} smooth={true} offset={0} duration={100}>
                                Penularan
                            </Link>
                        </NavItem>
                        <NavItem className="ms-3" style={{ cursor: 'pointer' }}>
                            <Link className="NavLink" activeClass="activeNav" to="PreventionSection" spy={true} smooth={true} offset={0} duration={100}>
                                Pencegahan
                            </Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar
