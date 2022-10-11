import styles from '../styles/profile.module.css'

import Image from 'next/image';

export default function Profile() {
    return (
        <div className={styles.profile}>
            <img
                className={styles.profile__image}
                src="/images/ipad2.png"
            />
            <p className={styles.profile__name}>JipGaGoSipDa</p>
            <p className={styles.profile__text}>A student Developer from Korea :D</p>
            <div className={styles.profile__badge}>
                <p className={`${styles.profile__badge__item} ${styles.profile__badge__item_github}`}><a href="https://github.com/given-woo">github</a></p>
                <p className={`${styles.profile__badge__item} ${styles.profile__bage__item_instagram}`}><a href="https://www.instagram.com/recived.woo/">instagram</a></p>
                <p className={`${styles.profile__badge__item} ${styles.profile__bage__item_velog}`}><a href="https://velog.io/@given-woo">velog</a></p>
            </div>
        </div>
    )
}