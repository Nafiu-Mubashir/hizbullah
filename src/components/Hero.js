import { Header } from '../components/Header';
import { Button } from './Button';
import deskImage from '../assets/Header picture.png';
import mobileImage from '../assets/Header picture size for mobile.png'

export const Hero = () => {
    return (
        <div className='flex flex-col lg:flex-row justify-between items-center w-full'>
            <div className='lg:mt-[100px] mb-3 p-5'>
                <div className='mb-2'>
                <Header type={1} className={'text-center text-white lg:text-center w-[80%] m-auto'} text={'Building Strong Foundations, Creating Better Tomorrows'} />
                <svg className='block m-auto w-[110px] lg:w-[275px] lg:h-[28px]' widt="275" heigh="28" viewBox="0 0 275 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 25C62 -4.00001 207.4 -3.80002 273 25" stroke="#45CD45" stroke-width="5" />
                </svg>
                </div>
                <p className='mb-2 text-white lg:w-[px] text-center'>Dorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Dorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <Button text={'Get Started'} className={'block m-auto lg:m-auto'} />
            </div>

            {/* <div className='lg:w-[50%] mb-3 p-5 mx-auto'>
                <img src={deskImage} alt="" className='hidden lg:block w-[519px] ml-auto' />
                <img src={mobileImage} alt="" className='block lg:hidden w-[358px]' />
            </div> */}

        </div>
    )
}