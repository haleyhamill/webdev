import './App.css';
import Button from './Button';

export default function App() {
  function handleButtonClick() {
      console.log("Button clicked");
  }

   return (<div style={{display: "flex", alignItems: "center", gap: "20px", flexWrap: "wrap"}}>
      <Button>Normal</Button>
      <Button outline>Outline</Button>
      <Button className="extra-class" onClick={handleButtonClick}>Customizable</Button>
  </div>);
}
