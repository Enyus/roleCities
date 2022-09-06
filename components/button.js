import React from 'react'
import styles from '../styles/Inputs.module.css'

class Button extends React.Component {
  render() {
    return (
    <div className={styles.input__container}>
        <button type={this.props.type} id={this.props.id} className={styles.button__submit}>{this.props.content}</button>
    </div>
    )
  }
}

export default Button;