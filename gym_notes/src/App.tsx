import { useState } from "react"
import { useRef } from "react"
import { useNavigate } from 'react-router-dom'

// IMPORT [ROUTES]
import { ContainerAccount } from './components/routes/ContainerAccount'
import { ContainerRoutes } from './components/routes/ContainerRoutes'

// IMPORT [COMPONENTS]
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'

// IMPORT [LOGIN]
import { auth_link } from './components/pages/account/Auth'


function App(){
  const navigate = useNavigate()

  const registerRef = useRef<HTMLInputElement>(null)
  const con_registerRef = useRef<HTMLInputElement>(null)

  const [isLogged, setIsLogged] = useState(false)

  const [account, setAccount] = useState({})
  const [user, setUser] = useState({
    "user": ""
  })
  
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
          localStorage.setItem("token", data['token'])
          setAccount(data)
          setUser(data['user'])
          setIsLogged(true)
          navigate('/home/')
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
          registerRef.current!.style.border = 'none'
          con_registerRef.current!.placeholder = "Type your password"

          registerRef.current!.style.border = 'none'
          con_registerRef.current!.placeholder = "Confirm your password"
          
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
        registerRef.current!.style.border = '2px solid red'
        registerRef.current!.placeholder = "Different passwords"

        con_registerRef.current!.style.border = '2px solid red'
        con_registerRef.current!.placeholder = "Different passwords"

        // clean input's values
        e.target.reset()
      }
  }

  // =================================================
  function logout(){
    localStorage.clear()
    setIsLogged(false)
  }

  // =================================================
  // useEffect(() => {
  //   if(localStorage.length > 0){
  //     window.alert("Auto login enabled!")

  //     fetch(auth_link.auto_login_auth, {
  //       method:'POST',
  //       body:JSON.stringify({"token": localStorage.getItem("token")}),
  //       headers:{
  //           'Content-Type':'application/json'
  //       }
  //     })
  //       .then((resp) => resp.json())
  //       .then((data) => {
  //         setAccount(data)
  //         setIsLogged(true)
  //         navigate('/home/')
  //       })
  //   }
  // }, [])

  return (
    <>
      {isLogged ? (
        <>
          <Navbar user={user['user']} logout={logout}/>
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