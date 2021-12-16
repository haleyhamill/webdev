import './App.css';
import Button from './Button';
import Input from './Input';

export default function App() {
  function handleButtonClick() {
      console.log("Button clicked");
  }

  function handleLastNameInput() {
    console.log("Last name changed");
  }

   return (<>
   <div style={{display: "flex", alignItems: "center", gap: "20px", flexWrap: "wrap"}}>
      <Button>Normal</Button>
      <Button outline>Outline</Button>
      <Button className="extra-class" onClick={handleButtonClick}>Customizable</Button>
  </div>
  <div style={{display: "flex", alignItems: "center", gap: "20px", flexWrap: "wrap"}}>
      <Input placeholder="First name" />
      <Input placeholder="Last name" onInput={handleLastNameInput} />
      <Input placeholder="Email" type="email" required />
  </div>
  </>);
}
