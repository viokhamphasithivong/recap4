import { initialColors } from "./lib/colors"; //getting array of colors
import Color from "./Components/Color/Color"; //getting component for card
import ColorForms from "./Components/Color/ColorForms.jsx";
import "./App.css"; //getting style 

function App() {
  return (
    <>
      <h1>Theme Creator</h1>
      
        <ColorForms roleData={initialColors}/>

        {initialColors.map(color => (

        <Color color={color} key={color.id}/>

      ))}
      
    </>
  );
}

export default App;
