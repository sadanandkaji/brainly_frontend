
import { useState } from 'react'
import { Button } from '../component/button'
import { Card } from '../component/card'
import { Createcontent } from '../component/createcontentmodal'
import { Plusicon } from '../icons/plusicon'
import { Shareicon } from '../icons/shareicon'
import { Sidebar } from '../component/sidebar'


 export function Dashboard() {
    const [modalopen,modeopenstate]=useState(false)
   
 
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
<Button     starticon={<Shareicon size='lg' />} size='md' variant='primary' text='share brain'/>
<Button  OnClick={()=>{
    modeopenstate(true)
}} starticon={<Plusicon size='lg'/>} size='md' variant='secondary' text='addcontent'/>
</div>
</div>

<div className='flex gap-4'>

<Card type='twitter' link='https://x.com/Waliilaww/status/1881737140259954927' title='first tweet'></Card>
<Card type='youtube' link='https://www.youtube.com/watch?v=Opyte24QYmE' title='youtube'></Card>
</div>
</div>

</div>
 
}

