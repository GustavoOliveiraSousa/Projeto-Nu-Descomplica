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

function App() {

  const labelBotao = 'Entre aqui!'
  return (
    <div className="App">
      <Titulo />
      <article>
        <h2>Subtitulo</h2>
        <p>abcd abcd abcd abcd abcd </p>
      </article>
      <Botao label={`${labelBotao} !!!`} />
    </div>
  );
}

export default App;
