const localData=()=>{
    const data=localStorage.getItem('Apps')
    if(data){
        const d=JSON.parse(data)
        
        return d
    }
    else{
        return []
    }
}

const addLocal=(id)=>{
    const data=localData()
    
    const d=[...data,id]
   localStorage.setItem('Apps',JSON.stringify(d))
}
export {addLocal,localData}