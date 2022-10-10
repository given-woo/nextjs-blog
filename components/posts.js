import styles from '../styles/posts.module.css'

import Post from './post'

export default function Posts() {
    return (
        <div className={styles.posts}>
            <Post imageUrl="/images/macbook1.jpg" title="SAMPLE TITLE FOR TESTING 1" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
            <Post imageUrl="/images/macbook1.jpg" title="SAMPLE TITLE FOR TESTING 2" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
            <Post imageUrl="/images/macbook1.jpg" title="SAMPLE TITLE FOR TESTING 3" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
            <Post imageUrl="/images/macbook1.jpg" title="SAMPLE TITLE FOR TESTING 4" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
        </div>
    )
}