import React from 'react'
import { Minus } from 'lucide-react';

const SemiHeading = (props) => {
    return (
            <div className='w-fit'>
                <h5 className='uppercase text-xs sm:text-sm font-bold flex items-center text-(--green)'><Minus />{props.h5}</h5>
                <h2 className='capitalize font-semibold text-2xl sm:text-4xl leading-tight text-(--black)' style={{ fontFamily: "poppins" }}>{props.h2}</h2>
            </div>
    )
}

export default SemiHeading