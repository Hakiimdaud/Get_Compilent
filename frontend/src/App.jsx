import { Route, Routes } from "react-router-dom"
import Home from "./components/home"
import AddInfo from "./components/form"
import Dashbord from "./components/dashboard"

function App() {
  return <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/addinfo" element={<AddInfo />}/>
    <Route path="/dash" element={<Dashbord />}/>

  </Routes>
  
}
export default App