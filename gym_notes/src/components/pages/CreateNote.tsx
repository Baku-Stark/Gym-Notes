import { useState } from "react"
import { Helmet } from "react-helmet-async"
import { useNavigate } from "react-router-dom"

import { note_auth } from "./Note_Auth"

import styles from '../../assets/css/output.module.css'

export function CreateNote({user}: any){
    const navigate = useNavigate()

    const [note, setNote] = useState({"title": '', "text": ''})

    function handleChange(e:any){
        setNote({
            ...note,
            [e.target.name]: e.target.value
        })
    }

    async function createNewNote(e: any){
        e.preventDefault()
        // console.log(note)

        await fetch(`${note_auth.create}/${user}`, {
            method:'POST',
            body:JSON.stringify(note),
            headers:{
                'Content-Type':'application/json'
            }
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                navigate('/home/')
                // clean input's values
                e.target.reset()
            })
            .catch((err) => console.log(err))
    }

    return(
        <>
            <Helmet>
                <title>Gym Note - Create a Note</title>
            </Helmet>
            <div className={styles.page}>
                <div className={styles.page_top_container}>
                    <h2  className={styles.page_title}>Create a new note</h2>
                </div>
                <div className={styles.bot_container}>
                    <div className={styles.create_note_container}>
                        <form onSubmit={createNewNote} method="post">
                            <div className={styles.form_block}>
                                <label htmlFor="title">
                                    Note Title:
                                </label>
                                <input
                                    id="title"
                                    name="title"
                                    type="text"
                                    placeholder="Type your new note title"
                                    className={styles.new_note_title}
                                    maxLength={45}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className={styles.form_block}>
                                <textarea
                                    name="text"
                                    placeholder="Type your note"
                                    maxLength={200}
                                    onChange={handleChange}
                                    required
                                >
                                </textarea>
                            </div>
                            <div className={styles.form_block}>
                                <input type="submit" value="New Note" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}