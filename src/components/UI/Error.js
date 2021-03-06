import Card from './Card'
import styles from './Error.module.css'
import Button from './Button'
export default function Error(props) {
    let defaultValue = props.ermessage.length > 0 ? props.ermessage :'(non-empty values)' 
    return (
        <div className={styles.backdrop}>
            <div className={styles.modal}>
                <header className={styles.header}>
                    <h2>Invalid input</h2>
                </header>
                <p className={styles.content}>Please enter a valid name and age {defaultValue}</p>
                <div className={styles.actions}>
                    <Button content='Okey' type='submit' onClick={props.onClick} />
                </div>
            </div>
        </div>
    )
}