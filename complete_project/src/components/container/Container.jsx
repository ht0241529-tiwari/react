import React from 'react';

function Container({children}){//conataner ake box hota hai jika upar our necha kucha hota hai,iska anadr hum styling properly kartha hai
    return(
      <div className='w-full max-w-7xl mx-auto px-4'>
        {children}</div>
    )
}
export default Container;