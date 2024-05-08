import {BrowserRouter as Router, Routes, Route} from  "react-router-dom"
import Login from "./components/pages/Login.jsx"
import Create from "./components/pages/Create.jsx"
import Welcome from "./components/pages/Welcome.jsx"
import Dashboard from "./components/Dashboard.jsx"
import CreateAccountPage from "./components/pages/CreateAccountPage.jsx"
import CreateSupplierPage from "./components/pages/CreateSupplierPage.jsx"

function App() {
  return (
    <>
      <div className='App'>
        <Router>

          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/crearclientes" element={<CreateAccountPage />} />
            <Route path="/crearproveedores" element={<CreateSupplierPage />} />
            <Route path ="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/create" element={<Create />} />
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
