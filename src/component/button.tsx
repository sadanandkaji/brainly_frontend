import { ReactElement } from "react";

import { Iconprops,iconsizevariant } from "../icons";

type variants= "primary" | "secondary"
export interface buttonprops{
     variant:variants;
     starticon?:any;
     endicon?:any;
     size:"md"|"sm"|"lg";
     text:string;
     Onclick:()=>void;

}

const variantstyles={
   "primary":"bg-purple-600 text-white",
   "secondary":"bg-purple-300 text-purple-600"
}

const sizestyles={
    "sm":"py-2 px-4",
    "md":"py-3 px-5",
    "lg":"py-4 px-6"
}

const defaultstyles="rounded-md flex item-center  p-4"


export const Button =(props:buttonprops)=>{
return <button className={`${variantstyles[props.variant]} ${sizestyles[props.size]} ${defaultstyles}`}>
    {props.starticon ? <div className="pr-2 pt-1">{props.starticon}</div> : null} 
    {props.text} 
    {props.endicon ? <div className="pr-2 pt-1">{props.endicon} </div> : null}</button>
}
