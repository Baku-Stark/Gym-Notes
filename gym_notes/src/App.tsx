import { useNavigate } from 'react-router-dom'

// IMPORT [ROUTES]
import { ContainerAccount } from './components/routes/ContainerAccount'
import { ContainerRoutes } from './components/routes/ContainerRoutes'

// IMPORT [COMPONENTS]
import { useState, useEffect } from "react"
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'

// IMPORT [LOGIN]
import { auth_link } from './components/pages/account/Auth'

import styles from './assets/css/output.module.css'


function App(){
  const navigate = useNavigate()

  const [isLogged, setIsLogged] = useState(true)

  const [account, setAccount] = useState({})
  
  const [login, setLogin] = useState(
    {"user": "", "password": ""}
  )

  function handleChange(e:any){
      setLogin({
          ...login,
          [e.target.name]: e.target.value
      })
  }

  async function login_authentic(e:any){
      e.preventDefault()

      await fetch(auth_link.login_auth, {
        method:'POST',
        body:JSON.stringify(login),
        headers:{
            'Content-Type':'application/json'
        }
      })
        .then((resp) => resp.json())
        .then((data) => {
          setAccount(data)
          localStorage.setItem("token", data['token'])
          setIsLogged(true)
          navigate('/home')
        })

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

  async function register_authentic(e:any){
      e.preventDefault()

      if(register.password == register.con_password){
          document.querySelector(`.${styles.password}`)!.style.border = 'none'
          document.querySelector(`.${styles.password}`)!.placeholder = "Type your password"

          document.querySelector("#con_password")!.style.border = 'none'
          document.querySelector("#con_password")!.placeholder = "Confirm your password"
          
          await fetch(auth_link.register_auth, {
            method:'POST',
            body:JSON.stringify(register),
            headers:{
                'Content-Type':'application/json'
            }
          })
            .then((resp) => resp.json())
            .then((data) => {
              console.log(data)
              e.target.reset()
              navigate('/')
            })
      }

      else{
        document.querySelector(`.${styles.password}`)!.style.border = '2px solid red'
        document.querySelector(`.${styles.password}`)!.placeholder = "Different passwords"

        document.querySelector("#con_password")!.style.border = '2px solid red'
        document.querySelector("#con_password")!.placeholder = "Different passwords"

        // clean input's values
        e.target.reset()
      }
  }

  // =================================================
  function logout(){
    console.log("Você deslogou!!")
  }

  // =================================================
  useEffect(() => {
    if(localStorage.length > 0){
      window.alert("Auto login enabled!")

      fetch(auth_link.auto_login_auth, {
        method:'POST',
        body:JSON.stringify({"token": localStorage.getItem("token")}),
        headers:{
            'Content-Type':'application/json'
        }
      })
        .then((resp) => resp.json())
        .then((data) => {
          setAccount(data)
          setIsLogged(true)
          navigate('/home')
        })
    }
  }, [])

  return (
    <>
      {isLogged ? (
        <>
          <Navbar user={account['user']} logout={logout}/>
          <ContainerRoutes account={account}/>
          <Footer />
        </>
      ) : (
        <>
          <ContainerAccount
            handleChange={handleChange}
            handleChangeRegister={handleChangeRegister}
            login_authentic={login_authentic}
            register_authentic={register_authentic}
          />
        </>
      )}
    </>
  )
}

export default App