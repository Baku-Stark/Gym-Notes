import { Helmet } from "react-helmet-async"

export function CreateNote(){
    return(
        <>
            <Helmet>
                <title>Gym Note - Create a Note</title>
            </Helmet>
            <div>
                <h2>Create a new note</h2>
            </div>
        </>
    )
}