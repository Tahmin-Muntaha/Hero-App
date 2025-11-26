import React from 'react';
import Banner from '../Banner/Banner';
import { NavLink, useLoaderData, useNavigation } from 'react-router-dom';
import Apps from './Apps/Apps';

const Home = () => {
    const bannerData=useLoaderData()
    const navigation=useNavigation()
    if(navigation.state==='loading'){
        return (
            <div className="flex justify-center items-center h-[400px]">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
        )
    }
    
    console.log(bannerData)
    return (
        <div>
            
            <Banner></Banner>     
            <Apps bannerData={bannerData}></Apps>
            <div className='flex justify-center items-center text-center mb-8'>
                
                <NavLink to={'/allapps'} className={" "}>
                <div className='w-[200px]  bg-linear-to-l from-purple-400 to-blue-500 py-2 px-8 rounded-2xl  text-white'>
                
                See ALL Apps</div>
                </NavLink>
            
            </div>
        </div>
    );
};

export default Home;