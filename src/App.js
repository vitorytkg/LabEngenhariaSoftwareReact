import logo from './logo.svg';
import './App.css';
import Letreiro from './components/Letreiro';
import MyApp from './components/MyApp';
import MyButton from './components/MyButton';
import Profile from './components/Profile';
import Gallery from './components/Gallery';

function App() {
  return (
      <div className='App'>
        <Letreiro />
        <MyButton />
        <MyApp /> 
        <br></br>
        <Profile />
        <Gallery />
      </div>
  );
}

export default App;
