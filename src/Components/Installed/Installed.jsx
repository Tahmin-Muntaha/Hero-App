import React, { useState } from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import { localData } from '../Local/LocalAdd';
import { Download, Star } from 'lucide-react';
import { uninstall } from '../Local/Unistall';
import { ToastContainer, toast } from 'react-toastify';

const Installed = () => {
    const notify = () => toast("Uninstalled!");
    const local=localData()
    console.log(local)
    const data=useLoaderData()
    console.log(data)
    
    const navigation=useNavigation()
    if(navigation.state==='loading'){
        return (
            <div className="flex justify-center items-center h-[400px]">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
        )
    }
    
    // let inst=[]
    // for(let i in local){
    //             for(let j in data){
    //                 if(local[i]===data[j].id){
    //                     inst=[...inst,local[i]]
    //                 }
    //             }
    //          }
    //          console.log(inst)

    const ins=data.filter(d=>local.includes(d.id))
    console.log(ins)
    const [apps,setApps]=useState(ins || [])
    const sorting=(type)=>{
        
        if(type==='Ascending'){
            setApps( [...apps].sort((a,b)=>a.size-b.size))
        }
        if(type==='Descending'){
           setApps( [...apps].sort((a,b)=>b.size-a.size))
        }

    }
    return (
        <div className={``}>
             <ToastContainer position="top-right" autoClose={2000} />
            <div className='flex justify-between items-center'>
                <p>{local.length} Apps Found</p>
                <div>
                    <details className="dropdown">
  <summary className="btn m-1">Sort By Size</summary>
  <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li onClick={()=>sorting('Ascending')}><a>Ascending</a></li>
    <li onClick={()=>sorting('Descending')}><a>Descending</a></li>
  </ul>
</details>
                </div>
            </div>
           {
            apps.map(i=>
                <div className={`flex justify-between items-center shadow-2xl m-8 p-4`}>

                    <div className='flex gap-4 items-center'>
                    <img src={i.image} className='h-[100px] w-[100px]'></img>
                    <div >
                        <p className='font-bold text-s'>{i.title} : {i.description}</p>
                        <div className='flex gap-4'>
                            <p className='flex fap-2 text-orange-400'><Download></Download>{i.downloads}</p>
                            <p className='flex gap-2 text-green-400'><Star></Star>{i.ratingAvg}</p>
                            <p>{i.size} MB</p>
                        </div>
                    </div>
                </div>
                <div>
                    <button className={`bg-green-400 px-8 py-4 rounded-2xl text-white font-bold`}
                    onClick={()=>{
                        uninstall(i.id)
                        setApps(apps.filter(a=>a.id!==i.id))
                        notify()
                    }} >Uninstall</button>
                   
                </div>
                </div>
            )
           }
        </div>
    );
};

export default Installed;