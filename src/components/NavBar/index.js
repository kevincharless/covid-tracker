import React, { useEffect, useState } from 'react';
import {
    Collapse,
    Container,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
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
                <NavbarBrand>
                    <Link activeClass="active" to="HeroSection" spy={true} smooth={true} offset={0} duration={100} style={{ cursor: 'pointer' }}>
                        <img className="Logo me-2" src={Logo} alt="Logo" />
                        <b>COVID</b>Tracker
                    </Link>
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                    <Nav className="ms-auto" navbar>
                        <NavItem className="mx-2" style={{ cursor: 'pointer' }}>
                            <NavLink to="beranda">
                                <Link activeClass="active" to="HeroSection" spy={true} smooth={true} offset={0} duration={100}>
                                    Beranda
                                </Link>
                            </NavLink>
                        </NavItem>
                        <NavItem className="mx-2" style={{ cursor: 'pointer' }}>
                            <NavLink>
                                <Link activeClass="active" to="RiskSection" spy={true} smooth={true} offset={0} duration={100}>
                                    Resiko
                                </Link>
                            </NavLink>
                        </NavItem>
                        <NavItem className="mx-2" style={{ cursor: 'pointer' }}>
                            <NavLink>
                                <Link activeClass="active" to="IndicationSection" spy={true} smooth={true} offset={0} duration={100}>
                                    Gejala
                                </Link>
                            </NavLink>
                        </NavItem>
                        <NavItem className="mx-2" style={{ cursor: 'pointer' }}>
                            <NavLink>
                                <Link activeClass="active" to="InfectionSection" spy={true} smooth={true} offset={0} duration={100}>
                                    Penularan
                                </Link>
                            </NavLink>
                        </NavItem>
                        <NavItem className="ms-2" style={{ cursor: 'pointer' }}>
                            <NavLink>
                                <Link activeClass="active" to="PreventionSection" spy={true} smooth={true} offset={0} duration={100}>
                                    Pencegahan
                                </Link>
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar
