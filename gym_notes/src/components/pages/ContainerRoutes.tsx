import { Routes, Route } from 'react-router-dom'

// PAGES 
import { Home } from './Home'
import { Notes } from './Notes'
import { Contacts } from './Contacts'
import { About } from './About'
// PAGES [ACCOUNTS]
import { SignIn } from './Account/SignIn'
import { SignUp } from './Account/SignUp'
import { CreateNote } from './CreateNote'

export function ContainerRoutes(){
    return(
        <section>
            <Routes>
                <Route path={"/"} element={<Home/>}></Route>
                <Route path={"/notes/:user"} element={<Notes/>}></Route>
                <Route path={"/contacts"} element={<Contacts/>}></Route>
                <Route path={"/about"} element={<About/>}></Route>
                <Route path={"/sign_in"} element={<SignIn/>}></Route>
                <Route path={"/sign_up"} element={<SignUp/>}></Route>
                <Route path={"/create_note"} element={<CreateNote/>}></Route>
            </Routes>
        </section>
    )
}