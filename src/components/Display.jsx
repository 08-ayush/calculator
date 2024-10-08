import styles from './Display.module.css';

const Display = () => {
    console.log(styles);
  return (
    <input className={styles.display} type="text"/>
  )
}

export default Display
