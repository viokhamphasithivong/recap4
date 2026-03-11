import "./css/Color.css";
import { useState } from "react";
import Forms from "../ColorForm/Forms";

export default function Color({ color, onDelete, onUpdate }) {
  const [colorToDelete, setColorToDelete] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditSubmit(updatedData) {
    const updatedColor = {
      ...color,
      ...updatedData,
    };

    onUpdate(updatedColor);
    setIsEditing(false);
  }

  if (isEditing) {
    return (
      <div className="color-card" style={{ backgroundColor: color.hex, color: color.contrastText }}>
        <Forms onSubmit={handleEditSubmit} defaultValues={{
              role: color.role,
              hex: color.hex,
              contrast: color.contrastText,
            }} />
        <button onClick={() => setIsEditing(false)}>Cancel</button>
      </div>
    );
  }
  return (
    <div
      className="color-card"
      style={{ backgroundColor: color.hex, color: color.contrastText }}
    >
      <p className="color-card-headline">{color.hex}</p>
      <p className="color-card-role">Role: {color.role}</p>
      <p>
        Contrast:{" "}
        <span className="color-card-contrast">{color.contrastText}</span>
      </p>
      <button onClick={() => setColorToDelete(true)}>Delete</button>
      <button onClick={() => setIsEditing(true)}>Edit</button>
      
      {colorToDelete && (
        <div className="color-card-highlight">
          <p className="color-card-highlight">
            Willst du die Farbe {colorToDelete.role} wirklich löschen?
          </p>
          <button onClick={onDelete}>Ja, löschen</button>
          <button onClick={() => setColorToDelete(false)}>
            Nein, abbrechen
          </button>
        </div>
      )}
    </div>
  );
}
