import { useState } from "react"
import { Link } from "react-router-dom"
import { Helmet } from "react-helmet-async"

// CSS PRINCIPAL
import styles from '../../../assets/css/output.module.css'

export function SignIn(){
    const [login, setLogin] = useState(
        {"user": "", "password": ""}
    )

    function handleChange(e:any){
        setLogin({
            ...login,
            [e.target.name]: e.target.value
        })
    }
    
    function login_authentic(e:any){
        e.preventDefault()
        console.log(login)

        // clean input's values
        e.target.reset()
    }

    return(
        <>
            <Helmet>
                <title>Sign In - Login</title>
            </Helmet>
            <div className={styles.login_container}>
                <div className={styles.top_container}>
                    <h3>LOGIN</h3>
                </div>
                <div className={styles.bot_container}>
                    <form
                        method="post"
                        onSubmit={login_authentic}
                        className={styles.authentic_form}
                    >
                        <div className={styles.form_block}>
                            <i className={"bi bi-person-fill"}></i>
                            <input
                                type="text"
                                name="user"
                                id="user"
                                placeholder="Type your username"
                                className={styles.user}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className={styles.form_block}>
                            <i className={"bi bi-shield-lock-fill"}></i>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Type your password"
                                className={styles.password}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className={styles.form_block}>
                            <input type="submit" value="LOGIN" />
                        </div>
                        <div className={styles.link_block}>
                            <Link to={"/sign_up"}>I don't have an account</Link>
                            <Link to={"/forg_pass"}>I forgot my password</Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}