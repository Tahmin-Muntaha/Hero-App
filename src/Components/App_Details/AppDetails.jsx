import { Bar, BarChart, XAxis, YAxis } from 'recharts';
import { Download, Star, StarHalf, Stars, ThumbsUp } from 'lucide-react';
import React from 'react';
import { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const AppDetails = () => {
    const [ins,setIns]=useState('Install')
    const {id}=useParams()
    const allData=useLoaderData()
    const app=allData.find(a=>a.id===parseInt(id))
   console.log(app) 
    
    return (
        <>
        <div className='p-4 md:grid grid-cols-2  justify-center items-center'>
            <div><img src={app.image} className="w-[400px]"></img ></div>
            <div>
                <h1 className='text-3xl font-bold'>{app.title} : {app.description}</h1>
                <p>Developed by <span className='text-blue-500'>{app.companyName}</span></p>
                <div className='grid grid-cols-3 my-4'>
                    <div>
                        <Download className='text-green-400 font-bold'></Download>
                        <p >Downloads</p>
                        <p className='font-bold text-2xl'>{app.downloads}</p>
                    </div>
                    <div >
                        <Star className='text-orange-400 font-bold'></Star>
                        <p> Average Ratings</p>
                        <p className='font-bold text-2xl'>{app.ratingAvg}</p>
                    </div>
                    <div>
                        <ThumbsUp className='text-blue-400 font-bold'></ThumbsUp>
                        <p>Total Reviews</p>
                        <p className='font-bold text-2xl'>{app.reviews}</p>
                    </div>
                </div>
                <button disabled={ins === 'Installed'} onClick={()=>{
                    if(ins==='Install'){
                        setIns('Installed')
                    }
                    console.log('gdchjskx')
                }} className='bg-green-400 px-8 py-4 rounded-2xl text-white font-bold'>{ins}</button>
            </div>
        </div>
            <div className='md:grid grid-cols-2'>
                <div>
                <BarChart width={600} height={300} data={app.ratings} layout="vertical">
  <XAxis type="number" />
  <YAxis type="category" dataKey="name" />
  <Bar dataKey="count" />
</BarChart>

            </div>
            <div className='m-4'>
                <p className='text-xl font-bold'>Description : </p>
                <p>{app.detailedDescription}</p>
            </div>
            </div>
        </>
    )
        
    }
    

export default AppDetails;