import { useRef } from "react";
import { Button } from "../component/button";
import { Inputcomponent } from "../component/inputcomponent";
import axios from "axios";
import { BACKEND_URL } from "../config";
// import { useNavigate } from "react-router-dom";

export function Signup(){
    const usernameref=useRef<HTMLInputElement>()
    const passwordref=useRef<HTMLInputElement>()
    // const navigat=useNavigate();

   async function signup(){
 
        const username=usernameref.current?.value
        const password=passwordref.current?.value
     await  axios.post(BACKEND_URL + "/api/v1/signup" ,{
            username,
            password
        
                    
        });
    alert("signed up")
        
    }
    return<div className=" h-screen w-screen flex  justify-center items-center  ">
        <div className="bg-gray-400 p-12 rounded-lg">
            <Inputcomponent reference={usernameref} placeholder="username"/>
            <Inputcomponent reference={passwordref} placeholder="password"/>
            <div className="flex justify-center p-4" >
                <Button  OnClick={signup} loading={false} fullwidth={true} size="sm" variant="primary" text="signup" />
            </div>
        </div>

    </div>
}