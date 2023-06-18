import image from '../assets/Rectangle 10.png';
import image1 from '../assets/Rectangle 12 (1).png';
import image2 from '../assets/Rectangle 12 (2).png';
import project from '../assets/Rectangle 12.png';
import team from '../assets/unsplash_iEEBWgY_6lA.png';
import { Header } from './Header';

export const Image = ({ type, text, content }) => {
    return (
        <div>
            {
                type === 1 &&
                <div className='p-2 lg:p-5'>
                    <img src={image} className='w-full lg:w-[608px] h-[320px] lg:h-[414px] box-shadow rounded-lg bg-[#45CD45]' alt="" />
                </div>
            }
            {
                type === 2 &&
                <div className='p-2 lg:p-5'>
                    <img src={image1} className='w-full lg:w-[608px] h-[320px] lg:h-[414px] box-shadow2 rounded-lg bg-[#45CD45]' alt="" />
                </div>
            }
            {
                type === 3 &&
                <div className='p-2 lg:p-5'>
                    <img src={image2} className='w-full lg:w-[608px] h-[320px] lg:h-[414px] box-shadow3 rounded-lg bg-[#45CD45]' alt="" />
                </div>
            }
            
            {
                type === 5 &&
                <div className='w-[300px] lg:w-[360px] h-[416px] lg:h-[480px] mb-3 rounded-lg p-[3px] bg-white'>
                    <div className='h-[330px] lg:h-[380px]'>
                        <img src={team} alt="" className='w-full h-full rounded-lg' />
                    </div>
                    <div className='w-full rounded-b-lg p-3'>
                        <h4 className='font-bold mb-1'>{text}</h4>
                        <p className='mb-1'>{content}</p>
                    </div>
                </div>
            }
        </div>
    )
}

export const ProjectsCarousels = ({ type }) => {
    return (
       <div className='px-[70px] md:px-[70px] lg:px-[50px]'>
         {
            type === 4 &&
            <div className='w-[260px] h-[300px] bg-black mb-20 rounded-lg relative'>
                <img src={project} alt="" className='w-full h-[300px] rounded-lg' />
                <div className='w-full h-[160px] bg-white absolute bottom-0 rounded-b-lg hover:h-[80px text-center'>
                    <Header type={2} text={'Name of project'} content={'Morem ipsum dolor sit amet, consectetur adipiscing elit.'} />
                </div>
            </div>
        }
       </div>
    )
}