import React from 'react';

// styles and images
import { Navbar, Nav } from 'react-bootstrap';

import delivery from '../../images/icons/delivery.svg';
import contact from '../../images/icons/contact-us.svg';
import help from '../../images/icons/help.svg';
import web from '../../images/icons/web.svg';
import down from '../../images/icons/down.svg';

export default function BlueNav() {
    return (
        <Navbar collapseOnSelect expand="lg" style={{ fontSize: '13px' }} className="blue-nav bg-blue pt-1 pb-1" variant="dark">
            <Nav className="mr-auto">
                <Nav.Link
                    className=" border-right p-0 pr-2"
                >
                    <img width="14" src={delivery} alt="delivery" className="img-fluid" /> Delivery
                </Nav.Link>
                <Nav.Link
                    className=" border-right p-0 pl-2 pr-2"
                >
                    <img width="14" src={contact} alt="contact" className="img-fluid" />  Contact us
                </Nav.Link>
                <Nav.Link
                    className="p-0 pl-2"
                >
                    <img width="14" src={help} alt="help" className="img-fluid" />  Help & support
                </Nav.Link>
            </Nav>
            <nav className="inline-block d-web ml-auto">
                <Nav.Link
                    className="text-light p-1"
                >
                    <img width="14" src={web} alt="web" className="img-fluid" />  English
                    <img width="10" src={down} alt="down" className="img-fluid ml-2" />
                </Nav.Link>
            </nav>
        </Navbar>

    )
}