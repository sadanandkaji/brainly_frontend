
import { Button } from './component/Button'
import { Card } from './component/card'
import { Plusicon } from './icons/plusicon'
import { Shareicon } from './icons/shareicon'


function App() {
 
return<div className='p-4'>

<div className='flex justify-end gap-4'>

<Button     starticon={<Shareicon size='lg' />} size='md' variant='primary' text='share brain'/>
<Button starticon={<Plusicon size='lg'/>} size='md' variant='secondary' text='addcontent'/>
</div>

<div className='flex gap-4'>

<Card type='twitter' link='https://x.com/Waliilaww/status/1881737140259954927' title='first tweet'></Card>
<Card type='youtube' link='https://www.youtube.com/watch?v=Opyte24QYmE' title='youtube'></Card>
</div>

</div>
 
}

export default App
