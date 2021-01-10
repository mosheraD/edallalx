import React from 'react';
// styles images and icons
import slide from '../../images/artwork/service-img.svg';
import check from '../../images/icons/check.svg';


export default function Services(){
    const ListItem = (props) => (
        <article className="row m-0">
            <figure className="col-1 p-0 text-left" style={{fontSize : "bold"}}>
                <img width="16" height="16" src={check} alt="check"/>
            </figure>
            <p 
                className="col-10 p-0 text-left text-capitalize" 
                style={{fontWeight : props.check? "bold" : "normal"}}>
                    {props.title}
            </p>

        </article>
    )
    return(
        <main id="services" className="bg-lightgrey pt-5 pb-3">
            <div className="container">
                <section className="row altig-items-top">
                    <article className="col-md-6 text-left pt-3">
                        <p className="text-grey mb-1">Services</p>
                        <h2 className="text-dark text-capitalize mb-3"><span className="text-blue">what </span>we are provide</h2>
                        <ListItem  title="A daily view for the average prices for each product shown on the application."/>
                        <ListItem  title="Farms can sell products through either fixed price or auction forms"/>
                        <ListItem  title="Farms and Retailers will be able to rate each‐other after each successful purchase"/>
                        <ListItem  title="Delivery option will be available upon the Retailers requests."/>

                    </article>
                    <figure className="text-grey col-md-6 text-left">
                        <img src={slide} className="img-fluid" alt="srvices"/>
                    </figure>
                </section>
            </div>
        </main>
    )
}