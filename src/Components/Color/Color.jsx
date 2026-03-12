import "./css/Color.css";
import { useState, useEffect } from "react";
import Forms from "../ColorForm/Forms";
import CopyToClipboard from "../CopyToClipboard";

export default function Color({ color, onDelete, onUpdate }) {
  const [colorToDelete, setColorToDelete] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [contrastScore, setContrastScore] = useState(null);
  const [loading, setLoading] = useState(false);

  async function checkContrast(hex, contrastText) {
    if (!hex || !contrastText);
    setLoading(true);
    try {
      const response = await fetch(
        "https://www.aremycolorsaccessible.com/api/are-they",
        {
          mode: "cors",
          method: "POST",
          body: JSON.stringify({
            colors: [hex, contrastText],
          }),
          headers: { "Content-Type": "application/json" },
        },
      );
      const data = await response.json();

      setContrastScore(data.overall);
    } catch (error) {
      console.error("Contrast check failed:", error);
      setContrastScore("Error");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    checkContrast(color.hex, color.contrastText);
  }, [color.hex, color.contrastText]);

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
      <div
        className="color-card"
        style={{ backgroundColor: color.hex, color: color.contrastText }}
      >
        <Forms
          onSubmit={handleEditSubmit}
          defaultValues={{
            role: color.role,
            hex: color.hex,
            contrast: color.contrastText,
          }}
        />
        {!loading && contrastScore && (
          <p
            style={{
              color:
                contrastScore === "Yup"
                  ? "lime"
                  : contrastScore === "Kinda"
                    ? "orange"
                    : "red",
            }}
          >
            Overall Score: {contrastScore}
          </p>
        )}

        <button onClick={() => setIsEditing(false)}>Cancel</button>
      </div>
    );
  }
  return (
    <div
      className="color-card"
      style={{ backgroundColor: color.hex, color: color.contrastText }}
    >
      <p className="color-card-headline">{color.hex}</p>{" "}
      <CopyToClipboard text={color.hex} />
      <p className="color-card-role">Role: {color.role}</p>
      <p>
        Contrast:{" "}
        <span className="color-card-contrast">{color.contrastText}</span>
      </p>
      {loading && <p>Checking contrast...</p>}
      {!loading && contrastScore && (
        <p
          style={{
            color:
              contrastScore === "Yup"
                ? "lime"
                : contrastScore === "Kinda"
                  ? "orange"
                  : "red",
          }}
        >
          Overall Score: <strong>{contrastScore}</strong>
        </p>
      )}
      <button onClick={() => setColorToDelete(true)}>Delete</button>
      <button onClick={() => setIsEditing(true)}>Edit</button>
      {colorToDelete && (
        <div className="color-card-highlight">
          <p className="color-card-highlight">
            Willst du die Farbe {color.role} wirklich löschen?
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
