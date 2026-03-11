import "./Color/css/color-forms.css";
import { useState, useEffect } from "react";


export default function ColorInput({ id, defaultValue = "#000000", placeHolder, name }) {
  const [inputValue, setInputValue] = useState(defaultValue);

 useEffect(() => {
    setInputValue(defaultValue);
  }, [defaultValue]);

  function handleInputValue(event) {
    setInputValue(event.target.value); 
  }

     

    return ( 
    <>
        <input
          type="color"
          value={inputValue}
          onChange={handleInputValue}
          
        />

        <input
          id={id}
          name={name || id}
          value={inputValue}
          onChange={handleInputValue}
          placeholder={placeHolder}
        />

    </>
    )
}