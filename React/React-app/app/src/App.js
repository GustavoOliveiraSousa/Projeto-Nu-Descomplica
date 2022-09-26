import './App.css';

const Titulo = () => (
  <h2 className='App-header'>
    <span>Olá, </span>
    <strong>Mundo</strong>
    !!!
  </h2>
)

function Botao(props) {
  return (
    <button>{props.label}</button>
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

function App() {

  const labelBotao = 'Entre aqui!'
  return (
    <div className="App">
      <Titulo />
      <Pessoa idade={19} />
      <Pessoa idade={14} />
      <Pessoa idade={9} />
      <article>
        <h2>Subtitulo</h2>
        <p>abcd abcd abcd abcd abcd </p>
      </article>
      <Botao label={`${labelBotao} !!!`} />
    </div>
  );
}

export default App;
