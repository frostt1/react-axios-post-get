import './App.css'
import Navbar from './components/Navbar'
import { MainRoutes } from './Routes/MainRoutes'


const App = () => {
  return <div>
    <Navbar />
    <div className='container'>
    <MainRoutes />
    </div>
   
  </div>
}

export default App
