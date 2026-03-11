
import ColorInput from "../ColorInput";


export default function FormApp({onSubmit,
  placeholderText={role:"Type in your Color Role", hex:"Your Hex Color Code",contrast:"Your Contrast Color"}}
) {

  function handleColorData(event) {
 
     event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
     event.target.reset()
    console.log(data)
    onSubmit(data);
  }

  return (
    <>
    <form onSubmit={handleColorData}>
      <label>Role</label>
      <div>
        <input
          type="text"
          id="role"
          name="role"
          placeholder={placeholderText.role}
        />
        <button
          type="button"
          onClick={() => {placeholderText.role}}
        >
          Reset
        </button>
      </div>

      <label>Hex Color</label>
      <div>


        <ColorInput
          id="hex"

          placeHolder={placeholderText.hex}

        />

        <button type="button" onClick={() => {placeholderText.hex}}>
          Reset
        </button>
      </div>

      <label>Contrast Color</label>
      <div>

        <ColorInput
        id="contrastText"
          placeHolder={placeholderText.contrast}

        />
        <button type="button" onClick={() =>{placeholderText.hex}}>
          Reset
        </button>
      </div>

      <button type="submit">Add new color card</button> <button type="reset">Reset</button>
    </form>

    
       
</>
  );
}
