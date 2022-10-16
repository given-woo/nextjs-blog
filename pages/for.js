import styles from '../styles/view.module.css'

import Page from './for_md.mdx';
import { Heading1, Heading2, Heading3, Heading4, Text, Divider, List_ul, List_li, Quote, a_tag, Codeblock, Code, Img, List_ol } from '../components/view';
import Head from 'next/head';

const components = {
    h1: Heading1,
    h2: Heading2,
    h3: Heading3,
    h4: Heading4,
    p: Text,
    hr: Divider,
    ol: List_ol,
    ul: List_ul,
    li: List_li,
    blockquote: Quote,
    pre: Codeblock,
    a: a_tag,
    code: Code,
    img: Img
}

export default function page1() {
    return(
        <div class={styles.wrap}>
            <Head>
                <link href="//cdnjs.cloudflare.com/ajax/libs/KaTeX/0.9.0/katex.min.css" rel="stylesheet"/>
                <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/hack-font@3/build/web/hack.css"></link>
                <meta property="og:description" content="아직도 for문을 이해 못한 사람들을 위한 for문 자습서! 10분만에 for문을 이해해보자!"></meta>
                <title>For문 마스터 되기</title>
            </Head>
            <div className={styles.content}>
                <h1 className={styles.title}>For문 마스터 되기</h1>
                <Page components={components} />
            </div>
        </div>
    );
}