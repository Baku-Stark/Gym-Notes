// IMPORTAÇÕES
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { ContainerRoutes } from './components/pages/ContainerRoutes'

// CSS PRINCIPAL
import './assets/css/output.module.css'
// import './assets/css/index.css'

function App(){
  return (
    <>
      <Navbar/>
      <ContainerRoutes/>
      <Footer/>
    </>
  )
}

export default App
