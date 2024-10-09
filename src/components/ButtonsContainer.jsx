import React from "react";
import styles from "../components/ButtonsContainer.module.css";

const ButtonsContainer = ({onButtonClick}) => {
  const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div>
      <div className={styles.buttonsContainer}>
        {buttonNames.map((buttonName) => (
          <button className={styles.buttons} 
          onClick={() =>onButtonClick(buttonName)}
          >{buttonName}</button>
        ))}
      </div>
    </div>
  );
};

export default ButtonsContainer;
