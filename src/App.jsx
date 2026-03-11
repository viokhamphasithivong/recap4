import { initialColors } from "./lib/colors"; //getting array of colors
import Color from "./Components/Color/Color"; //getting component for card
import Forms from "./Components/ColorForm/Forms.jsx";
import "./App.css"; //getting style 
import { useState } from "react";


function App() {
  const [colors, setColors] = useState(initialColors);
 
function handleAddColor(newColor) {
  const colorWithId = {
    id: crypto.randomUUID(),
    ...newColor
  };
  setColors((prevColors) => [ colorWithId, ...prevColors]);
}
  

  function handleDeleteColor(id) {
    setColors(prev => prev.filter(colors => colors.id !== id));
  }

  function handleUpdateColor(updatedColor) {
  setColors((prevColors) =>
    prevColors.map((color) =>
      color.id === updatedColor.id ? updatedColor : color
    )
  );
}

  return (
    <>
      <h1>Theme Creator</h1>
      
        <Forms onSubmit={handleAddColor} 
        defaultValues={{ role: colors.role, hex: colors.hex, contrast: colors.contrastText 
  }}  />

        
        {colors.map(color => (
        <Color color={color} key={color.id}
        onDelete={() => handleDeleteColor(color.id)} onUpdate={handleUpdateColor}/>
      ))}
      
      

          {colors.length === 0 && (
        <p className="color-card-highlight">
          Es gibt noch keine Farben. Füge neue Farben hinzu!
        </p>
      )}
    </>
  );
}

export default App;
