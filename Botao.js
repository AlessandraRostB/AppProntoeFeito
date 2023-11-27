import { BotaoEstilo } from "./Styles.jsx"

function Botao(props){

    return(
        <BotaoEstilo>
            {props.titulo}
        </BotaoEstilo>
    )
}

export default Botao 