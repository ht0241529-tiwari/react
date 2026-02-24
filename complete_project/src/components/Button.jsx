import React from 'react';
function Button({
    children,
    type='button',
    bgColor='bg-blue-600',
    textColor='text-white',
    className='',
    ...props
}) {
    return(
        <button className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`} {...props}>
            {children}
        </button>
    )
}
export default Button;
//forward ref: hum ake login form bana raha hai ou login form ka andar input field alag hai wahi same input
//filed hum password,email sab jaga use karaga then we pass the reference of the state