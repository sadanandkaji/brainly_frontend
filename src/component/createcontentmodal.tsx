import { useRef, useState } from "react";
import { Crossicon } from "../icons/crossicon";
import { Button } from "./button";
import { Inputcomponent } from "./inputcomponent";
import axios from "axios";
import { BACKEND_URL } from "../config";

enum contentype{
  Youtube="youtube",
  twitter="twitter"
}

export function Createcontent({onopen,onclose}){
    const titleref=useRef<HTMLInputElement>()
    const linkref=useRef<HTMLInputElement>()
    const [type,setType]=useState(contentype.Youtube)
    
  async  function addcontent(){
      const title=titleref.current?.value
      const link=linkref.current?.value

    await  axios.post(BACKEND_URL + "/api/v1/content",{
        title,
        link,
        type
      },{
        headers:{
          "Authorization":localStorage.getItem("token")
        }
      })
            onclose();
    }
    return<div>
      {onopen && <div> 
      <div className="h-screen w-screen bg-slate-900 fixed top-0 left-0 opacity-60 flex justify-center ">
        </div>
      <div className="h-screen w-screen fixed top-0 left-0 opacity-95 flex justify-center ">
         <div className="flex flex-col justify-center  ">
            <span className="bg-white  p-4 rounded-md" >
                    
            <div onClick={onclose}>
                <Crossicon/>
            </div>
            <div >
                <Inputcomponent reference={titleref} placeholder="title"/>
                <Inputcomponent  reference={linkref} placeholder="link"/>
              
            </div >
                 <h4 className="pt-2" >types</h4>
                 <div className="flex justify-center p-2 gap-2">
                <div> <Button variant={type=== contentype.Youtube ? "primary" :"secondary"} size="sm" text="youtube" 
                OnClick={()=>{setType(contentype.Youtube)}} /></div>
                <div  > <Button variant={type=== contentype.twitter ? "primary" :"secondary"} size="sm" text="twitter"
                OnClick={()=>{
                  setType(contentype.twitter)
                }}/></div>
                 </div>
            <div >

            </div>
            <div className="pt-2 flex justify-center">

                <Button  OnClick={addcontent} variant="primary" size="sm" text="submit" ></Button>
            </div>
            </span>
        </div>
        </div>
        
    </div>
    }
    </div> 
}