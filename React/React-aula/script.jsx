// function Hello() {
//     return (
//         React.createElement('h1', {}, 'Hello Mars!!!')
//                         //  tag,  atributo,  conteudo/filho
//     )
// }

// class Hello extends React.Component {
//     render() {
//         return (
//             React.createElement('h1', {}, 'Hello Mars!!!')
//                             //  tag,  atributo,  conteudo/filho
//         )
//     }
// }

// Forma normal com props
// function Hello(props) {
//     return (
//         React.createElement('h1', {},
//             React.createElement('span', { className: 'Titulo', id: 'Titulo' }, props.texto),
//             React.createElement('strong', {}, props.label),
//             '!!!!!')
//     )
// }

// Forma desestruturada
function Hello({ label, texto }) {
    return (
        React.createElement('h1', {},
            React.createElement('span', { className: 'Titulo', id: 'Titulo' }, texto),
            React.createElement('strong', {}, label),
            '!!!!!')
    )
}


// Renderiza a função ou classe no navegador
ReactDOM.render(
    React.createElement(Hello, { label: 'Descomplica', texto: 'Olá tudo bem? ' }),
    document.querySelector('#app')
);