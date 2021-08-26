import styles from '../UI/Button.module.css'
export default function Button(props){
    return <button className={styles.button}
                   type={props.type}
                   onClick={props.onClick}
                   >{props.content}</button>
}