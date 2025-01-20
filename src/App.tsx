
import './App.css'
import { Button } from './component/ui/Button'
import { Plusicon } from './icons/plusicon'
import { Shareicon } from './icons/shareicon'


function App() {
 
return<>
<Button     starticon={<Shareicon size='lg' />} size='sm' variant='primary' text='share'/>
<Button     starticon={<Shareicon size='lg' />} size='md' variant='primary' text='share'/>
<Button starticon={<Plusicon size='lg'/>} size='md' variant='secondary' text='addcontent'/>
</>
 
}

export default App
