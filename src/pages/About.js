import React from 'react'
import { Button } from '../components/Button'
import { Header } from '../components/Header'
import { Image } from '../components/ImageContainer'
import Projects from '../components/Projects';
import contact from '../assets/Rectangle 27.png';
import question from '../assets/Rectangle 28.png';
import partnerIcon from "../assets/partner.png"

const About = () => {
  return (
    <div className='mt-12'>
      <div className='about h-[160px] w-full lg:h-[220px] bg-cover bg-center bg-no-repeat flex justify-center items-center'>
        <Header type={1} text={'About Us'} className={'text-white text-center'} />
      </div>
      <section>
        <div className='lg:w-[90%] p-2 m-auto'>
          <div>
            <Header type={1} text={'Welcome Speach'} className={'text-[32px] lg:text-[40px] text-center mb-3'} />
            <p className='mb-4'>
              Morem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.

            </p>
          </div>
          <div>
            <Header type={1} text={'Our History'} className={'text-[32px] lg:text-[40px] text-center mb-3'} />
            <div className='flex justify-between flex-col-reverse lg:flex-row'>
              <div className='w-full lg:w-[50%] p-2 mb-3 lg:p-5'>
                {/* <Header type={1} text={'We always deliver the best at Hizbullah'} className={'text-center lg:text-left'} /> */}
                <p className='mb-4 text-justify'>
                  Al-Kawthar Foundation is an Islamic socio-cultural organization established by the Hizbullah Movement of Nigeria to serve as an organization that will implement several programs and projects of the movement varying from educational, health, worship centers(Masjid), economic empowerment, and social welfare for Muslims. <br /><br />

                  It was established in 1994 to supervise the construction of different institutions that assist in the implementation of the movement programs
                </p>
                {/* <Button text={'Discover more'} className={'m-auto lg:m-0'} /> */}
              </div>
              <div className='w-full lg:w-[50%] p-2 mb-3 lg:p-5'>
                <Image type={2} />
              </div>
            </div>
          </div>
          {/* </div>
            </section>
            <section>
                <div className='lg:w-[90%] p-2 m-auto'> */}
          <Header type={1} text={'Our Mission'} className={'text-[32px] lg:text-[40px] text-center mb-3'} />
          <div className='flex justify-between flex-col lg:flex-row'>
            <div className='w-full lg:w-[50%] p-2 mb-3 lg:p-5'>
              <Image type={3} />
            </div>
            <div className='w-full lg:w-[50%] p-2 mb-3 lg:p-5'>
              <Header type={1} text={'We always deliver the best at Hizbullah'} />
              <p className='mb-4'>
                Morem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.

              </p>
              <Button text={'Discover more'} className={'m-auto lg:m-0'} />
            </div>
          </div>
        </div>
      </section>
      <section className='bg-gray-100'>
        <div className='lg:w-[90%] p-2 m-auto'>
          <Header type={1} text={'What we do'} className={'text-[32px] lg:text-[40px] text-center'} />
          <p className='text-center mb-5'>Take a look at some of our projects we have done across the country, while some are still ongoing</p>
          <Projects />
        </div>
      </section>
      <section className='bg-green-100 p-4'>
        <div className='lg:w-[90%] p-2 m-auto'>
          <Header type={1} text={'Board Members'} className={'text-center mb-3'} />
          <div className='flex justify-center flex-col lg:flex-row gap-4 p-5 lg:p-2  '>
            <Image
              type={5}
              text={'Name'}
              content={'Amir'}
            />
            <Image
              type={5}
              text={'Name'}
              content={'Naibul Amir'}
            />
            <Image
              type={5}
              text={'Name'}
              content={'Imam'}
            />
          </div>
          <Button text={'Join Our Team'} className={'mx-auto'} />
        </div>
      </section>
      <section>
        <div className='lg:w-[90%] p-2 m-auto'>
          <Header type={1} text={'Our Partners'} className={'text-center mb-3'} />
          <div className='lg:ml-20 p-3 flex justify-evenly flex-wrap'>
            <img src={partnerIcon} alt="" />
            <img src={partnerIcon} alt="" />
            <img src={partnerIcon} alt="" />
            <img src={partnerIcon} alt="" />
            <img src={partnerIcon} alt="" />
            <img src={partnerIcon} alt="" />
          </div>
          <div className='lg:mr-20 p-3 flex justify-evenly lg:justify-between flex-wrap'>
            <img src={partnerIcon} alt="" />
            <img src={partnerIcon} alt="" />
            <img src={partnerIcon} alt="" />
            <img src={partnerIcon} alt="" />
            <img src={partnerIcon} alt="" />
            <img src={partnerIcon} alt="" />
          </div>

        </div>
      </section>
      <section>
        <div className='lg:w-[90%] p-2 m-auto'>
          <Header type={1} text={'Get in Touch'} className={'text-center mb-3'} />
          <div className="flex justify-between gap-10 lg:gap-0 flex-col lg:flex-row p-3">
            <div className='flex items-center flex-col lg:flex-row gap-6 lg:w-[50%]'>
              <img src={contact} alt="" />
              <a href="/" className='text-[32px] font-bold underline'>Contact Us</a>
            </div>
            <div className='flex items-center flex-col lg:flex-row gap-6 lg:w-[50%]'>
              <img src={question} alt="" />
              <a href="/" className='text-[32px] font-bold underline'>Frequently Asked Questions</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About