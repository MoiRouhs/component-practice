import logo from './logo.svg';
import './App.css';
import { MyComponent } from './components/MyComponent';
import { SecondComponent } from './components/SecondComponent';
import { ThirdComponent } from './components/ThirdComponent';
import { useState } from 'react';
import { Child } from './components/Child'

function App() {
    const [name, setName] = useState('Lina');
    const [message, setMessage] = useState('');
    const addMessage = (message) => {
        console.log(message);
        setMessage(message);
    }
    const medicalRecord ={
        height:"160",
        bloodGroup:"RH O+",
        allergies:"None"
    };
    const test = 'Juan';
    
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            Mensaje del hijo: <b>{ message }</b> 
        </p>
      </header>
      <Child
          name={ name }
          setName={setName}
          addMessage={addMessage}
      />
      <ThirdComponent
        name={test}
        lastName="Espinoza"
        card={medicalRecord}
      />
      <SecondComponent /> 
      <MyComponent />
    </div>
  );
}

export default App;
