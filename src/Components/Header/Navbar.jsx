import { Github, Menu } from 'lucide-react';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png'
const Navbar = () => {
    
    const [open,setOpen] =useState(false)
    return (
        <div className='flex justify-between items-center  m-2 md:m-8'>
            <div className=' flex gap-2 items-center' >
                <Menu className='md:hidden'
                onClick={()=>{
                setOpen(!open)
            }}
                ></Menu>
                <img src={logo} className='h-[30px]'></img>
                <h3 className=' font-bold'>HERO.IO</h3>
                {
                    open &&
                    <div className={`absolute flex flex-col bg-amber-50 text-black p-5 z-10 ${!open?"-top-16":"top-12"}`}>
                        <NavLink to="/" className={({isActive})=>isActive?"text-purple-400":"text-black"}>Home</NavLink>
                        <NavLink to={"/allapps"} className={({isActive})=>isActive?"text-purple-400":"text-black"}>Apps</NavLink>
                 <NavLink to="/" className={({isActive})=>isActive?"text-purple-400":"text-black"}>Installation</NavLink>
                         
                        
                        
                        
                    </div>   
                }
            </div>
            <div className='hidden md:flex gap-4 items-center'>
                 <NavLink to="/" className={({isActive})=>isActive?"text-purple-400":"text-black"}>Home</NavLink>
                 <NavLink to={"/allapps"} className={({isActive})=>isActive?"text-purple-400":"text-black"}>Apps</NavLink>
                 <NavLink to="/" className={({isActive})=>isActive?"text-purple-400":"text-black"}>Installation</NavLink>
                
               
            </div>
            <div className='flex gap-2 items-center  ' >
                <button className='bg-linear-to-l from-purple-400 to-blue-500 py-2 px-8 rounded-2xl flex text-white'
                onClick={()=>{
                    window.open("https://github.com/Tahmin-Muntaha" ,'_blank')
                }} 
                
                ><Github></Github> Contribute</button>
                
            </div>

        </div>
       
    )
    
    };
    

export default Navbar;