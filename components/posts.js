import styles from '../styles/posts.module.css'

import Post from './post'

export default function Posts() {
    return (
        <div className={styles.posts}>
            <Post imageUrl="https://media2.giphy.com/media/IpeYSEZshTefe/giphy.gif?cid=ecf05e4778m6kru4sp8blcgdaxbodrs2zdh1am56yjvc4ypn&rid=giphy.gif&ct=g" title="똥멍청이도 이해하는 재귀함수" text="아직도 재귀함수가 뭔지 몰라? 이해를 못한 똥뭉탱이들을 위한 재귀함수 자습서! 재귀함수의 본질을 알아보자!!" src="/jaegui2" />
            <Post imageUrl="https://media2.giphy.com/media/jAe22Ec5iICCk/giphy.gif?cid=ecf05e47k550qwlh25j4nt86230jl7q7hw2zi2vo36px1qka&rid=giphy.gif&ct=g" title="For문 마스터 되기" text="아직도 for문을 이해 못한 사람들을 위한 for문 자습서! 10분만에 for문을 이해해보자!" src="/for" />
            <Post imageUrl="https://media4.giphy.com/media/BzyTuYCmvSORqs1ABM/giphy.gif?cid=ecf05e47jmerhdcnywqdse7oy94srw2zltkw49iu0htkhx8i&rid=giphy.gif&ct=g" title="[코드업] 문제 풀이 노트" text="코드업 문제집 풀면서 놓쳤던 문제 정리! 하루 5문제씩 업데이트 됩니다." src="/codeup" />
            <Post imageUrl="https://media0.giphy.com/media/S8TsC0rUwf9xGA3Hx7/giphy.gif?cid=ecf05e47errwly7lmyl3tcdmj09sf13xzhctkz9j2djqednk&rid=giphy.gif&ct=g" title="탐색기반설계 vs 관계기반설계" text="탐색기반설계는 뭐지? 관계기반설계는 또 뭘까? 알고리즘 설계 방법을 배워서 야무지게 알고리즘을 짜보자!" src="/search_algo" />
            <Post imageUrl="./images/nextjs.jpeg" title="Next.js로 하루만에 블로그 만들기" text="Next.js는 배웠는데 토이프로젝트로 뭘하지? 맨날 하던 To-do-List는 지겨워! 나만의 마크다운 블로그를 만들어보자!" src="/blog" />
            <Post imageUrl="https://velog.velcdn.com/images/given-woo/post/68f0717a-2ef4-472b-a5c4-499be3aefecb/image.gif" title="재귀함수랑 짱친먹기" text="재귀함수는 왜 어려운거지? 재귀함수랑 빠르게 친해질 수 있는 방법은 없을까? 재귀함수를 새롭고 독창적인 시각으로 바라보고 재귀함수랑 짱친먹자!" src="/jaegui" />
        </div>
    )
}