import Link from 'next/link'
import styles from '../../styles/new/about.module.css'

const tcu = <a href='https://tcu.edu' target="_blank" rel="noopener noreferrer">Texas Christian University.</a>
const about = <p className={styles.about}>
I am currently pursuing BS in Computer Science at {tcu} I am a sophomore with a passion for programming and learning new technologies.
</p>

export default function About() {
    return (
        <div className={styles.container}>
            <p>{about}</p>
        </div>
    )
}