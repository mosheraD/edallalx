import React from 'react';
// styles images and icons
import slide from '../../images/artwork/contact-us.svg';
import thanks from '../../images/icons/thankful.svg';



export default function ContactUs(){

    return(
        <main id="contact" className="bg-lightgrey pt-5">
            <div className="container">
                <section className="row align-items-center ">
                    <article className="col-md-5 text-left pt-3">
                        <p className="text-grey mb-1">Contact Us</p>
                        <h2 className="text-dark text-capitalize mb-4 ">
                            <span className="text-blue">Thanks </span>
                            for your trust with eDallal
                            <img src={thanks} alt="thankful" className="img-fluid ml-2"/>
                        </h2>
                          
                        <figure className="mb-0 d-web">
                            <img src={slide} className="img-fluid" alt="srvices"/>
                        </figure>
                    </article>
                    <form className="col-md-7 w-100 pt-5">
                        <div className="form-group d-inline-block col-6">
                            <label for="exampleInputName" className="text-blue">Name</label>
                            <input required type="text" className="form-control" id="inputName" placeholder="Enter Your Name" />
                        </div>
                        <div className="form-group d-inline-block col-6">
                            <label for="exampleInputEmail" className="text-blue">Email</label>
                            <input required type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="Enter Your Email Address" />
                        </div>
                        <div className="form-group col-12 mb-4">
                            <label for="exampleFormControlTextarea1" className="text-blue">Message</label>
                            <textarea required className="form-control" id="inputMessage" rows="3" placeholder="Write Your Message"></textarea>
                        </div>
                        <div className="col-12"><p className="message text-blue"></p></div>
                        <div className="col-12 mb-4">
                            <button type="submit" className="btn-blue text-white w-100">Send Message</button>
                        </div>
                    </form>
                </section>
            </div>
        </main>
    )
}