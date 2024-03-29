
import './App.css'
import Header from './components/sections/Header'
import { Outlet } from 'react-router-dom'

function App() {


  return (
    <>
    <div>
      <Header />
      <Outlet />
    </div>
    </>
  )
}

export default App
