import React, { useState } from 'react';
import {
    Collapse,
    Container,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';

import Logo from '../../assets/images/logo.svg';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar dark expand="md" fixed="top" style={{ backgroundColor: '#01BAB5' }}>
            <Container>
                <NavbarBrand href="/">
                    <img className="me-2 w-25" src={Logo} />
                    <b>COVID</b>Tracker
                </NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                    <Nav className="ms-auto" navbar>
                        <NavItem className="mx-2">
                            <NavLink activeClass="active" to="beranda">Beranda</NavLink>
                        </NavItem>
                        <NavItem className="mx-2">
                            <NavLink>Resiko</NavLink>
                        </NavItem>
                        <NavItem className="mx-2">
                            <NavLink>Gejala</NavLink>
                        </NavItem>
                        <NavItem className="mx-2">
                            <NavLink>Penularan</NavLink>
                        </NavItem>
                        <NavItem className="ms-2">
                            <NavLink>Pencegahan</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar
