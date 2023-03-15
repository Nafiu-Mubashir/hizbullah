import { Carousel } from "flowbite-react"
import { Button } from "./Button"
import testimony from '../assets/Ellipse 9.png'

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
                    leftControl=<p className=""></p>
                    rightControl=<p className=""></p>
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

export const TestimoniesCaroulsel = () => {
    return (
        <div className="h-[300px] p-3 lg:h-[380px] mb-4">
            <Carousel
                indicators='false'
            >
                <div className="lg:w-[50%] m-auto">
                    <svg width="43" height="28" viewBox="0 0 43 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M43 18.8871C43 20.0751 42.7244 21.1738 42.1731 22.1835C41.6907 23.1932 41.0016 24.0841 40.1058 24.8562C39.2099 25.569 38.1418 26.1628 36.9014 26.6381C35.73 27.0538 34.4896 27.2617 33.1803 27.2617C31.8021 27.2617 30.5272 27.0538 29.3558 26.6381C28.1843 26.1628 27.1506 25.569 26.2548 24.8562C25.359 24.0841 24.6354 23.1932 24.0841 22.1835C23.6018 21.1738 23.3606 20.0751 23.3606 18.8871V8.01814C23.3606 5.76118 24.222 3.86058 25.9447 2.31636C27.7364 0.772118 29.9415 0 32.5601 0L39.1755 0V6.94905H34.2139C32.3534 6.94905 31.4231 7.83996 31.4231 9.62175V10.6908C31.6987 10.5721 32.0088 10.5127 32.3534 10.5127C32.6979 10.4533 33.0425 10.4236 33.387 10.4236C36.2812 10.4236 38.5897 11.2254 40.3125 12.829C42.1042 14.3733 43 16.3926 43 18.8871ZM19.6394 18.8871C19.6394 20.0751 19.3638 21.1738 18.8125 22.1835C18.3301 23.1932 17.641 24.0841 16.7452 24.8562C15.8494 25.569 14.7812 26.1628 13.5409 26.6381C12.3694 27.0538 11.129 27.2617 9.81971 27.2617C8.44151 27.2617 7.16667 27.0538 5.99519 26.6381C4.82372 26.1628 3.79006 25.569 2.89423 24.8562C1.9984 24.0841 1.27484 23.1932 0.723558 22.1835C0.241186 21.1738 0 20.0751 0 18.8871L0 8.01814C0 5.76118 0.861378 3.86058 2.58413 2.31636C4.3758 0.772118 6.58093 0 9.19952 0L15.8149 0V6.94905H10.8534C8.99279 6.94905 8.0625 7.83996 8.0625 9.62175V10.6908C8.33814 10.5721 8.64824 10.5127 8.99279 10.5127C9.33734 10.4533 9.68189 10.4236 10.0264 10.4236C12.9207 10.4236 15.2292 11.2254 16.9519 12.829C18.7436 14.3733 19.6394 16.3926 19.6394 18.8871Z" fill="#45CD45" />
                    </svg>
                    <p className="p-4 px-5">
                        Borem ipsum dolor sit amet, consectetur adipiscing elit. Borem ipsum dolor sit amet, consectetur adipiscing elit.

                    </p>

                    <svg className="block ml-auto" width="43" height="28" viewBox="0 0 43 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 8.37458C0 7.18666 0.2756 6.08793 0.8269 5.07822C1.3093 4.06852 1.9984 3.17757 2.8942 2.40547C3.7901 1.69275 4.8582 1.09887 6.0986 0.623667C7.27 0.207926 8.5104 5.53131e-05 9.8197 5.53131e-05C11.1979 5.53131e-05 12.4728 0.207926 13.6442 0.623667C14.8157 1.09887 15.8494 1.69275 16.7452 2.40547C17.641 3.17757 18.3646 4.06852 18.9159 5.07822C19.3982 6.08793 19.6394 7.18666 19.6394 8.37458L19.6394 19.2436C19.6394 21.5005 18.778 23.4011 17.0553 24.9454C15.2636 26.4896 13.0585 27.2617 10.4399 27.2617H3.8245V20.3127H8.7861C10.6466 20.3127 11.5769 19.4218 11.5769 17.64V16.5709C11.3013 16.6896 10.9912 16.749 10.6466 16.749C10.3021 16.8084 9.9575 16.8381 9.613 16.8381C6.7188 16.8381 4.4103 16.0363 2.6875 14.4327C0.895802 12.8884 0 10.8691 0 8.37458ZM23.3606 8.37458C23.3606 7.18666 23.6362 6.08793 24.1875 5.07822C24.6699 4.06852 25.359 3.17757 26.2548 2.40547C27.1506 1.69275 28.2188 1.09887 29.4591 0.623667C30.6306 0.207926 31.871 5.53131e-05 33.1803 5.53131e-05C34.5585 5.53131e-05 35.8333 0.207926 37.0048 0.623667C38.1763 1.09887 39.2099 1.69275 40.1058 2.40547C41.0016 3.17757 41.7252 4.06852 42.2764 5.07822C42.7588 6.08793 43 7.18666 43 8.37458V19.2436C43 21.5005 42.1386 23.4011 40.4159 24.9454C38.6242 26.4896 36.4191 27.2617 33.8005 27.2617H27.1851V20.3127H32.1466C34.0072 20.3127 34.9375 19.4218 34.9375 17.64V16.5709C34.6619 16.6896 34.3518 16.749 34.0072 16.749C33.6627 16.8084 33.3181 16.8381 32.9736 16.8381C30.0793 16.8381 27.7708 16.0363 26.0481 14.4327C24.2564 12.8884 23.3606 10.8691 23.3606 8.37458Z" fill="#45CD45" />
                    </svg>
                    <div className="flex gap-4 lg:w-1/2 m-auto">
                        <img src={testimony} alt="" />
                        <div>
                            <h3 className="font-bold">Makinde Bashir</h3>
                            <p>CEO Hizbullah</p>
                        </div>
                    </div>

                </div>

                <div className="lg:w-[50%] m-auto">
                    <svg width="43" height="28" viewBox="0 0 43 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M43 18.8871C43 20.0751 42.7244 21.1738 42.1731 22.1835C41.6907 23.1932 41.0016 24.0841 40.1058 24.8562C39.2099 25.569 38.1418 26.1628 36.9014 26.6381C35.73 27.0538 34.4896 27.2617 33.1803 27.2617C31.8021 27.2617 30.5272 27.0538 29.3558 26.6381C28.1843 26.1628 27.1506 25.569 26.2548 24.8562C25.359 24.0841 24.6354 23.1932 24.0841 22.1835C23.6018 21.1738 23.3606 20.0751 23.3606 18.8871V8.01814C23.3606 5.76118 24.222 3.86058 25.9447 2.31636C27.7364 0.772118 29.9415 0 32.5601 0L39.1755 0V6.94905H34.2139C32.3534 6.94905 31.4231 7.83996 31.4231 9.62175V10.6908C31.6987 10.5721 32.0088 10.5127 32.3534 10.5127C32.6979 10.4533 33.0425 10.4236 33.387 10.4236C36.2812 10.4236 38.5897 11.2254 40.3125 12.829C42.1042 14.3733 43 16.3926 43 18.8871ZM19.6394 18.8871C19.6394 20.0751 19.3638 21.1738 18.8125 22.1835C18.3301 23.1932 17.641 24.0841 16.7452 24.8562C15.8494 25.569 14.7812 26.1628 13.5409 26.6381C12.3694 27.0538 11.129 27.2617 9.81971 27.2617C8.44151 27.2617 7.16667 27.0538 5.99519 26.6381C4.82372 26.1628 3.79006 25.569 2.89423 24.8562C1.9984 24.0841 1.27484 23.1932 0.723558 22.1835C0.241186 21.1738 0 20.0751 0 18.8871L0 8.01814C0 5.76118 0.861378 3.86058 2.58413 2.31636C4.3758 0.772118 6.58093 0 9.19952 0L15.8149 0V6.94905H10.8534C8.99279 6.94905 8.0625 7.83996 8.0625 9.62175V10.6908C8.33814 10.5721 8.64824 10.5127 8.99279 10.5127C9.33734 10.4533 9.68189 10.4236 10.0264 10.4236C12.9207 10.4236 15.2292 11.2254 16.9519 12.829C18.7436 14.3733 19.6394 16.3926 19.6394 18.8871Z" fill="#45CD45" />
                    </svg>
                    <p className="p-4 px-5">
                        Borem ipsum dolor sit amet, consectetur adipiscing elit. Borem ipsum dolor sit amet, consectetur adipiscing elit.

                    </p>

                    <svg className="block ml-auto" width="43" height="28" viewBox="0 0 43 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 8.37458C0 7.18666 0.2756 6.08793 0.8269 5.07822C1.3093 4.06852 1.9984 3.17757 2.8942 2.40547C3.7901 1.69275 4.8582 1.09887 6.0986 0.623667C7.27 0.207926 8.5104 5.53131e-05 9.8197 5.53131e-05C11.1979 5.53131e-05 12.4728 0.207926 13.6442 0.623667C14.8157 1.09887 15.8494 1.69275 16.7452 2.40547C17.641 3.17757 18.3646 4.06852 18.9159 5.07822C19.3982 6.08793 19.6394 7.18666 19.6394 8.37458L19.6394 19.2436C19.6394 21.5005 18.778 23.4011 17.0553 24.9454C15.2636 26.4896 13.0585 27.2617 10.4399 27.2617H3.8245V20.3127H8.7861C10.6466 20.3127 11.5769 19.4218 11.5769 17.64V16.5709C11.3013 16.6896 10.9912 16.749 10.6466 16.749C10.3021 16.8084 9.9575 16.8381 9.613 16.8381C6.7188 16.8381 4.4103 16.0363 2.6875 14.4327C0.895802 12.8884 0 10.8691 0 8.37458ZM23.3606 8.37458C23.3606 7.18666 23.6362 6.08793 24.1875 5.07822C24.6699 4.06852 25.359 3.17757 26.2548 2.40547C27.1506 1.69275 28.2188 1.09887 29.4591 0.623667C30.6306 0.207926 31.871 5.53131e-05 33.1803 5.53131e-05C34.5585 5.53131e-05 35.8333 0.207926 37.0048 0.623667C38.1763 1.09887 39.2099 1.69275 40.1058 2.40547C41.0016 3.17757 41.7252 4.06852 42.2764 5.07822C42.7588 6.08793 43 7.18666 43 8.37458V19.2436C43 21.5005 42.1386 23.4011 40.4159 24.9454C38.6242 26.4896 36.4191 27.2617 33.8005 27.2617H27.1851V20.3127H32.1466C34.0072 20.3127 34.9375 19.4218 34.9375 17.64V16.5709C34.6619 16.6896 34.3518 16.749 34.0072 16.749C33.6627 16.8084 33.3181 16.8381 32.9736 16.8381C30.0793 16.8381 27.7708 16.0363 26.0481 14.4327C24.2564 12.8884 23.3606 10.8691 23.3606 8.37458Z" fill="#45CD45" />
                    </svg>
                    <div className="flex gap-4 lg:w-1/2 m-auto">
                        <img src={testimony} alt="" />
                        <div>
                            <h3 className="font-bold">Makinde Bashir</h3>
                            <p>CEO Hizbullah</p>
                        </div>
                    </div>

                </div>

                <div className="lg:w-[50%] m-auto">
                    <svg width="43" height="28" viewBox="0 0 43 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M43 18.8871C43 20.0751 42.7244 21.1738 42.1731 22.1835C41.6907 23.1932 41.0016 24.0841 40.1058 24.8562C39.2099 25.569 38.1418 26.1628 36.9014 26.6381C35.73 27.0538 34.4896 27.2617 33.1803 27.2617C31.8021 27.2617 30.5272 27.0538 29.3558 26.6381C28.1843 26.1628 27.1506 25.569 26.2548 24.8562C25.359 24.0841 24.6354 23.1932 24.0841 22.1835C23.6018 21.1738 23.3606 20.0751 23.3606 18.8871V8.01814C23.3606 5.76118 24.222 3.86058 25.9447 2.31636C27.7364 0.772118 29.9415 0 32.5601 0L39.1755 0V6.94905H34.2139C32.3534 6.94905 31.4231 7.83996 31.4231 9.62175V10.6908C31.6987 10.5721 32.0088 10.5127 32.3534 10.5127C32.6979 10.4533 33.0425 10.4236 33.387 10.4236C36.2812 10.4236 38.5897 11.2254 40.3125 12.829C42.1042 14.3733 43 16.3926 43 18.8871ZM19.6394 18.8871C19.6394 20.0751 19.3638 21.1738 18.8125 22.1835C18.3301 23.1932 17.641 24.0841 16.7452 24.8562C15.8494 25.569 14.7812 26.1628 13.5409 26.6381C12.3694 27.0538 11.129 27.2617 9.81971 27.2617C8.44151 27.2617 7.16667 27.0538 5.99519 26.6381C4.82372 26.1628 3.79006 25.569 2.89423 24.8562C1.9984 24.0841 1.27484 23.1932 0.723558 22.1835C0.241186 21.1738 0 20.0751 0 18.8871L0 8.01814C0 5.76118 0.861378 3.86058 2.58413 2.31636C4.3758 0.772118 6.58093 0 9.19952 0L15.8149 0V6.94905H10.8534C8.99279 6.94905 8.0625 7.83996 8.0625 9.62175V10.6908C8.33814 10.5721 8.64824 10.5127 8.99279 10.5127C9.33734 10.4533 9.68189 10.4236 10.0264 10.4236C12.9207 10.4236 15.2292 11.2254 16.9519 12.829C18.7436 14.3733 19.6394 16.3926 19.6394 18.8871Z" fill="#45CD45" />
                    </svg>
                    <p className="p-4 px-5">
                        Borem ipsum dolor sit amet, consectetur adipiscing elit. Borem ipsum dolor sit amet, consectetur adipiscing elit.

                    </p>

                    <svg className="block ml-auto" width="43" height="28" viewBox="0 0 43 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 8.37458C0 7.18666 0.2756 6.08793 0.8269 5.07822C1.3093 4.06852 1.9984 3.17757 2.8942 2.40547C3.7901 1.69275 4.8582 1.09887 6.0986 0.623667C7.27 0.207926 8.5104 5.53131e-05 9.8197 5.53131e-05C11.1979 5.53131e-05 12.4728 0.207926 13.6442 0.623667C14.8157 1.09887 15.8494 1.69275 16.7452 2.40547C17.641 3.17757 18.3646 4.06852 18.9159 5.07822C19.3982 6.08793 19.6394 7.18666 19.6394 8.37458L19.6394 19.2436C19.6394 21.5005 18.778 23.4011 17.0553 24.9454C15.2636 26.4896 13.0585 27.2617 10.4399 27.2617H3.8245V20.3127H8.7861C10.6466 20.3127 11.5769 19.4218 11.5769 17.64V16.5709C11.3013 16.6896 10.9912 16.749 10.6466 16.749C10.3021 16.8084 9.9575 16.8381 9.613 16.8381C6.7188 16.8381 4.4103 16.0363 2.6875 14.4327C0.895802 12.8884 0 10.8691 0 8.37458ZM23.3606 8.37458C23.3606 7.18666 23.6362 6.08793 24.1875 5.07822C24.6699 4.06852 25.359 3.17757 26.2548 2.40547C27.1506 1.69275 28.2188 1.09887 29.4591 0.623667C30.6306 0.207926 31.871 5.53131e-05 33.1803 5.53131e-05C34.5585 5.53131e-05 35.8333 0.207926 37.0048 0.623667C38.1763 1.09887 39.2099 1.69275 40.1058 2.40547C41.0016 3.17757 41.7252 4.06852 42.2764 5.07822C42.7588 6.08793 43 7.18666 43 8.37458V19.2436C43 21.5005 42.1386 23.4011 40.4159 24.9454C38.6242 26.4896 36.4191 27.2617 33.8005 27.2617H27.1851V20.3127H32.1466C34.0072 20.3127 34.9375 19.4218 34.9375 17.64V16.5709C34.6619 16.6896 34.3518 16.749 34.0072 16.749C33.6627 16.8084 33.3181 16.8381 32.9736 16.8381C30.0793 16.8381 27.7708 16.0363 26.0481 14.4327C24.2564 12.8884 23.3606 10.8691 23.3606 8.37458Z" fill="#45CD45" />
                    </svg>
                    <div className="flex gap-4 lg:w-1/2 m-auto">
                        <img src={testimony} alt="" />
                        <div>
                            <h3 className="font-bold">Makinde Bashir</h3>
                            <p>CEO Hizbullah</p>
                        </div>
                    </div>

                </div>

            </Carousel>
        </div>
    )
}