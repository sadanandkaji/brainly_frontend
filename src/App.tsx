import { Dashboard } from "./pages/dashboard"
import { Signin } from "./pages/signin"
import { BrowserRouter,Route,Routes } from "react-router-dom"
import { Signup } from "./pages/signup"

function App() {
return<div>
    <BrowserRouter>
    <Routes>
        

       <Route path="/signup" element={<Signup/>} />
        
       <Route path="/signin" element={<Signin/>} />
       <Route path="/dashboard" element={<Dashboard/>} />
    </Routes>
    </BrowserRouter>
</div>
 
}

export default App
