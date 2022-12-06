const Consumer = ({ children }) => {
    const style = { color: "green" }
    return (
        <div className="consumer">
            {children(style)}
        </div>
    )
}

const Ola = (style) => (
    < h3 style={{ color: style.color }} > Olá Marte!!!</h3 >
)
export const RenderProps = () => {
    return (
        <Consumer>
            {Ola}
        </Consumer>
    )
}