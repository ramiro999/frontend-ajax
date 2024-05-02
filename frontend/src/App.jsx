import {BrowserRouter as Router, Routes, Route} from  "react-router-dom"
import Login from "/components/pages/Login";
import './App.css'

function App() {
  return (
    <>
      <div className='App'>
        <Router>

          <Routes>

            <Route path="/login" element={<Login />} />

          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
