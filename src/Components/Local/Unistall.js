import { localData } from "./LocalAdd"

const uninstall=(id)=>{
    const data=localData()
    let final=[]
    for(let i in data){
        if(data[i]!=parseInt(id)){
            final=[...final,data[i]]
        }
    }
    localStorage.setItem('Apps',JSON.stringify(final))
    

}

export {uninstall}