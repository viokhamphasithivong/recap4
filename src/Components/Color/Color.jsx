import "./css/Color.css";
import { useState } from "react";

export default function Color({ color, onDelete }) {
 const [colorToDelete, setColorToDelete] = useState(null); 



  return (
    <div className="color-card" style={{backgroundColor: color.hex, color: color.contrastText}}>

      <p className="color-card-headline">{color.hex}</p>
      <p className="color-card-role">Role: {color.role}</p>
      <p >Contrast: <span className="color-card-contrast">{color.contrastText}</span></p>
      <button onClick={() => setColorToDelete(true)}  >
        DELETE
      </button>
     
      {colorToDelete && (
        <div className="color-card-highlight">
          <p className="color-card-highlight">
            Willst du die Farbe {colorToDelete.role} wirklich löschen?
          </p>
          <button onClick={onDelete}>Ja, löschen</button>
          <button onClick={() => setColorToDelete(false)}>Nein, abbrechen</button>
        </div>
      )}
    </div>
    
    
  )

}


