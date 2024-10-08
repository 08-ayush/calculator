import React from 'react'
import styles from '../components/ButtonsContainer.module.css'

const ButtonsContainer = () => {

    const buttonNames = ['C', '1', '2', '+', '3' , '4', '-', '5', '6', '*','7', '8', '/', '=', '9', '0',  '.']
  return (
    <div>
       <div className={styles.buttonsContainer}>
        {buttonNames.map((button)=>
            <button className={styles.buttons}>{button}</button>)}
         </div>
    </div>
  )
}

export default ButtonsContainer
