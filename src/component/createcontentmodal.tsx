import { Crossicon } from "../icons/crossicon";
import { Button } from "./Button";
import { Inputcomponent } from "./inputcomponent";



export function Createcontent({onopen,onclose}){
    return<div>
      {onopen && <div className="h-screen w-screen bg-slate-900 fixed top-0 left-0 opacity-70 flex justify-center ">
        <div className="flex flex-col justify-center ">
            <span className="bg-white p-4 rounded-md" >
                    
            <div onClick={onclose}>
                <Crossicon/>
            </div>
            <div >
                <Inputcomponent placeholder="title"/>
                <Inputcomponent placeholder="link"/>
                <Inputcomponent placeholder="link"/>
            </div>
            <div className="pt-2 flex justify-center">
                <Button variant="primary" size="sm" text="submit" ></Button>
            </div>
            </span>
        </div>

    </div>
    }
    </div> 
}