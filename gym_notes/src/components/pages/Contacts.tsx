import { Helmet } from "react-helmet-async"

// IMPORT[IMAGES]
import type_1 from '../../assets/img/type_1.jpg'
import type_2 from '../../assets/img/type_2.jpg'
import trainer_1 from '../../assets/img/trainer_1.jpg'
import trainer_2 from '../../assets/img/trainer_2.jpg'
import trainer_3 from '../../assets/img/trainer_3.jpg'
import trainer_4 from '../../assets/img/trainer_4.jpg'

import styles from '../../assets/css/output.module.css'

export function Contacts(){
    return(
        <div>
            <Helmet>
                <title>Gym Notes - Contacts</title>
            </Helmet>
            <div className={styles.contacts_container}>
                <div className={styles.contacts_top_container}>
                    <h2 className={styles.page_title}>Support</h2>
                </div>
                <div className={styles.contacts_bot_container}>
                    <div className={styles.cards_trainer}>
                        <div className={styles.top_field_card}>
                            <img src={type_1}/>
                        </div>
                        <div className={styles.mid_field_card}>
                            <div  className={styles.labels_1}>
                                <h4>Muscle Training</h4>
                            </div>
                            <div  className={styles.labels_1}>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. At id perspiciatis voluptate illo molestiae. Corrupti cumque mollitia nam sint, laborum est rem, maiores saepe nihil enim, quidem facilis dolore. Corrupti.
                                </p>
                            </div>
                            <div className={styles.labels_2}>
                                <div>
                                    <i className={"bi bi-clock-fill"}></i>
                                    <span>7 hours</span>
                                </div>
                                <div>
                                    <i className={"bi bi-calendar"}></i>
                                    <span>07/17/2023</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.line_card}></div>
                        <div className={styles.bot_field_card}>
                            <img src={trainer_1} className={styles.icon_profile}/>
                            <h4>Amanda</h4>
                        </div>
                    </div>
                    <div className={styles.cards_trainer}>
                        <div className={styles.top_field_card}>
                            <img src={type_1}/>
                        </div>
                        <div className={styles.mid_field_card}>
                            <div  className={styles.labels_1}>
                                <h4>Weightlifting</h4>
                            </div>
                            <div  className={styles.labels_1}>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. At id perspiciatis voluptate illo molestiae. Corrupti cumque mollitia nam sint, laborum est rem, maiores saepe nihil enim, quidem facilis dolore. Corrupti.
                                </p>
                            </div>
                            <div className={styles.labels_2}>
                                <div>
                                    <i className={"bi bi-clock-fill"}></i>
                                    <span>12 minutes</span>
                                </div>
                                <div>
                                    <i className={"bi bi-calendar"}></i>
                                    <span>07/17/2023</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.line_card}></div>
                        <div className={styles.bot_field_card}>
                            <img src={trainer_2} className={styles.icon_profile}/>
                            <h4>Lucas</h4>
                        </div>
                    </div>
                    <div className={styles.cards_trainer}>
                        <div className={styles.top_field_card}>
                            <img src={type_2}/>
                        </div>
                        <div className={styles.mid_field_card}>
                            <div  className={styles.labels_1}>
                                <h4>Stretching</h4>
                            </div>
                            <div  className={styles.labels_1}>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. At id perspiciatis voluptate illo molestiae. Corrupti cumque mollitia nam sint, laborum est rem, maiores saepe nihil enim, quidem facilis dolore. Corrupti.
                                </p>
                            </div>
                            <div className={styles.labels_2}>
                                <div>
                                    <i className={"bi bi-clock-fill"}></i>
                                    <span>1 month</span>
                                </div>
                                <div>
                                    <i className={"bi bi-calendar"}></i>
                                    <span>07/17/2023</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.line_card}></div>
                        <div className={styles.bot_field_card}>
                            <img src={trainer_3} className={styles.icon_profile}/>
                            <h4>Alice</h4>
                        </div>
                    </div>
                    <div className={styles.cards_trainer}>
                        <div className={styles.top_field_card}>
                            <img src={type_2}/>
                        </div>
                        <div className={styles.mid_field_card}>
                            <div  className={styles.labels_1}>
                                <h4>Breathing Training</h4>
                            </div>
                            <div  className={styles.labels_1}>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. At id perspiciatis voluptate illo molestiae. Corrupti cumque mollitia nam sint, laborum est rem, maiores saepe nihil enim, quidem facilis dolore. Corrupti.
                                </p>
                            </div>
                            <div className={styles.labels_2}>
                                <div>
                                    <i className={"bi bi-clock-fill"}></i>
                                    <span>20 minutes</span>
                                </div>
                                <div>
                                    <i className={"bi bi-calendar"}></i>
                                    <span>07/17/2023</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.line_card}></div>
                        <div className={styles.bot_field_card}>
                            <img src={trainer_4} className={styles.icon_profile}/>
                            <h4>George</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}