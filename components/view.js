import rehypeHighlight from 'rehype-highlight';
import { useState, useEffect } from 'react';
import {compile} from '@mdx-js/mdx';
import styles from '../styles/view.module.css'

function Heading1({children}) {
    return(
        <h1 className={styles.Heading1}>{children}</h1>
    )
}

function Heading2({children}) {
    return(
        <h2 className={styles.Heading2}>{children}</h2>
    )
}

function Heading3({children}) {
    return(
        <h3 className={styles.Heading3}>{children}</h3>
    )
}

function Heading4({children}) {
    return(
        <h4 className={styles.Heading4}>{children}</h4>
    )
}

function Text({children}) {
    return(
        <p className={styles.text}>{children}</p>
    )
}

function Divider({children}) {
    return(
        <hr className={styles.divider}>{children}</hr>
    )
}

function List_ul({children}) {
    return(
        <ul className={styles.list_ul}>{children}</ul>
    )
}

function List_li({children}) {
    return(
        <li className={styles.list_li}>{children}</li>
    )
}

function Quote({children}) {
    return(
        <blockquote className={styles.quote}>{children}</blockquote>
    )
}

function Codeblock({children}) {
    return (
        <pre className={styles.codeblock}>
            {children}
        </pre>
    )
}

function Code({children}) {
    return (
        <code className={styles.code}>
            {children}
        </code>
    )
}

function a_tag({href, children}) {
    return (
        <a href={href} className={styles.link}>{children}</a>
    )
}

function Img({src, alt}) {
    return (
        <div className={styles.image}>
            <img src={src} alt={alt} />
        </div>
    )
}

export { Heading1, Heading2, Heading3, Heading4, Text, Divider, List_ul, List_li, Quote, a_tag, Codeblock, Code, Img };