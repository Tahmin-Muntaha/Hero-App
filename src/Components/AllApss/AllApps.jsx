import React, { useState } from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import App from '../App/App';


const AllApps = () => {
    const allAppsData=useLoaderData()
    console.log(allAppsData)
    const navigation=useNavigation()
    const [search,setSearch]=useState('')
    const handleSearch=(e)=>{
        
        setSearch(e.target.value)
        


    }
    const filteredApp=allAppsData.filter(a=>a.title.toLowerCase().includes(search.toLowerCase()))
    console.log(filteredApp)
    if(navigation.state==='loading'){
        return (
            <div className="flex justify-center items-center h-[400px]">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
        )
    }
    

    return (
        <div>
            <h1 className='text-center text-4xl font-bold'>Our All Applications</h1>
            <p className='text-center'><small>Explore All Apps on the Market developed by us. We code for Millions</small></p>
            <div className='flex justify-between items-center'>
                <p>{allAppsData.length} Apps Found</p>
                <input name="name" type="text" placeholder='search' className='border border-gray-400 p-2' onChange={handleSearch}></input>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-5'>
            {
                allAppsData.map(data=>
                    <App key={data.id} data={data}></App>
                )
            }
            
        </div>
        </div>
    );
};

export default AllApps;