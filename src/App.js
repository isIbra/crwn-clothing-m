import Home from "./Components/Routes/home/home";
import Navigation from "./Components/Routes/Navigation/navigation"
import { Routes, Route } from "react-router-dom";



const Shop = () => {
  return <h1>shop</h1>
}

const App = () => {
  return (
    <Routes> 
    <Route path='/' element={<Navigation />} > 
      <Route index element={<Home />} />
      <Route path='shop' element={<Shop />} />
    </Route>
    </Routes>
  )
}
export default App