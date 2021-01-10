import React from 'react';

// styles icons and images
import slide from '../../images/artwork/lap.png'
import google from '../../images/google.png';
import apple from '../../images/apple.png';


export default function WhoWeAre(){
    return(
        <main className="bg-fruts pb-5 p-relative" style={{paddingTop : '6rem'}}>
            <div className="container text-white ">
                <section className="row align-items-center">
                    <article className="col-xl-5 col-md-8 text-left">
                        <h2 className="mb-3">Enjoy your direct deals now</h2>
                        <p className="mb-5 h-6">
                            With Edallal you can now easily view your supplies varies prices
                            across all our collaborators farms and make your own deals
                        </p>
                        <p>Our application is now available on android & ios</p>
                    </article>
                    <form className="col-md-12 ">
                            <button  style={{width : "143px"}}  className="border-0  text-left  d-inline-block bg-transparent">
                                 <img className="img-fluid" src={google} alt="google play"/>
                            </button>
                            <button  style={{width : "143px"}}  className="border-0 text-left  d-inline-block bg-transparent"> 
                                <img className="img-fluid" src={apple} alt="google play"/> 
                            </button>
                    </form>
                    <figure className="col-xl-5 col-md-3  d-web text-right  p-0 p-absolute" style={{top : '-70px' , right : '0'}}>
                        <img src={slide} className="img-fluid" alt="lap"/>
                    </figure>
                </section>
            </div>
        </main>
    )
}