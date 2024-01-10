import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';

const nome = "Maria"

function App() {
  return (
    <div className='App'>
      <Frase/>
      <Frase/>
      <SayMyName nome="Matheus"/>
      <SayMyName nome={nome}/>
      <Pessoa nome="Rodrigo" idade="28" profissao="Programador" foto="https://via.placeholder.com/150" />
      <List/>
    </div>
  )
}

export default App;
