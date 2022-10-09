import './App.css';
import CardItem from './components/CardItem';
import Dmytro from './assets/dmytro.jpg'
import Maksym from './assets/maksym.jpg'

function App() {
  return (
    <div className='App'>
       <div class='container'>
        <div class='header'>
          <h3 class='suptitle'>Who we are</h3>
          <h2 class='title'>Meet our team</h2>
          <div class='text'>
            <p>Lab Work 1: SPA, nginx, docker</p>
            </div>
        </div>
        <div class='card_container'>
          <CardItem image={Dmytro} name={'Dmytro Uryn'} info={'Group: IP-93'}/>
          <CardItem image={Maksym} name={'Maksym Govoruha'} info={'Group: IP-93'}/>
        </div>
      </div>
    </div>
  );
}

export default App;
