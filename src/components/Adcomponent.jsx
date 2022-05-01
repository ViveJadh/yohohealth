import React from 'react';
import HeadingComp from './HeadingComp';


const Adcomponent = () => {
    return (
        <>

            <HeadingComp text={"Today's Top Deals. Shop Now!!!"} />
            <div className='ad'>

                <iframe src='https://inrdeals.com/embed/deals?user=viv641648721' width='100%' height='100%' frameBorder='0' allowtransparency='true' title='deals' className='ad'> </iframe>
            </div>
        </>


    );
}

export default Adcomponent;
