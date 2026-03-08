import "./css/color-forms.css";
import "./css/color-forms-role.css";

export default function ColorForms() {
  return (
    <div className="color-forms">
      <div className="color-forms-role">
        <label>Role</label>
        <div>
          <input
            type="text"
            id="role"
            placeholder="Pick your role here"
          ></input>
        </div>
      </div>
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
