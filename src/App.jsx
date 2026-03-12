import { initialColors } from "./lib/colors"; //getting array of colors
import Color from "./Components/Color/Color"; //getting component for card
import Forms from "./Components/ColorForm/Forms.jsx";
import "./App.css"; //getting style 
/* import { useState } from "react"; */
import useLocalStorageState from "use-local-storage-state";

function App() {
  const [colors, setColors] = useLocalStorageState({
    defaultValue: initialColors,
  });

function handleAddColor(newColor) {
  const colorWithId = {
    id: crypto.randomUUID(),
    ...newColor
  };
  setColors((prevColors) => [ colorWithId, ...prevColors]);
}
  

  function handleDeleteColor(id) {
    setColors(prev => prev.filter(color => color.id !== id));
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
      
        <Forms  onSubmit={handleAddColor} 
        
   />

        
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
