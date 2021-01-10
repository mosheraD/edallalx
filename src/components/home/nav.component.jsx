import React from 'react';
import ScrollIntoView from 'react-scroll-into-view';

import BlueNav from './blue-nav.component';

// styles and images
import { Navbar, Nav } from 'react-bootstrap';

import logoWeb from '../../images/logos/eDallal-logo.svg';


export default function HomeNav() {
    const handleClick = () => {
        window.scrollTo({ top: "0", behavior: "smooth" })
    }
    return (
        <>
            <BlueNav />
            <Navbar collapseOnSelect sticky="top" expand="lg" bg="white" className="p-0 shadow" variant="light">
                {/* for web */}
                <Navbar.Brand className="d-web pl-2">
                    <img src={logoWeb} className="img-fluid" alt="logo" />
                </Navbar.Brand>
                {/*  for mob */}
                <Navbar.Brand className="d-mob p-1">
                    <img src={logoWeb} className="" alt="logo" />
                </Navbar.Brand>
                {/* buttons for mobile */}
                <Nav className="d-mob">
                    <button className="btn-white  mr-1 " to='/confirmation'>Register</button>
                    <button className="btn-blue" to='/login'>Sign In</button>
                </Nav>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto p-0 ">
                        <ScrollIntoView selector="#header">
                            <Nav.Link
                                className="mr-2 ml-2"
                            >
                                Home
                            </Nav.Link>
                        </ScrollIntoView>
                        <ScrollIntoView selector="#about">
                            <Nav.Link
                                className="mr-2 ml-2"
                            >
                                About us
                            </Nav.Link>
                        </ScrollIntoView>
                        <ScrollIntoView selector="#services">
                            <Nav.Link
                                className="mr-2 ml-2"
                            >
                                Services
                            </Nav.Link>
                        </ScrollIntoView>
                        <ScrollIntoView selector="#collaborators">
                            <Nav.Link
                                className="mr-2 ml-2"
                            >
                                Collaborators
                            </Nav.Link>
                        </ScrollIntoView>
                        <ScrollIntoView selector="#contact">
                            <Nav.Link
                                className="mr-2 ml-2"
                            >
                                Contact Us
                            </Nav.Link>
                        </ScrollIntoView>
                    </Nav>
                </Navbar.Collapse>
                {/* buttons for web */}
                <Nav className="ml-auto inline-block d-web bg-lightblue" style={{ padding: '0.5rem 0.75rem' }}>
                    <button
                        className="btn-white mr-2 ml-2"
                        onClick={handleClick}
                        to={{
                            pathname: '/registration',
                            state: "Register"
                        }}>
                        Create an account</button>
                    <button
                        className="btn-blue mr-2 ml-2 pr-5 pl-5"
                        onClick={handleClick}
                        to='/login'>Login</button>
                </Nav>
            </Navbar>
        </>
    )
}