import React from 'react'
import MyHeader from '../MyHeader/MyHeader'
import './Projects.css'
import Slider from "react-slick";
import party1 from '../../Assets/party/party1.jpeg'
import party2 from '../../Assets/party/party2.jpeg'
import party3 from '../../Assets/party/party3.jpeg'
import party4 from '../../Assets/party/party4.jpeg'
import party5 from '../../Assets/party/party5.jpeg'
import party6 from '../../Assets/party/party6.jpeg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Projects() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 0.5,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    };

  return (
    <div className='projects'>
        <div className="project-margin">

            {/* past gigs header */}
            <MyHeader name="Past gigs"/>

            {/* party carousel */}

            <div className="gig-carousel">
                <Slider {...settings}>
                    <img src={party1} alt=" a party" />
                    <img src={party2} alt="a party" />
                </Slider>
            </div>

            <MyHeader name="future gigs" /> 

            {/* party carousel */}

            <div className="gig-carousel">
                <Slider {...settings}>
                    <img src={party3} alt=" a party" />
                    <img src={party4} alt="a party" />
                    <img src={party5} alt="a party" />
                    <img src={party6} alt="a party" />
                </Slider>
            </div>

        </div>    
    </div>
  )
}

export default Projects