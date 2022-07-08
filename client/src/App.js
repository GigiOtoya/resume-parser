import './App.css';
import Navbar from './components/Navbar';
import { Upload } from './components/Upload';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Upload></Upload>
      <Search></Search>
    </div>
  );
}

export default App;
