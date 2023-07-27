import { Link } from 'react-router-dom'

import styles from '../../assets/css/output.module.css'

export function Error(){
    return(
        <>
            <div className={styles.page_top_container}>
                <h2  className={styles.page_title}>Error
                </h2>
                <Link to={"/"}>Return to login page</Link>
            </div>
        </>
    )
}