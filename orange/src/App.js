import './App.css';
import Slider from './components/Slider';
import Header from './components/Header';
import Form from './components/Form';


function App() {
  return (
    <div className="App">
      
      <div className='container'>

        <Slider />

        <div className='text'>
        <Header />
        <Form/>
        </div>


      </div>

      
    </div>
  );
}

export default App;
