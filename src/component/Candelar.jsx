import { faArrowLeftLong, faArrowRight, faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useState } from 'react'

export const Data = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

const Candelar = () => {

    const [year, setYear] = useState(new Date().getFullYear())

    const [month, setMonth] = useState(() => {
        const month = new Date().getMonth()
        return (Data[month])
    })

    //console.log(month)

    return (
        <div className='w-full h-full border-black border rounded-[2rem] flex justify-start items-center flex-col'>

            <div className='flex justify-between items-center mt-8 w-1/3 h-8'>
                <FontAwesomeIcon icon={faArrowLeftLong} className='text-[1.5rem] cursor-pointer' onClick={() => setYear(year - 1)} />
                <p className='text-[1.5rem] font-semibold'>{year}</p>
                <FontAwesomeIcon icon={faArrowRightLong} className='text-[1.5rem] cursor-pointer' onClick={() => setYear(year + 1)} />
            </div>

            <div className='grid grid-cols-3 gap-4 px-4 mt-6'>

                {
                    Data.map((item, index) => {
                        return (
                            <div key={index}>
                                <div
                                    className={(item === month) ?
                                        'px-4 py-4 border rounded-lg text-[1.3rem] text-center bg-backgrounditem2 cursor-pointer'
                                        : 'px-4 py-4 border rounded-lg text-[1.3rem] text-center cursor-pointer'}
                                    onClick={()=>setMonth(item)}
                                >
                                    {item}
                                </div>
                            </div>
                        )
                    })
                }

            </div>

        </div>
    )
}

export default Candelar