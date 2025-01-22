

export function Inputcomponent({onchange,placeholder}: {onchange:()=>void;placeholder:string}){
    return<div className="pt-1">
        <input type="text" className=" bg-slate-300 px-8 py-2 border-2 border-slate-600 rounded-md " onChange={onchange} placeholder={placeholder}>
        </input>
    </div>
}