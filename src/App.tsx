import { Route, Routes } from "react-router-dom"
import Landing_Page from "./pages/landing_page/Landing_Page"
import Dashboard from "./pages/dashborad/Dashboard"



const App = () => {
  return (
    <Routes>
      {/* Landing Page */}
      <Route path="/" element={<Landing_Page />} />
      {/* Dashborad */}
      <Route path="user">
        <Route path="/user" element={<Dashboard />}/>
      </Route>
    </Routes>
  )
}

export default App