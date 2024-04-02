import logo from './logo.svg';
import './App.css';
import {Car, Bike} from './Car';
import Order from './Order';
import SimpleCC from './SimpleCC';
import Products from './Products';
import IncrComponent from './IncrComponent';
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
  const items = ['Apple', 'HP Laptop', 'Laptop Bag', 'Mouse', 'Keyboard', 'Monitor'];
  const data = ['BMW', 'Audi', 'Mercedes'];
  return (
    <div>
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>

        <SimpleCC UserName="Giri Prasad" />
        <Car />
        <Order items={items} />

        <Products data = {data}/>
      <IncrComponent />
        
    </div>
  );
}

export default App;
