import './App.css'
import { Outlet } from 'react-router-dom'
import BurgerMenu from './components/BurgerMenuStyle'

function App() {

  return (
    <div className='App'>
      <Outlet />
      
    </div>
  )
}

export default App