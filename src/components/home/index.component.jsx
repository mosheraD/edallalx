import React from 'react';

import Nav from './nav.component';
import Header from './header.component';
import AboutUs from './about-us.component';
import Service from './services.component';
import Collaborators from './collaborators.component';
import Enjoy from "./enjoy.component";
import ContactUs from './contact-us.component';
import Footer from './footer.component';

import './home.style.css';

export default function Home() {
    return (
        <>
            <Nav />
            <Header />
            <AboutUs />
            <Service />
            <Collaborators />
            <Enjoy />
            <ContactUs />
            <Footer />
        </>
    )
}