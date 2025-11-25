import { AppWindow, AppWindowMac, PlaySquare } from 'lucide-react';
import React from 'react';
import img from '../../assets/hero.png'

const Banner = () => {
    return (
        <div className='my-8 text-center '>
            <h1 className='text-6xl font-bold'>We Build<br></br><span className='text-purple-500'>Productive </span>Apps</h1>
            <p className='m-7 md:px-32'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            <div className='flex gap-4 justify-center items-center my-4'>
                <button className='flex py-2 px-4 border' onClick={()=>
                    window.open('https://play.google.com/store/apps')
                }><PlaySquare></PlaySquare> Play Store</button>
                <button className='flex py-2 px-4 border' onClick={()=>{
                    window.open('https://www.apple.com/app-store/')
                }}><AppWindow></AppWindow>  App Store</button>
            </div>
            <div className='flex justify-center items-center'>
                <img src={img}></img>
            </div>
            <div className='text-white bg-purple-500 p-16'>
                <h3 className='text-6xl text-bold mb-8'>Trusted by Millions, Built for You</h3>
                <div className='grid grid-cols-3'>
                    <div className='text-center'> 
                        <p>Total Downloads</p>
                        <span className='text-6xl text-bold my-16'>29.6 M</span>
                        <p><small>21% more than last month</small></p>
                    </div>
                    <div className='text-center'> 
                        <p>Total Reviews</p>
                        <span className='text-6xl text-bold my-16'>906 K</span>
                        <p><small>21% more than last month</small></p>
                    </div>
                    <div className='text-center'> 
                        <p>Active Apps</p>
                        <span className='text-6xl text-bold my-16'>132 +</span>
                        <p><small>31 more will Launch</small></p>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Banner;