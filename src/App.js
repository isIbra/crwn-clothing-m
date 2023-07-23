import Home from "./Components/Routes/home/home";
import { Routes, Route, Outlet } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <div>
      <h1> Navigation </h1>
      </div>
      <Outlet />
    </div>
  )
}

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