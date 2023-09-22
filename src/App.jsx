//import './App.css'
import Switch from './components/Switch'
import Dashboard from './pages/Dashboard/Dashboard'
import { GlobalStyles, lightTheme } from './styled-components/global.style.components'
//import { Login } from './pages/Login'
import { StyledLayout } from './styled-components/layouts.style.components'
import { ThemeProvider } from 'styled-components'

function App() {

  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyles />
        <StyledLayout>
          <Switch id='change-theme'/>
          {/*<Login/>*/
          <Dashboard/>}
        </StyledLayout>
      </ThemeProvider>
    </>
  )
}

export default App
