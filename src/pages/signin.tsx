import { useRef } from "react";
import { Button } from "../component/button";
import { Inputcomponent } from "../component/inputcomponent";
import axios from "axios";
import { BACKEND_URL } from "../config";
// import { useNavigate } from "react-router-dom";

export function Signin(){
    
    const usernameref=useRef<HTMLInputElement>()
    const passwordref=useRef<HTMLInputElement>()


    async function signin(){
        const username=usernameref.current?.value
        const password=passwordref.current?.value
     const response= await  axios.post(BACKEND_URL+ "/api/v1/signin" ,{
            username,
            password
                    
        })
    const jwt=response.data.token;
    localStorage.setItem("token",jwt);
    alert("signed in")
    }
    return<div className=" h-screen w-screen flex  justify-center items-center  ">
        <div className="bg-gray-400 p-12 rounded-lg">
            <Inputcomponent reference={usernameref} placeholder="username"/>
            <Inputcomponent reference={passwordref} placeholder="password"/>
            <div className="flex justify-center p-4" >
                <Button OnClick={signin} loading={false} fullwidth={true} size="sm" variant="primary" text="signin" />
            </div>
        </div>

    </div>
}