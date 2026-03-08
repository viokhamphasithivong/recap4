import "./css/Color.css";

export default function Color({ color }) {


  return (
    <div className="color-card" style={{backgroundColor: color.hex, color: color.contrastText}}>

      <p className="color-card-headline">{color.hex}</p>
      <p className="color-card-role">Role: {color.role}</p>
      <p >Contrast: <span className="color-card-contrast">{color.contrastText}</span></p>

    </div>
  )

}



/* hex value of the color 
the role of the color
the color itself in the background color of the element
the font in the respective contrastText color */