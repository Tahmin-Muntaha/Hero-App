import { Download, Star } from 'lucide-react';
import React from 'react';
import { NavLink} from 'react-router-dom';

const App = ({data}) => {
    console.log(data)
    const{companyName,description,image,downloads,ratingAvg}=data
    
   

    return (
        
            <div className='shadow-2xl bg-white p-4 my-16'>
            <div className='flex flex-col '>
                <img src={image} className='h-[300px] flex-1 px-4 p-2'></img>
            </div>
            <div className='my-5'>
                <p className='font-bold'>{companyName} : {description}</p>
            </div>
            <div className='flex justify-between'>
                <div className='flex gap-2 p-2 bg-gray-100 text-green-500'><Download></Download>{downloads}</div>
                <div className='flex gap-2 p-2 bg-gray-100 text-orange-500'><Star></Star>{ratingAvg}</div>
            </div>
            
        </div>
        
        
    );
};

export default App;