import logo from './logo.svg';
import './App.css';
import {Car, Bike} from './Car';
import Order from './Order';
import SimpleCC from './SimpleCC';

function Cycle(){
    return (
        <>
            <h2>Cycle</h2>
            <p>It's a cycle</p>
            <ul>
                <li>Wheels: 2</li>
                <li>Doors: 0</li>
                <li>Color: Black</li>
            </ul>
        </>
    );
}

function App() {
  const items = ['Apple', 'Banana', 'Cherry', 'Dates'];
  return (
    <div>
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
        <Order ItemName ='iPhone'/>
        <Order ItemName ='HP Laptop'/>
        <Order ItemName ='Laptop Bag'/>
        <Order ItemName ='Mouse'/>
        <SimpleCC UserName='John'/>
    </div>
  );
}

export default App;
