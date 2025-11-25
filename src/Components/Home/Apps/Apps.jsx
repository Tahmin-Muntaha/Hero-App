import React from 'react';
import App from '../../App/App';

const Apps = ({bannerData}) => {

    
    console.log(bannerData)
    return (
        <div>
            <h1 className='text-center text-4xl font-bold'>Trending Apps</h1>
            <p className='text-center'><small>Explore All Trending Apps on the Market developed by us</small></p>
            <div className='grid grid-cols-2 gap-4  md:gap-8 md:grid-cols-4'>
            {
                bannerData.map(data=>
                    <App key={data.id} data={data}></App>
                )
            }
        </div>
        </div>
    );
};

export default Apps;