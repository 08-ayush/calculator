import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import React, { useState } from "react";

function App() {
  const [calval, setCalval] = useState("");
  const onButtonClick = (buttonTexts) => {
    if (buttonTexts === "=") {
      const result = eval(calval);
      setCalval(result);
    } else if (buttonTexts === "C") {
      setCalval("");
    } else {
      let newDisplay = calval + buttonTexts;
      setCalval(newDisplay);
    }
  };
  return (
    <>
      <div className={styles.calculator}>
        <Display displayValue={calval} />
        <ButtonsContainer onButtonClick={onButtonClick}></ButtonsContainer>
      </div>
    </>
  );
}

export default App;
