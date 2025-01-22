import { Button } from "../component/button";
import { Inputcomponent } from "../component/inputcomponent";

export function Signup(){
    return<div className=" h-screen w-screen flex  justify-center items-center  ">
        <div className="bg-gray-400 p-12 rounded-lg">
            <Inputcomponent placeholder="username"/>
            <Inputcomponent placeholder="password"/>
            <div className="flex justify-center p-4" >
                <Button loading={false} fullwidth={true} size="sm" variant="primary" text="signup" />
            </div>
        </div>

    </div>
}