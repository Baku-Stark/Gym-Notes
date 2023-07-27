import { useState, useEffect } from "react"
import { Helmet } from "react-helmet-async"
import { useNavigate, useParams } from "react-router-dom"

import { note_auth } from "./Note_Auth"

import styles from '../../assets/css/output.module.css'

export function EditNote(){
    const navigate = useNavigate()

    const {title, user, id}: any = useParams()

    const [editNote, setEditNote] = useState({"title": '', "text": ''})
    function handleChange(e:any){
        setEditNote({
            ...editNote,
            [e.target.name]: e.target.value
        })
    }

    async function editUserNote(e: any){
        e.preventDefault()

        await fetch(`${note_auth.update}/${user}_${id}`, {
            method:'PUT',
            body:JSON.stringify(editNote),
            headers:{
                'Content-Type':'application/json'
            }
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data)
            })
            .catch((err) => console.log(err))

        // clean input's values
        e.target.reset()
        navigate(`/notes/${user}`)
    }

    // =================================================
    useEffect(() => {
        console.log(title)
        console.log(user)
        console.log(id)
    }, [])

    return(
        <>
            <Helmet>
                <title>Edit Note - {title}</title>
            </Helmet>
            <div className={styles.page}>
                <div className={styles.page_top_container}>
                    <h2  className={styles.page_title}>Edit your Note</h2>
                    <span>Note: {title}</span>
                </div>
                <div className={styles.bot_container}>
                    <div className={styles.create_note_container}>
                        <form onSubmit={editUserNote} method="post">
                            <div className={styles.form_block}>
                                <label htmlFor="title">
                                    Note Title:
                                </label>
                                <input
                                    id="title"
                                    name="title"
                                    type="text"
                                    placeholder={title}
                                    className={styles.new_note_title}
                                    maxLength={45}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className={styles.form_block}>
                                <textarea
                                    name="text"
                                    placeholder="Type your new note"
                                    maxLength={200}
                                    onChange={handleChange}
                                    required
                                >
                                </textarea>
                            </div>
                            <div className={styles.form_block}>
                                <input type="submit" value="Edit Note" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}