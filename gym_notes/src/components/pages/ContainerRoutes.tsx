import { Routes, Route } from 'react-router-dom'

// PAGES 
import { Home } from './Home'
import { Notes } from './Notes'
import { Contacts } from './Contacts'
import { About } from './About'

export function ContainerRoutes(){
    return(
        <section>
            <Routes>
                <Route path={"/"} element={<Home/>}></Route>
                <Route path={"/notes/:user"} element={<Notes/>}></Route>
                <Route path={"/contacts"} element={<Contacts/>}></Route>
                <Route path={"/about"} element={<About/>}></Route>
            </Routes>
        </section>
    )
}