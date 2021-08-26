import styles from "./Card.module.css"
export default function Card(props) {
    return (
        <div className={styles.card}>
        <div className={styles.container}>
                {props.children}
            </div>
        </div>

    )
}