import React from 'react';

// styles icons and images
import Slider from "react-slick";
import logo1 from '../../images/logos/logo-small.png';
import logo2 from '../../images/logos/allevatorisammarinesi.png';
import logo3 from '../../images/logos/Farm-Pick.png';
import logo4 from '../../images/logos/green.png';
import logo5 from '../../images/logos/farm-food.png';
import logo6 from '../../images/logos/Faragello.png';
import go from '../../images/icons/go.svg';



const Collaborator = (props) => (
    <div className="border text-center p-2 pr-2 pl-2 mr-2 ml-2 ">
        <figure className="text-webkit-center border-bottom pb-2">
            <img  src={props.img} alt="green farm" className="img-fluid"/>
        </figure>
        <article>
            <h6 className="text-uppercase">{props.title}</h6>
            <p className="text-grey">{props.discription}</p>
        </article>
    </div>
)

export default function Collaborators(){
    let settings = {
        dots: false,
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: false,
        speed: 500,
        pauseOnHover: true,
        autoplaySpeed: 2000,
        initialSlide: 0,
        swipeToSlide: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return(
        <main id="collaborators" className="bg-white pt-5 pb-5 mb-5">
            <div className="container pt-5">
                <section className="row mb-5 align-items-end">
                    <article className="col-md-8 text-left">
                        <p className="text-grey mb-1">Collaborators</p>
                        <h2 className="text-dark"><span className="text-blue">What</span> we have</h2>
                    </article>
                    <article className="col-md-4 text-right">
                        <a href="#">
                            <h5 className="d-inline-block mr-3">See all</h5>
                            <img src={go} alt="arrow" className="img-fluid"/>
                        </a>
                    </article>
                </section>
                <Slider {...settings}>
                    <Collaborator img={logo1} title="Altenwerth - Dare" discription="lower ladysden"/>
                    <Collaborator img={logo2} title="Hammes - Brekke" discription="Sleek Rubber"/>
                    <Collaborator img={logo3} title="Farm pick" discription="Fruit export"/>
                    <Collaborator img={logo4} title="Green farm" discription="Intelligent"/>
                    <Collaborator img={logo5} title="Farm food" discription="Practical"/>
                    <Collaborator img={logo6} title="Faragello" discription="Food industries"/>
                </Slider>
            </div>
        </main>
    )
}