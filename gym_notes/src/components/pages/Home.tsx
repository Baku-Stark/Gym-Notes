import { Link } from "react-router-dom"
import { Helmet } from "react-helmet-async"

import styles from '../../assets/css/output.module.css'

// IMAGE
import fitness_stats from "../../assets/img/fitness_stats.svg"

export function Home({account}:any){
    return(
        <>
            <Helmet>
                <title>Gym Notes - Home Page</title>
            </Helmet>
            <div className={styles.home_container}>
                <div className={styles.home_top_container}>
                    <img src={fitness_stats}/>
                    <h2>Welcome <span>{account['user']}</span> !</h2>
                </div>
                <div className={styles.home_bot_container}>
                    <Link to={"/create_note/"} className={styles.redirect_button}>
                        <span>Create a new note</span>
                        <i className={"bi bi-arrow-right"}></i>
                    </Link>
                </div>
            </div>
        </>
    )
}