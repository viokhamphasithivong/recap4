import "./Color/css/color-forms.css";
import { useState } from "react";


export default function ColorInput ({id, value, placeHolder}){
     
 const [inputValue, setInputValue] = useState(value, placeHolder);

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
          name={id}
          value={inputValue}
          onChange={handleInputValue}
          placeholder={placeHolder}
        />

    </>
    )
}