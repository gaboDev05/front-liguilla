import './App.css'
import Dashboard from './pages/Dashboard/Dashboard'
import { Login } from './pages/Login'
import { StyledLayout } from './styled-components/layouts.style.components'

function App() {

  return (
    <>
      <StyledLayout>
        {/*<Login/>*/
        <Dashboard/>}
      </StyledLayout>
      
    </>
  )
}

export default App
