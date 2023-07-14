import { Link } from 'react-router-dom'

// IMAGES
import personal from '../assets/img/personal_trainer.svg'

// CSS PRINCIPAL
import styles from '../assets/css/output.module.css'

export function Navbar(){
    const user = "wallace"
    return(
        <header>
            <nav>
                <div className={styles.navbar_title_container}>
                    <Link to={"/"} about='Home Page'>
                        <h1 className={styles.main_title}>Gym Notes Project</h1>
                    </Link>
                </div>
                <div className={styles.navbar_image_container}>
                    <img src={personal} alt="LOGOTIPO" />
                    <button className={styles.button_bar}>
                        <i className={"bi bi-list"}></i>
                    </button>
                </div>

                {/* ===== NAVBAR LINKS ===== */}
                <div className={styles.navbar_link_container}>
                    <ul className={styles.link_list_navbar}>
                        <li className={styles.link_item_navbar}>
                            <Link to={`/notes/${user}`}>Notes</Link>
                        </li>
                        <li className={styles.link_item_navbar}>
                            <Link to={"/contacts/"}>Contacts</Link>
                        </li>
                        <li className={styles.link_item_navbar}>
                            <Link to={"/about/"}>About</Link>
                        </li>
                        <Link to={"/sign_in/"} className={`${styles.link_item_navbar} ${styles.login}`}>Login</Link>
                    </ul>
                </div>
                {/* ===== END OF NAVBAR LINKS ===== */}

                {/* ===== SIDEBAR ===== */}
                <div className={styles.navbar_sidebar_container}>
                    <div className={styles.sidebar_title}>
                        <h1 className={styles.main_title}>Gym Notes Project</h1>
                        <button className={styles.button_bar}>
                            <i className={"bi bi-x-lg"}></i>
                        </button>
                    </div>
                    <ul className={styles.link_list_sidebar}>
                        <li className={styles.link_item_sidebar}>
                            <i className={"bi bi-grid-3x2-gap-fill"}></i>
                            <Link to={`/notes/${user}`}>Notes</Link>
                        </li>
                        <li className={styles.link_item_sidebar}>
                            <i className={"bi bi-phone-fill"}></i>
                            <Link to={"/contacts/"}>
                                Contacts
                            </Link>
                        </li>
                        <li className={styles.link_item_sidebar}>
                            <i className={"bi bi-list-ul"}></i>
                            <Link to={"/about/"}>About</Link>
                        </li>

                        {/* LOGIN | REGISTER */}
                        <Link to={"/sign_in/"} className={styles.link_item_sidebar_login}>Login</Link>
                    </ul>
                </div>
                {/* ===== END OF SIDEBAR ===== */}
            </nav>
        </header>
    )
}