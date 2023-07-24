import { Routes, Route } from 'react-router-dom'

// PAGES 
import { Home } from '../pages/Home'
import { Notes } from '../pages/Notes'
import { Contacts } from '../pages/Contacts'
import { About } from '../pages/About'
import { CreateNote } from '../pages/CreateNote'

export function ContainerRoutes({account}:any){
    return(
        <section>
            <Routes>
                <Route path={"/"} element={<Home account={account}/>}></Route>
                <Route path={"/notes/:user"} element={<Notes/>}></Route>
                <Route path={"/contacts"} element={<Contacts/>}></Route>
                <Route path={"/about"} element={<About/>}></Route>
                <Route path={"/create_note"} element={<CreateNote/>}></Route>
            </Routes>
        </section>
    )
}