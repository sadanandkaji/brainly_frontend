import { Twittericon } from "../icons/twittericon";
import { Youtubeicon } from "../icons/youtubeicon";
import { Sidebarelement } from "./sidebaritems";


export function Sidebar(){
    return <div className="h-screen w-72 bg-white border-r  border-slate-300 left-0 top-0 absolute">
        <div>
            <div className="text-3xl">
                Brainly
            </div>
            <Sidebarelement text="youtube" icon={<Youtubeicon/>} />
            <Sidebarelement text="twitter" icon={<Twittericon/>} />
        </div>
    </div>
}