import { Routes, Route } from 'react-router-dom'

// PAGES 
import { Home } from '../pages/Home'
import { Notes } from '../pages/Notes'
import { Contacts } from '../pages/Contacts'
import { About } from '../pages/About'
import { CreateNote } from '../pages/CreateNote'
import { EditNote } from '../pages/EditNote'

export function ContainerRoutes({account}:any){
    return(
        <section>
            <Routes>
                <Route path={"/home"} element={<Home account={account}/>}></Route>
                <Route path={"/notes/:user"} element={<Notes/>}></Route>
                <Route path={"/contacts"} element={<Contacts/>}></Route>
                <Route path={"/about"} element={<About/>}></Route>
                <Route path={"/create_note"} element={<CreateNote user={account['user']}/>}></Route>
                <Route path={"/edit_note/:title/:user/:id"} element={<EditNote/>}></Route>
            </Routes>
        </section>
    )
}