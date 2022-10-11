import styles from '../styles/post.module.css';

import Link from 'next/link';

export default function Post({imageUrl, title, text, src}) {
    return (
        <div className={styles.post}>
            <img 
                className={styles.post__image}
                src={imageUrl} 
            />
            <p className={styles.post__title}><Link href={src}>{title}</Link></p>
            <p className={styles.post__text}>{text}</p>
        </div>
    )
}