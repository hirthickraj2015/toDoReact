import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar} from './components/Navbar';
import { TodoWrapper } from './components/TodoWrapper';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div >
      <TodoWrapper  />
      </div>
    </div>
  );
}

export default App;
