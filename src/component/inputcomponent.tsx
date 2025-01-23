

export function Inputcomponent({placeholder, reference}: {placeholder:string ;reference?:any}){
    return<div className="pt-1">
        <input type="text" ref={reference} className=" bg-slate-300 px-8 py-2 border-2 border-slate-600 rounded-md " placeholder={placeholder}/>
        
    </div>
}