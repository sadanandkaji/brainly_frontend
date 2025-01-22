import { ReactElement } from "react";

export function Sidebarelement({text,icon}:{text:string;icon:ReactElement}){
    return<div className="pt-2 pl-7 ">

    <div className="flex item-center text-gray-700 pt-3 cursor-pointer
     hover:bg-gray-200 rounded max-w-52 pr-4 h-15 pl-1 transition-all duration-100  ">

        <div className=" pr-3 pl-3  ">
      {icon}
        </div>
        <div className="pr-3 ">
       {text}
        </div>
    </div>
         </div>
}