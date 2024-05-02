import './App.css'
import { Outlet } from 'react-router-dom'
import BurgMenu from './components/BurgerMenuStyle'

function App() {

  return (
    <div className='App'>
      <BurgMenu />
      <Outlet />
      
    </div>
  )
}

export default App