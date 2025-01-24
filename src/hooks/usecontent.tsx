import axios from "axios"
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config"

export function useContent(){
    

    function refresh(){
        axios.get(`${BACKEND_URL}/api/v1/content`,{
            headers:{
                "Authorization":localStorage.getItem("token")
            }
        })

        .then((response)=>{
            setcontent(response.data.content)

        })
    }
    const [contents,setcontent]=useState([])

    useEffect(()=>{

       const interval= setInterval(() => {
            refresh()
        }, 10 * 1000);

        return ()=>{clearInterval(interval)}

    },[])
        

    
    return {contents,refresh}
}