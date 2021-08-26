import Card from './Card'
import styles from './Error.module.css'
import Button from './Button'
export default function Error() {
    return (
        

                <Card>
                    <header className={styles.header}>
                        <h2>Invalid input</h2>
                    </header>
                    <p className={styles.content}>Please enter a valid name and age (non-empty values)</p>
                    <div className={styles.actions}>
                        <Button content='Okey' type='submit' />
                    </div>               
                </Card>
           

    )
}