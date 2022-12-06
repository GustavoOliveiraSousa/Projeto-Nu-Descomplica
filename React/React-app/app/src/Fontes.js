import { ThemeContext } from "./App"

export const Fonts = () => {
    return (
        <ThemeContext.Consumer>
            {(value) => (
                <div>
                    <button type="button" onClick={() => value.setFont('arial')}>Arial</button>
                    <button type="button" onClick={() => value.setFont('tahoma')}>Tahoma</button>
                    <button type="button" onClick={() => value.setFont('verdana')}>Verdana</button>
                    <button type="button" onClick={() => value.setFont('timesnewroman')}>Times New Roman</button>
                </div>
            )}
        </ThemeContext.Consumer>

    )
}