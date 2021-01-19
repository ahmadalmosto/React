import HobbyList from "./hobby"
import RenderServices from './service'
import Counter from './counter'
import './App.css';

function App() {
  return (
    <div className="App">
    <HobbyList/>
    <Counter />
    <RenderServices />
    </div>
  );
}

export default App;
