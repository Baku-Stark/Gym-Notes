import { Helmet } from "react-helmet-async"

// CSS PRINCIPAL
import styles from '../../../assets/css/output.module.css'

export function SignIn(){
    function login_authentic(e:any){
        e.preventDefault()
    }
    return(
        <>
            <Helmet>
                <title>Sign In - Login</title>
            </Helmet>
            <div className={styles.login_container}>
                <div className={styles.top_container}>
                    <h3>Login</h3>
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
                                className={styles.user}
                                placeholder="Type your username"
                            />
                        </div>
                        <div className={styles.form_block}>
                            <i className={"bi bi-shield-lock-fill"}></i>
                            <input
                                type="password" name="password" id="password"
                                className={styles.password}
                                placeholder="Type Password"
                            />
                        </div>
                        <div className={styles.form_block}>
                            <input type="submit" value="LOGIN" />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}