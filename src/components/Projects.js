import React from 'react'
import { Slide } from "react-slideshow-image"
import { ProjectsCarousels } from '../components/ImageContainer';
import 'react-slideshow-image/dist/styles.css'

const Projects = () => {

    
    const properties = {
        duration: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        indicators: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

  return (
    <div>
        <div className="lg:p-[20px]">
                <Slide {...properties} >
                    <ProjectsCarousels type={4} />
                    <ProjectsCarousels type={4} />
                    <ProjectsCarousels type={4} />
                    <ProjectsCarousels type={4} />
                    <ProjectsCarousels type={4} />
                    <ProjectsCarousels type={4} />
                    <ProjectsCarousels type={4} />
                    <ProjectsCarousels type={4} />
                    <ProjectsCarousels type={4} />
                    <ProjectsCarousels type={4} />
                    <ProjectsCarousels type={4} />
                    <ProjectsCarousels type={4} />
                </Slide>
            </div>
    </div>
  )
}

export default Projects