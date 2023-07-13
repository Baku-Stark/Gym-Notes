import { Helmet } from "react-helmet-async"
import { useParams } from 'react-router-dom'

export function Notes(){
    const {user}: any = useParams()
    return(
        <div>
            <Helmet>
                <title>Gym Notes - {user} Notes</title>
            </Helmet>
            <h1>{user}'s notes</h1>
        </div>
    )
}