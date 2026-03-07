import { initialColors } from "./lib/colors"; //getting array of colors
import Color from "./Components/Color/Color"; //gettiing component for card
import "./App.css"; //getting style 

function App() {
  return (
    <>
      <h1>Theme Creator</h1>
      {/* mapping through array of colors (schleife) */}
      {initialColors.map(color => (
        
        /* passing color object into Color component */
        <Color color={color} key={color.id}/>
      ))}
      
    </>
  );
}

export default App;
