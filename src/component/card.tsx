import { Shareicon } from "../icons/shareicon";

interface cardcompo{
    title:string;
    type:"twitter"|"youtube";
    link:string

}

export function Card({title,type,link}:cardcompo){
    return <div>

     <div className="border-slate-500  bg-gray-300 border-2 p-4 max-w-72 rounded-md min-h-min">

          <div className="flex jutify-center">

            <div className="flex items-center text-lg">
                <div className="pr-8 text-gray-500 ">

                  <Shareicon size="lg" />
                </div>
                 {title}
            </div>

            <div className="flex items-center">
                <div className=" pl-8 text-gray-500">
                    <a href={link} target="blank">
                 <Shareicon size="lg" />
                    </a>
                </div>
                <div className=" pl-4 text-gray-500" >
                  <Shareicon size="lg" />
                </div>
            </div>

            </div>

          {/* jfkjnskdnskgn */}

                <div className="pt-6">
                    {type == "youtube" && 
                    <iframe className="w-full rounded-md" src={link.replace("watch","embed").replace("?v=","/")} 
                    title="YouTube video player" frameborder="0" allow="accelerometer; autoplay;
                    clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    }

                 
                    {type == "twitter" && 
                    <blockquote className="twitter-tweet">
                      <a href={link.replace("x.com","twitter.com")}></a> 
                    </blockquote>
                    }
                 
                </div>

          </div>
    </div>
    
    
}