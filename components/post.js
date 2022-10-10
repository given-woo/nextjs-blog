import styles from '../styles/post.module.css';

export default function Post({imageUrl, title, text}) {
    return (
        <div className={styles.post}>
            <img 
                className={styles.post__image}
                src={imageUrl} 
            />
            <p className={styles.post__title}>{title}</p>
            <p className={styles.post__text}>{text}</p>
        </div>
    )
}