import styles from '../styles/Inputs.module.css'

export default function Input(props) {
  return (
    <div className={styles.input__container}>
        <label className={styles.input__label} htmlFor={props.id}>{props.label}</label>
        <input type={props.type} id={props.id} className={styles.input__text} placeholder={props.placeholder}/>
    </div>
  )
}