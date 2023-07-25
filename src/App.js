import { Routes, Route } from 'react-router-dom'

import Home from './Components/Routes/home/home'
import Navigation from './Components/Routes/Navigation/navigation'
import SignIn from './Components/Routes/sign-in/sign-in'

const Shop = () => {
  return <h1>shop</h1>
}

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-In" element={<SignIn />} />
      </Route>
    </Routes>
  )
}
export default App
