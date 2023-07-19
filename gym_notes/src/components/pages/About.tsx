import { Link } from "react-router-dom"
import { Helmet } from "react-helmet-async"

import styles from '../../assets/css/output.module.css'

export function About(){
    return(
        <>
            <Helmet>
                <title>Gym Notes - About Project</title>
            </Helmet>
            <div className={styles.about_container}>
                <div className={styles.page_top_container}>
                    <h2 className={styles.page_title}>About Project</h2>
                </div>
                <div className={styles.about_bot_container}>
                    <p>
                        The "Gym Notes" project was created to address skills in Full Stack development using the <span>React</span> framework and Python.
                    </p>
                    <p>
                        For more information, visit the <Link to={"https://github.com/Baku-Stark"} target="_blank" className={styles.about_link_button}>
                            Developer's GitHub
                        </Link>
                    </p>
                </div>
            </div>
        </>
    )
}