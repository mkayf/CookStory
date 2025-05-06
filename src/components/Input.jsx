import React, { forwardRef } from 'react'

const Input = forwardRef(({
    label,
    className = "",
    labelClassName="",
    type = "text",
    ...props
}, ref) => {
    return (
        <div className='mt-4'>
            {
                label && <label className={`text-[#4B4B4B] block mb-2 poppins-regular text-sm md:text-md ${labelClassName}`}>{label}</label>
            }
            <input type={type} className={`w-full rounded-md border-1 border-[#4B4B4B] px-2 py-1.5 poppins-regular text-sm md:text-md ${className}`} ref={ref} {...props} />
        </div>
    )
})

export default Input