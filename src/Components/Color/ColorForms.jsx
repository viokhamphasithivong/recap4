import "./css/color-forms.css";
import "./css/color-forms-role.css";
import SelectRole from "../SelectRole.jsx"
import Forms from "../Forms.jsx"
import Buttons from "../Buttons.jsx"


export default function ColorForms({roleData}) {
 console.log(roleData)
 
  return (
    <div className="color-forms">
      
     <SelectRole roleData={roleData}/>

      <div className="color-forms-role">

        <Forms/>

      </div>

     <Buttons/>

    </div>
  );
}
