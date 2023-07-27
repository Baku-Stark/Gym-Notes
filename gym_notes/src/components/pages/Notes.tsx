import { useState, useEffect } from "react"
import { Helmet } from "react-helmet-async"
import { Link, useParams } from 'react-router-dom'

import { note_auth } from "./Note_Auth"

import styles from '../../assets/css/output.module.css'

export function Notes(){
    const {user}: any = useParams()

    const [userNotes, setUserNotes] = useState([])

    // =================================================
    useEffect(() => {
        fetch(`${note_auth.read}/${user}`, {
            method:'GET',
            headers:{
                'Content-Type':'application/json'
            }
        })
            .then((resp) => resp.json())
            .then((data) => {
                // console.log(data)
                setUserNotes(data)
            })
            .catch((err) => console.log(err))
    }, [])
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
                    {userNotes.map((array_note) => (
                        <div className={styles.card_note}>
                            <div className={styles.card_top}>
                                <h4>{array_note[1]}</h4>
                            </div>
                            <div className={styles.card_mid}>
                                <p>
                                    {array_note[2]}
                                </p>
                            </div>
                            <div className={styles.card_bot}>
                                <Link
                                    to={`/edit_note/${array_note[1]}/${user}/${array_note[0]}`}
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
                    ))}

                </div>
            </div>
        </>
    )
}