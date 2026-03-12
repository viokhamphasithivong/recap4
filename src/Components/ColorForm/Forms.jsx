
import ColorInput from "../ColorInput";


export default function FormApp({onSubmit, defaultValues,
  placeholderText={role:"Type in your Color Role", hex:"for Example:#ff4a11",contrast:"for Example:#ff8080"}}
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
  defaultValue={defaultValues?.hex || ""}
  placeHolder={placeholderText.hex}
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

      <button type="submit">{defaultValues ? "Save Changes":"Add new color card"}</button> <button type="reset">Reset</button>
    </form>

    
       
</>
  );
}
