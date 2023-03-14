import { Carousel } from "flowbite-react"
import { Button } from "./Button"

export const Carousels = () => {
    const carouselIndicator = {
        //that indicate
        root: {
            indicators: {
                active: {
                    on: '#45CD45',
                    off: '#61c961'
                }
            }
        }
    }
    return (
        <div>
            <div className="h-[180px] lg:h-[380px] mb-4">
                <Carousel
                    indicators='true'
                    leftControl=<p className="text-brown-400"></p>
                    rightControl=<p className="text-brown-400"></p>
                    className='carousel rounded-tl-[25px] rounded-br-[25px] rounded-tr-lg rounded-bl-lg indicator'
                    theme={carouselIndicator}
                >
                    <div>
                        <div className="lg:w-full h-[180px] lg:h-[380px] first bg-center bg-no-repeat bg-cover rounded-tl-[25px] rounded-br-[25px] rounded-tr-lg rounded-bl-lg">
                            <div className="bg bg-center bg-no-repeat bg-cover h-full w-auto lg:w-[707px] rounded-tl-[25px] rounded-br-[25px] rounded-bl-lg p-5">
                                <header className="p-2">
                                    <h4 className='font-bold lg:mx-[55px] text-[18px] lg:text-[32px] text-white mb-1'>Hitting the 100k landmark</h4>
                                    <div className="lg:w-[396px] lg:mx-[55px]">
                                        <p className='text-center lg:text-justify text-[9px] lg:text-[16px] text-white mb-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. </p>
                                    </div>
                                    <Button text={'Read More'} className={'block lg:mx-[200px]'} />
                                </header>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="lg:w-full h-[180px] lg:h-[380px] second bg-center bg-no-repeat bg-cover rounded-tl-[25px] rounded-br-[25px] rounded-tr-lg rounded-bl-lg">
                            <div className="bg bg-center bg-no-repeat bg-cover h-full w-auto lg:w-[707px] rounded-tl-[25px] rounded-br-[25px] rounded-bl-lg p-5">
                                <header className="p-2">
                                    <h4 className='font-bold lg:mx-[55px] text-[18px] lg:text-[32px] text-white mb-1'>Hitting the 100k landmark</h4>
                                    <div className="lg:w-[396px] lg:mx-[55px]">
                                        <p className='text-center lg:text-justify text-[9px] lg:text-[16px] text-white mb-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. </p>
                                    </div>
                                    <Button text={'Read More'} className={'block lg:mx-[200px]'} />
                                </header>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="lg:w-full h-[180px] lg:h-[380px] third bg-center bg-no-repeat bg-cover rounded-tl-[25px] rounded-br-[25px] rounded-tr-lg rounded-bl-lg">
                            <div className="bg bg-center bg-no-repeat bg-cover h-full w-auto lg:w-[707px] rounded-tl-[25px] rounded-br-[25px] rounded-bl-lg p-5">
                                <header className=" p-2">
                                    <h4 className='font-bold lg:mx-[55px] text-[18px] lg:text-[32px] text-white mb-1'>Hitting the 100k landmark</h4>
                                    <div className="lg:w-[396px] lg:mx-[55px]">
                                        <p className='text-center lg:text-justify text-[9px] lg:text-[16px] text-white mb-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. </p>
                                    </div>
                                    <Button text={'Read More'} className={'block lg:mx-[200px]'} />
                                </header>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="lg:w-full h-[180px] lg:h-[380px] fourth bg-center bg-no-repeat bg-cover rounded-tl-[25px] rounded-br-[25px] rounded-tr-lg rounded-bl-lg">
                            <div className="bg bg-center bg-no-repeat bg-cover h-full w-auto lg:w-[707px] rounded-tl-[25px] rounded-br-[25px] rounded-bl-lg p-5">
                                <header className=" p-2">
                                    <h4 className='font-bold lg:mx-[55px] text-[18px] lg:text-[32px] text-white mb-1'>Hitting the 100k landmark</h4>
                                    <div className="lg:w-[396px] lg:mx-[55px]">
                                        <p className='text-center lg:text-justify text-[9px] lg:text-[16px] text-white mb-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. </p>
                                    </div>
                                    <Button text={'Read More'} className={'block lg:mx-[200px]'} />
                                </header>
                            </div>
                        </div>
                    </div>
                </Carousel>
            </div>
        </div>
    )
}