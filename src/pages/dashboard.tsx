
import { useEffect, useState } from 'react'
import { Button } from '../component/button'
import { Card } from '../component/card'
import { Createcontent } from '../component/createcontentmodal'
import { Plusicon } from '../icons/plusicon'
import { Shareicon } from '../icons/shareicon'
import { Sidebar } from '../component/sidebar'
import { useContent } from '../hooks/usecontent'
import axios from 'axios'
import { BACKEND_URL } from '../config'


 export function Dashboard() {
    const [modalopen,modeopenstate]=useState(false)
    const {contents,refresh}=useContent()

    useEffect(()=>{refresh()},[modalopen])
   
 
return<div>

     <div >
    <Sidebar/>
    </div>

    <div className='p-4 bg-gray-200 min-h-screen border-gray-300 border-2 ml-72'>

    <Createcontent onopen={modalopen} onclose={()=>{
        modeopenstate(false)
    }}/>

    <div className='flex justify-between'>
<h1 className='text-3xl font-lg'>All notes</h1>
<div className='flex  gap-4'>
<Button   OnClick={ async ()=>{
      const response=  await  axios.post(`${BACKEND_URL}/api/v1/brain/share`,{
            share:true
          },{
            headers:{
                "Authorization":localStorage.getItem("token")
            }
          })
          const shareurl= `http://localhost:5173/share/${response.data.hash}`
          alert(shareurl)
}}  starticon={<Shareicon size='lg' />} size='md' variant='primary' text='share brain'/>
<Button  OnClick={()=>{
    modeopenstate(true)
}} starticon={<Plusicon size='lg'/>} size='md' variant='secondary' text='addcontent'/>
</div>
</div>

<div className='flex gap-4 flex-wrap'>
{contents.map(({ type, link, title }) => (
                        <Card  type={type} link={link} title={title} />
                    ))}
</div>
</div>

</div>
 
}

