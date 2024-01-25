import { Outlet, useLocation } from "react-router-dom"
import Home from "./Pages/Home/Home"
import Header from "./Components/Header"

function App() {
  const location = useLocation()

  return (
    <>
      <Header />
      {location.pathname == '/' ? <Home /> : <Outlet />}
    </>
  )
}

export default App
