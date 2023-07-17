import { Link } from "react-router-dom"

import styles from '../assets/css/output.module.css'

export function Footer(){
    return(
        <footer>
            <div className={styles.top_content_footer}>
                <h4 className={styles.footer_title_main}>Created by</h4>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-plain.svg" />
            </div>
            <div className={styles.line}></div>
            <div className={styles.mid_content_footer}>
                <div className={styles.mid_blocks}>
                    <div className={styles.mid_blocks_title}>
                        <h4 className={styles.footer_title_main}>Social Media</h4>
                    </div>
                    <div className={styles.mid_blocks_content}>
                        <ul className={styles.contacts_list_icons}>
                            <li>
                                <Link to={"https://github.com/Baku-Stark"} target="_blank">
                                    <abbr title="GitHub">
                                        <i className={"bi bi-github"}></i>
                                    </abbr>
                                </Link>
                            </li>
                            <li>
                                <Link to={"https://twitter.com/Walleemc2"} target="_blank">
                                    <abbr title="Twitter">
                                        <i className={"bi bi-twitter"}></i>
                                    </abbr>
                                </Link>
                            </li>
                            <li>
                                <Link to={"https://www.linkedin.com/in/wallace-freitas-92a2061b6/"} target="_blank">
                                    <abbr title="LinkedIN">
                                        <i className={"bi bi-linkedin"}></i>
                                    </abbr>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.mid_blocks}>
                    <div className={styles.mid_blocks_title}>
                        <h4 className={styles.footer_title_main}>Other Projects</h4>
                    </div>
                    <div className={styles.mid_blocks_content}>
                        <ul className={styles.info_list}>
                            <li>
                                <Link to={"https://github.com/Baku-Stark/Portfolio-Projects"} target="_blank">
                                    Portfolio Projects
                                </Link>
                            </li>
                            <li>
                                <Link to={"https://angpokedex-project.netlify.app/"} target="_blank">
                                    Pokédex
                                </Link>
                            </li>
                            <li>
                                <Link to={"https://github.com/Baku-Stark/Star-Wars-Project"} target="_blank">
                                    Star Wars Movies
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.mid_blocks}>
                    <div className={styles.mid_blocks_title}>
                        <h4 className={styles.footer_title_main}>Project Info</h4>
                    </div>
                    <div className={styles.mid_blocks_content}>
                        <ul className={styles.info_list}>
                            <li>
                                <Link to={"https://react.dev/"} target="_blank">
                                    React
                                </Link>
                            </li>
                            <li>
                                <Link to={"https://reactrouter.com/en/main"} target="_blank">
                                    React-Router-Dom
                                </Link>
                            </li>
                            <li>
                                <Link to={"https://fastapi.tiangolo.com/"} target="_blank">
                                    Fast Api
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={styles.line}></div>
            <div className={styles.bot_content_footer}>
                <p><span>Gym Notes</span> &copy; Project - 2023</p>
            </div>
        </footer>
    )
}