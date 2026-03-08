import "./css/color-forms.css";
import "./css/color-forms-role.css";
import SelectRole from "../SelectRole.jsx"

export default function ColorForms({roleData}) {
 console.log(roleData)
 
  return (
    <div className="color-forms">
      
     <SelectRole roleData={roleData}/>
     
      <div className="color-forms-role">
        
        <label>Hex Color</label>

        <div>
          <input type="color" />
          <input placeholder="Your Hex Color Code" />
        </div>
      </div>
      <div className="color-forms-role">
        
        <label>Contrast Text Color</label>

        <div>
          <input type="color"></input>
          <input placeholder="Your Contrast Text Color"></input>
        </div>
      </div>
      <button>Add new color card</button> <button>Reset</button>
    </div>
  );
}
