
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Home from './Pages/Home'
import Resumesteps from './Pages/Resumesteps'
import Userform from './Pages/Userform'
import Downloads from './Pages/Downloads'
import Viewresume from './Pages/Viewresume'
import Pnf from './Pages/Pnf'
import Allresumes from './Pages/Allresumes.jsx'
import { ToastContainer} from 'react-toastify';
function App() {
 

  return (
    <>
    <Header/> 
    
  {/* setup path*/}
    <Routes>
      <Route path='' element={<Home/>}/>
      <Route path='steps' element={<Resumesteps/>}/>
      <Route path='form' element={<Userform/>}/>
      <Route path='download' element={<Downloads/>}/>
      <Route path='resume/:id/view' element={<Viewresume/>}/>
      <Route path='all-resumes' element={<Allresumes/>}/>

   {/* redirect to pnf */}
      <Route path='/*'element={<Pnf/>}/>
    </Routes>
    <Footer/>   
    <ToastContainer position='top-center' autoClose={3000} theme="colored"/>
     
              
    </>
  )
}

export default App
