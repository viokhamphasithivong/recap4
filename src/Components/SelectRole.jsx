
import {useState} from "react";


export default function SelectRole({roleData}) {
 
  const [role, setRole] = useState("");

function handleRole (event) {
  setRole(event.target.value);
  console.log(event)
}
 
 console.log(roleData)
  return (
    <div className="color-forms">
      
      <div className="color-forms-role">
        <label>Role</label>
        <div>
          <select onChange={handleRole} >
            <option >Pick your role here</option>
            
            {roleData?.map(role =>(
            
                  <option key={role.id} value={role.role}>
                {role.role}
              </option>
            
                  ))}
         
      

          </select>
        </div>
      </div>
    </div>
);
}