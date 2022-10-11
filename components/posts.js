import styles from '../styles/posts.module.css'

import Post from './post'

export default function Posts() {
    return (
        <div className={styles.posts}>
            <Post imageUrl="./images/nextjs.jpeg" title="Next.js로 하루만에 블로그 만들기" text="Next.js는 배웠는데 토이프로젝트로 뭘하지? 맨날 하던 To-do-List는 지겨워! 나만의 마크다운 블로그를 만들어보자!" src="/blog" />
            <Post imageUrl="https://velog.velcdn.com/images/given-woo/post/68f0717a-2ef4-472b-a5c4-499be3aefecb/image.gif" title="재귀함수랑 짱친먹기" text="재귀함수는 왜 어려운거지? 재귀함수랑 빠르게 친해질 수 있는 방법은 없을까? 재귀함수를 새롭고 독창적인 시각으로 바라보고 재귀함수랑 짱친먹자!" src="/jaegui" />
        </div>
    )
}