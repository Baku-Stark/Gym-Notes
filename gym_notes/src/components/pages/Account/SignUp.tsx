import { Link } from "react-router-dom"
import { Helmet } from "react-helmet-async"

// CSS PRINCIPAL
import styles from '../../../assets/css/output.module.css'

export function SignUp({
    handleChangeRegister,
    register_authentic
}:any){
    return(
        <>
            <Helmet>
                <title>Sign Up - Create a account</title>
            </Helmet>
            <div className={styles.auth_container}>
                <div className={styles.register_container}>
                    <div className={styles.top_container}>
                        <h3>REGISTER</h3>
                    </div>
                    <div className={styles.bot_container}>
                        <form
                            method="post"
                            onSubmit={register_authentic}
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
                                    onChange={handleChangeRegister}
                                    maxLength={45}
                                    required
                                />
                            </div>
                            <div className={styles.form_block_2}>
                                <div>
                                    <i className={"bi bi-shield-lock-fill"}></i>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="Type your password"
                                        className={styles.password}
                                        onChange={handleChangeRegister}
                                        required
                                    />
                                </div>
                                <div>
                                    <i className={"bi bi-shield-lock-fill"}></i>
                                    <input
                                        type="password"
                                        name="con_password"
                                        id="con_password"
                                        placeholder="Confirm your password"
                                        className={styles.password}
                                        onChange={handleChangeRegister}
                                        required
                                    />
                                </div>
                            </div>
                            <div className={styles.form_block}>
                                <i className={"bi bi-envelope-at-fill"}></i>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Type your email address"
                                    className={styles.email}
                                    onChange={handleChangeRegister}
                                    required
                                />
                            </div>
                            <div className={styles.form_block}>
                                <input type="submit" value="Create" />
                            </div>
                            <div className={styles.link_block}>
                                <Link to={"/"}>I already have an account</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}