import { Helmet } from "react-helmet-async"
import { Link, useParams } from 'react-router-dom'

import styles from '../../assets/css/output.module.css'

export function Notes(){
    const {user}: any = useParams()
    return(
        <>
            <Helmet>
                <title>Gym Notes - {user} Notes</title>
            </Helmet>
            <div className={`${styles.page} ${styles.w_100}`}>
                <div className={styles.page_top_container}>
                    <h2  className={styles.page_title}> 
                        <span>{user}'s</span> notes
                    </h2>
                </div>
                <div className={styles.card_container}>
                    
                    <div className={styles.card_note}>
                        <div className={styles.card_top}>
                            <h4>{"<Título da anotação>"}</h4>
                        </div>
                        <div className={styles.card_mid}>
                            <p>
                                {"<Texto>"}
                            </p>
                        </div>
                        <div className={styles.card_bot}>
                            <Link
                                to={"/edit_note/"}
                                className={`${styles.button_opc} ${styles.edit}`}
                            >
                                Edit
                            </Link>
                            <button
                                className={`${styles.button_opc} ${styles.delete}`}
                            >
                                Delete
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}