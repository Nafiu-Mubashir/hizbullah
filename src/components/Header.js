import { Button } from "./Button"

export const Header = ({ type, text, content, className }) => {
    return (
        <div className=''>
            {
                 type === 1 && 
            <header className={`'text-[16px] lg:text-[48px] font-bold text-[700]'`}>
                <h4 className={`${className} "text-center lg:text-left"`}>{text}</h4>
            </header>
            }
            {
                type === 2 && 
            <header className="text-center p-2">
                <h4 className='font-bold mb-1'>{text}</h4>
                <p className='mb-1'>{content}</p>
                <Button text={'More Info'} className={'block m-auto'} />
            </header>
            }
        </div>
    )
}