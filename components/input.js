import React from 'react'
import styles from '../styles/Inputs.module.css'

class Input extends React.Component {
  render() {
    return (
      <div className={styles.input__container}>
          <label className={styles.input__label} htmlFor={this.props.id}>{this.props.label}</label>
          <input type={this.props.type} id={this.props.id} className={styles.input__text} placeholder={this.props.placeholder}/>
      </div>
    )
  }
}

export default Input;