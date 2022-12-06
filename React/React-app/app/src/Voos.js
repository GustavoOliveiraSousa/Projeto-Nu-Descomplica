import { ThemeContext } from "./App";

const VoosDisponiveis = [
    {
        id: "123",
        title: "Volta Ter, 19 de julho",
        details: [
            {
                id: "123",
                title: "Saída USB no assento"
            },
            {
                id: "124",
                title: "Espaço para pernas dentro da média (76 cm)"
            },
            {
                id: "125",
                title: "Video sob demanda"
            },
            {
                id: "126",
                title: "Estimativa de emissão de carbono: 75 kg"
            },
        ]
    },
    {
        id: "199",
        title: "Volta Ter, 23 de dezembro",
        details: [
            {
                id: "123",
                title: "Saída USB no assento"
            },
            {
                id: "124",
                title: "Espaço para pernas dentro da média (76 cm)"
            },
            {
                id: "125",
                title: "Video sob demanda"
            },
            {
                id: "126",
                title: "Estimativa de emissão de carbono: 75 kg"
            },
        ]
    }
];

function ItemVooDetails(props) {
    return (
        <ThemeContext.Consumer>
            {(value) => (
                <ul>
                    {props.details.map(details => (
                        <li key={details.id} style={{ color: value.color, fontFamily: value.font }}>{details.title}</li>
                    ))}
                </ul>
            )}
        </ThemeContext.Consumer>
    )
}

function ItemVoo({ title, children }) {
    return (
        <div className="voo">
            <header>
                <h3>{title}</h3>
            </header>
            <div className="voo-details">
                {children}
            </div>
        </div>
    )
}

function Voos() {
    return (
        <div className="voos">
            {VoosDisponiveis.map(voo => (
                <ItemVoo key={voo.id} title={voo.title}>
                    <ItemVooDetails details={voo.details} />
                </ItemVoo>
            ))}
        </div>
    )
}
export default Voos;