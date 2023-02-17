import image from '../assets/Rectangle 10.png';
import project from '../assets/Rectangle 12.png'
import { Header } from './Header';

export const Image = ({ type }) => {
    return (
        <div className=''>
            {
                 type === 1 && 
            <div className=''>
                <img src={image} className='w-[374px] lg:w-[608px] h-[320px] lg:h-[414px] box-shadow rounded-lg bg-blue-200 ' alt="" />
            </div>
            }
            {
                type === 2 && 
            <div className='w-[270px] h-[300px] bg-black mb-20 rounded-lg relative'>
                <img src={project} alt="" className='w-full h-[300px] rounded-lg' />
                <div className='w-full h-[160px] bg-white absolute bottom-0 rounded-b-lg hover:h-[80px text-center'>
                    {/*  <header className="text-center p-2">
                <h4 className='font-bold mb-1'>{text}</h4>
                <p className='mb-1'>{content}</p>
                <Button text={'More Info'} className={'block m-auto'} />
            </header> */}
                    <Header type={2} text={'Name of project'} content={'Morem ipsum dolor sit amet, consectetur adipiscing elit.'} />
                </div>
            </div>
            }
        </div>
    )
}