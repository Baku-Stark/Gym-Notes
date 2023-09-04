import { Routes, Route } from 'react-router-dom'

// PAGES [ACCOUNTS]
import { SignIn } from '../pages/account/SignIn'
import { SignUp } from '../pages/account/SignUp'
import { Error } from '../pages/Error'

export function ContainerAccount({
    registerRef,
    con_registerRef,
    handleChange,
    handleChangeRegister,
    login_authentic,
    register_authentic
}: any){
    return(
        <>
            <Routes>
                <Route path={"/"} element={<SignIn handleChange={handleChange} login_authentic={login_authentic}/>}></Route>
                <Route path={"/sign_up"} element={<SignUp registerRef={registerRef} con_registerRef={con_registerRef} handleChangeRegister={handleChangeRegister} register_authentic={register_authentic}/>}></Route>
                <Route path={"/*"} element={<Error/>}></Route>
            </Routes>
        </>
    )
}