import React from 'react'
import MyHeader from '../MyHeader/MyHeader'
import './Projects.css'
import Slider from "react-slick";
import party1 from '../../Assets/party/party1.jpeg'
import party2 from '../../Assets/party/party2.jpeg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Projects() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 0.5,
        slidesToShow: 1,
        slidesToScroll: 1
    };

  return (
    <div className='projects'>
        <div className="project-margin">

            {/* past gigs header */}
            <MyHeader name="Past gigs"/>

            <div className="gig-carousel">
                <Slider {...settings}>
                    <img src={party1} alt=" a party" />
                    <img src={party2} alt="a party" />
                </Slider>
            </div>
            {/* party carousel */}

            <MyHeader name="future gigs" /> 

            {/* party carousel */}


        </div>    
    </div>
  )
}

export default Projects