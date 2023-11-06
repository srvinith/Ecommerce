import './App.css';
import Navigation from './Navigation/Nav'
import Products from './Product/Products'
import Recommended from './Recommended/Recommended'

function App() {
  return (
    <div className="App">
     <Navigation />
     <Products />
     <Recommended />
    </div>
  );
}

export default App;
