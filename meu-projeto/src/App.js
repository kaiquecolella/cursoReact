import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

const nome = "Maria"

function App() {
  return (
    <div className='App'>
      <SayMyName nome="Matheus"/>
      <SayMyName nome={nome}/>
      <Pessoa nome="Rodrigo" idade="28" profissao="Programador" foto="https://via.placeholder.com/150" />
    </div>
  )
}

export default App;
