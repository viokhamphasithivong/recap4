import "./css/color-forms.css";
import "./css/color-forms-role.css";

export default function ColorForms () {
    return <div className="color-forms">
               
                
      <div className="color-forms-role">          
                <label>Role</label>
                <input type='text' id='role' placeholder="Pick your role here"></input>


    
                <label>Hex Color</label>
                <input type='color'></input><input placeholder="Your Hex Color Code"></input>
                
                <label>Contrast Text Color</label>
                <input type='color'></input><input placeholder="Your Contrast Text Color"></input>

                
                </div>

                <button>Add new color card</button> <button>Reset</button>

           </div>
}