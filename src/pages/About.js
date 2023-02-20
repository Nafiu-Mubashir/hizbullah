import React from 'react'
import { Button } from '../components/Button'
import { Header } from '../components/Header'
import { Image } from '../components/ImageContainer'

const About = () => {
  return (
    <div>
      <div className='about h-[160px] w-full lg:h-[220px] bg-cover bg-center bg-no-repeat flex justify-center items-center'>
        <Header type={1} text={'About Us'} className={'text-white text-center'} />
      </div>
      <section>
        <div className='lg:w-[90%] p-2 m-auto'>
          <Header type={1} text={'Our Mission'} className={'text-[32px] lg:text-[40px] text-center mb-3'} />
          <div className='flex justify-between flex-col lg:flex-row'>
            <div className='w-full lg:w-[50%] p-2 mb-3 lg:p-5'>
              <Header type={1} text={'We always deliver the best at Hizbullah'} className={'text-center lg:text-left'} />
              <p className='mb-4'>
                Morem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.

              </p>
              <Button text={'Discover more'} className={'m-auto lg:m-0'} />
            </div>
            <div className='w-full lg:w-[50%] p-2 mb-3 lg:p-5'>
              <Image type={2} />
            </div>
          </div>
          {/* </div>
            </section>
            <section>
                <div className='lg:w-[90%] p-2 m-auto'> */}
          <Header type={1} text={'Our Story'} className={'text-[32px] lg:text-[40px] text-center mb-3'} />
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
      <section className='bg-green-100 p-4'>
        <div className='lg:w-[90%] p-2 m-auto'>
          <Header type={1} text={'Meet the Team'} className={'text-center mb-3'} />
          <div className='flex flex-wrap justifty-evenly gap-3 w-[80%] mx-auto'>
          <Image
            type={5}
            text={'Name'}
            content={'Portfolio'}
          /><Image
            type={5}
            text={'Name'}
            content={'Portfolio'}
          /><Image
            type={5}
            text={'Name'}
            content={'Portfolio'}
          /><Image
            type={5}
            text={'Name'}
            content={'Portfolio'}
          /><Image
            type={5}
            text={'Name'}
            content={'Portfolio'}
          />
          </div>
          <Button text={'Join Our Team'} className={'mx-auto'} />
        </div>
      </section>
    </div>
  )
}

export default About