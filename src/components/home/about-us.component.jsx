import React from 'react';
import google from '../../images/google.png';
import apple from '../../images/apple.png';


export default function WhoWeAre(){
    return(
        <main id="about" className="bg-white pt-5 pb-5">
            <div className="container pt-5">
                <section className="row">
                    <article className="col-md-3 text-left">
                        <p className="text-grey mb-1">About us</p>
                        <h2 className="text-dark"><span className="text-blue">Who</span> we are</h2>
                    </article>
                    <article className="text-grey col-md-9 text-left mt-4">
                        <p>
                            Edallal is online platform to be a marketplace for Fruits and Vegetables,
                            the platform will connect Hyper Markets/Retailers with Farms.
                            Retailers will get the opportunity to purchase fruits and vegetables
                            directly from Farms at competitive prices, cutting out the middle man.
                        </p>
                        <p>It’s also availble for android and ios</p>
                        <form className="w-100 ">
                            <button style={{width : "143px"}} className="border-0  d-inline-block bg-transparent"> 
                                <img className="img-fluid" src={google} alt="google play"/> </button>
                            <button style={{width : "143px"}} className="border-0  d-inline-block bg-transparent"> 
                                <img className="img-fluid" src={apple} alt="google play"/>
                            </button>
                        </form>
                    </article>
                </section>
            </div>
        </main>
    )
}