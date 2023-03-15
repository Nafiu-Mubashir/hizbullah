import { Button } from "./Button";


export const Carousel = () => {
    return (

        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
            <Carousel>
                <div>
                    <div className="lg:w-full h-[180px] lg:h-[380px] first bg-center bg-no-repeat bg-cover rounded-tl-[25px] rounded-br-[25px] rounded-tr-lg rounded-bl-lg">
                        <div className="bg bg-center bg-no-repeat bg-cover h-full w-auto lg:w-[707px] rounded-tl-[25px] rounded-br-[25px] rounded-bl-lg p-5">
                            <header className="text-center p-2">
                                <h4 className='font-bold text-[18px] lg:text-[32px] text-white mb-1'>Hitting the 100k landmark</h4>
                                <div className="lg:w-[396px] m-auto">
                                    <p className='text-center lg:text-justify text-[9px] lg:text-[16px] text-white mb-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. </p>
                                </div>
                                <Button text={'Read More'} className={'block m-auto'} />
                            </header>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="lg:w-full h-[180px] lg:h-[380px] first bg-center bg-no-repeat bg-cover rounded-tl-[25px] rounded-br-[25px] rounded-tr-lg rounded-bl-lg">
                        <div className="bg bg-center bg-no-repeat bg-cover h-full w-auto lg:w-[707px] rounded-tl-[25px] rounded-br-[25px] rounded-bl-lg p-5">
                            <header className="text-center p-2">
                                <h4 className='font-bold text-[18px] lg:text-[32px] text-white mb-1'>Hitting the 100k landmark</h4>
                                <div className="lg:w-[396px] m-auto">
                                    <p className='text-center lg:text-justify text-[9px] lg:text-[16px] text-white mb-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. </p>
                                </div>
                                <Button text={'Read More'} className={'block m-auto'} />
                            </header>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="lg:w-full h-[180px] lg:h-[380px] first bg-center bg-no-repeat bg-cover rounded-tl-[25px] rounded-br-[25px] rounded-tr-lg rounded-bl-lg">
                        <div className="bg bg-center bg-no-repeat bg-cover h-full w-auto lg:w-[707px] rounded-tl-[25px] rounded-br-[25px] rounded-bl-lg p-5">
                            <header className="text-center p-2">
                                <h4 className='font-bold text-[18px] lg:text-[32px] text-white mb-1'>Hitting the 100k landmark</h4>
                                <div className="lg:w-[396px] m-auto">
                                    <p className='text-center lg:text-justify text-[9px] lg:text-[16px] text-white mb-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. </p>
                                </div>
                                <Button text={'Read More'} className={'block m-auto'} />
                            </header>
                        </div>
                    </div>
                </div>
            </Carousel>
        </div>
    )
}