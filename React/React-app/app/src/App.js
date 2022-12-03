import './App.css';
import Voos from './Voos';

const Titulo = () => (
  <h2 className='App-header'>
    <span>Olá, </span>
    <strong>Mundo</strong>
    !!!
  </h2>
)

function Botao(props) {

  const handleClick = (e) => {
    e.preventDefault();
    console.log("Clicou", e);
  }

  return (
    <a onClick={handleClick} href="https://descomplica.com.br">{props.label}</a>
  )
}

function PessoaDeMaior(props) {
  return (
    <strong>Maior de idade</strong>
  )
}

function PessoaDeMenor(props) {
  return (
    <strong>Menor de idade</strong>
  )
}

function Pessoa(props) {

  if (props.idade < 10) {
    return (
      <h4>ÁREA RESTRITA</h4>
    )
  } else {
    return (
      <section>
        Você tem {`${props.idade} anos, portanto é: `}
        {props.idade >= 18 ? <PessoaDeMaior /> : <PessoaDeMenor />}
      </section>
    )
  }
}

const ListaItem = (props) => {
  return (
    <li>{props.label}</li>
  )
}

const Lista = () => {

  const passos = [
    "Configurar projeto",
    "Embedar React",
    "Criar components",
    "Escrever testes"
  ];


  return (
    <ul>
      {passos.map((valor, index) => (
        <ListaItem key={index} label={valor} />
      ))}
    </ul>
  )
}

function App() {

  const labelBotao = 'Entre aqui!'
  return (
    <div className="App">
      <Titulo />
      <Botao label={`${labelBotao} !!!`} />
      <Voos />
      <Lista />
      <Pessoa idade={19} />
      <Pessoa idade={14} />
      <Pessoa idade={9} />
      <article>
        <h2>Subtitulo</h2>
        <p>abcd abcd abcd abcd abcd </p>
      </article>

    </div>
  );
}

export default App;
