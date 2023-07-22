// IMPORTAÇÕES
import { useState } from "react"
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { ContainerRoutes } from './components/routes/ContainerRoutes'

// IMPORT [LOGIN]
import { ContainerAccount } from './components/routes/ContainerAccount'

import styles from './assets/css/output.module.css'


function App(){
  const [isLogged, setisLogged] = useState(false)
  
  const [login, setLogin] = useState(
    {"user": "", "password": ""}
  )

  function handleChange(e:any){
      setLogin({
          ...login,
          [e.target.name]: e.target.value
      })
  }

  function login_authentic(e:any){
      e.preventDefault()
      console.log(login)

      // clean input's values
      e.target.reset()
  }
  // =================================================
  const [register, setRegister] = useState(
    {
        "user": "",
        "email": "",
        "password": "",
        "con_password": ""
    }
  )

  function handleChangeRegister(e:any){
      // create a json [form]
      setRegister({
          ...register,
          [e.target.name]: e.target.value
      })
  }

  function register_authentic(e:any){
      e.preventDefault()
      console.log(register)

      if(register.password == register.con_password){
          console.log('Senha iguais!')
          
          // clean input's values
          e.target.reset()
      }

      else{
          console.log('=== Senhas diferentes!')
      }
  }
  return (
    <>
      {isLogged ? (
        <>
          <Navbar />
          <ContainerRoutes />
          <Footer />
        </>
      ) : (
        <>
          <ContainerAccount
            handleChange={handleChange}
            handleChangeRegister={handleChangeRegister}
            login_authentic={login_authentic}
            register_authentic={register_authentic}/>
        </>
      )}
    </>
  )
}

export default App
