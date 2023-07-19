import { Helmet } from "react-helmet-async"
import { useParams } from 'react-router-dom'

import styles from '../../assets/css/output.module.css'

export function Notes(){
    const {user}: any = useParams()
    return(
        <>
            <Helmet>
                <title>Gym Notes - {user} Notes</title>
            </Helmet>
            <div className={styles.page}>
                <div className={styles.page_top_container}>
                    <h2  className={styles.page_title}> 
                        <span>{user}'s</span> notes
                    </h2>
                </div>
            </div>
        </>
    )
}