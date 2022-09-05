import styles from '../styles/Inputs.module.css'

export default function Button(props) {
  return (
    <div className={styles.input__container}>
        <button type={props.type} id={props.id} className={styles.button__submit}>{props.content}</button>
    </div>
  )
}