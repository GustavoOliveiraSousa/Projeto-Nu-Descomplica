import React, { createContext, useState, useContext } from 'react';
import './App.css';
import Voos from './Voos';
import { AssentosOnibus } from './AssentosOnibus';
import { ViaCEP } from './ViaCEP';
import { RenderProps } from './Renderprops';
import { Fonts } from './Fontes';

const Titulo = () => (
  <h2 className='App-header'>
    <span>Olá, </span>
    <strong>Mundo</strong>
    !!!
  </h2>
)

class MeuBotao extends React.Component {

  // const handleClick = (e) => {
  //   e.preventDefault();
  //   console.log("Clicou", e);
  // }

  imprime() {
    console.log("Imprime Aqui");
  }

  handleClick(e) {
    e.preventDefault();
    this.imprime();
  }

  render() {
    return (
      <a onClick={this.handleClick.bind(this)} href="https://descomplica.com.br">{this.props.label}</a>
    )
  }
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

export const ThemeContext = createContext({});
export const useThemeContext = () => useContext(ThemeContext)


function App() {
  const [font, setFont] = useState('arial')

  const labelBotao = 'Entre aqui!'
  return (
    <ThemeContext.Provider value={{ color: "green", font, setFont }}>
      <div className="App">
        <Titulo />
        <RenderProps />
        <Fonts />
        <ViaCEP />
        <AssentosOnibus />
        <MeuBotao label={`${labelBotao} !!!`} />
        <Voos />
        {/* {<Lista />
        <Pessoa idade={19} />
        <Pessoa idade={14} />
        <Pessoa idade={9} />
        <article>
          <h2>Subtitulo</h2>
          <p>abcd abcd abcd abcd abcd </p>
        </article>} */}

      </div>
    </ThemeContext.Provider>
  );
}

export default App;
