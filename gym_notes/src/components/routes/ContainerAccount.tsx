import { Routes, Route } from 'react-router-dom'

// PAGES [ACCOUNTS]
import { SignIn } from '../pages/account/SignIn'
import { SignUp } from '../pages/account/SignUp'

export function ContainerAccount({
    handleChange,
    handleChangeRegister,
    login_authentic,
    register_authentic
}: any){
    return(
        <>
            <Routes>
                <Route path={"/"} element={<SignIn handleChange={handleChange} login_authentic={login_authentic}/>}></Route>
                <Route path={"/sign_up"} element={<SignUp handleChangeRegister={handleChangeRegister} register_authentic={register_authentic}/>}></Route>
            </Routes>
        </>
    )
}