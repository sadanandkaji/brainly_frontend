import { ReactElement } from "react";

export function Sidebarelement({text,icon}:{text:string;icon:ReactElement}){
    return<div className="flex p-3 text-gray-700 pt-4">
        
        <div className=" pr-3">
      {icon}
        </div>
        <div className="pr-3">
       {text}
        </div>
    </div>
}