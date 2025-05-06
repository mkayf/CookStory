import React, { forwardRef } from 'react'

const Select = forwardRef(({
    options,
    label,
    className = "",
    labelClassName = "",
    ...props
}, ref) => {

    return (
        <div className='mt-4'>
            {
                label && <label className={`text-[#4B4B4B] block mb-2 poppins-regular text-sm md:text-md lg:text-lg ${labelClassName}`}>{label}</label>
            }
            <select ref={ref} className='bg-[#A8C66C] text-black px-6 py-2 poppins-regular rounded-lg w-full' {...props}>
                {
                    options?.map((option, i) => (
                        <option key={i} value={option}>{option}</option>
                    ))
                }
            </select>
        </div>
    )
})

export default Select;