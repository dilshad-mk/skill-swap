
import { Routes,Route } from 'react-router-dom'
import Page1 from './pages/Page1'
import Login_page from './pages/Login_page'
import Signup from './pages/Signup'
import Profile_setup from './pages/Profile_setup'
import Dashbord from './pages/Dashbord'




function App() {


  return (
    <Routes>
      <Route path='/' element={<Page1/>}/>
      <Route path='/Login' element={<Login_page/>} />
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/Profile_setup' element={<Profile_setup/>}/>
      <Route path='/dashboard' element={<Dashbord/>}/>
    </Routes>
    // <>
    // <Dashbord/>
    // </>
  )
}

export default App
