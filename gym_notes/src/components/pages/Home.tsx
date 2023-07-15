import { Helmet } from "react-helmet-async"

export function Home(){
    return(
        <div>
            <Helmet>
                <title>Gym Notes - Home Page</title>
            </Helmet>
            <h1>Home {"<Nome do usuário>"}</h1>
        </div>
    )
}