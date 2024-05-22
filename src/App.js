import logo from './logo.svg';
import './App.css';
import { MyComponent } from './components/MyComponent';
import { SecondComponent } from './components/SecondComponent';
import { ThirdComponent } from './components/ThirdComponent';
function App() {
    const medicalRecord ={
        height:"160",
        bloodGroup:"RH O+",
        allergies:"None"
    };
    
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Estructura inicial del proyecto y limpia.
        </p>

      </header>
      <ThirdComponent
        name="Juan"
        lastName="Espinoza"
        card={medicalRecord}
      />
      <SecondComponent /> 
      <MyComponent />
    </div>
  );
}

export default App;
