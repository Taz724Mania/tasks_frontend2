import './App.css'
import { Outlet } from 'react-router-dom'
import StyledBurger from './components/Header'

function App() {

  return (
    <div className='App'>
      <Outlet />
      
    </div>
  )
}

export default App