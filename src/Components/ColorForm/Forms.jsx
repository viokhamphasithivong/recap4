
import ColorInput from "../ColorInput";


export default function FormApp({onSubmit, defaultValues,
  placeholderText={role:"Type in your Color Role", hex:"Your Hex Color Code",contrast:"Your Contrast Color"}}
) {

  function handleColorData(event) {
 
     event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data)
    onSubmit(data);
  }

  return (
    <>
    <form onSubmit={handleColorData} >
      <label>Role</label>
      <div>
        <input
          type="text"
          id="role"
          name="role"
          placeholder={placeholderText.role}
          defaultValue={defaultValues?.role || ""}
        />
       
      </div>

      <label>Hex Color</label>
      <div>


        <ColorInput
          id="hex"
  name="hex"
  defaultValue={defaultValues?.hex || "#000000"}
  placeHolder="Hex Color"
        />


      </div>

      <label>Contrast Color</label>
      <div>

        <ColorInput
        id="contrastText"
        defaultValue={defaultValues?.contrast || ""}
          placeHolder={placeholderText.contrast}

        />

      </div>

      <button type="submit">{defaultValues ? "Add new color card" :"Save Changes"}</button> <button type="reset">Reset</button>
    </form>

    
       
</>
  );
}
