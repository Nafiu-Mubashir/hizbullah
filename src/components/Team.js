import React from 'react'
import CEO from "../assets/unsplash_iEEBWgY_6lA.png";
import CGO from "../assets/second.jpg";
import CFO from "../assets/third.jpg";
import COO from "../assets/fourth.jpg";

const Team = () => {
    const teamArray = [
        {
            image: CEO,
            fullName: "Kayode Bashir",
            Portfolio: "Founder/CEO",
        },
        {
            image: CGO,
            fullName: "Kayode Bashir",
            Portfolio: "Founder/CEO",
        },
        {
            image: CFO,
            fullName: "Kayode Bashir",
            Portfolio: "Founder/CEO",
        },
        {
            image: COO,
            fullName: "Kayode Bashir",
            Portfolio: "Founder/CEO",
        },

    ]
  return (
    <div>
        <div className='flex flex-col lg:flex-row gap-3 lg:gap-0 p-2'>
            {
                teamArray.map(({image, fullName, Portfolio}) => (
                    <div className='relative lg:w-[393px] lg:h-[440px] '>
                <img src={image} alt="" className='h-full w-full'/>
                <div className='absolute bottom-4'>
                    <p className='text-[20px] text-white'>{fullName}</p>
                    <p className='text-[11px] text-white'>{Portfolio}</p>
                </div>
            </div>
                ))
            }
        </div>
    </div>
  )
}

export default Team