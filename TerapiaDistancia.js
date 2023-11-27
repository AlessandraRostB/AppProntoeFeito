import assets from "../../assets/terapia2.jpg";
import { useNavigate } from "react-router-dom";

function Terapia(){

    const navigate = useNavigate()
    return(
        <>
            <h1>Terapia a Distância</h1>
                <img src={assets}/>
            <select className="form-select" aria-label="Default select example">
                    <option selected>Exercícios</option>
                    <option value="1">Consversação</option>
                    <option value="2">Exercício de autoconhecimento</option>
                    <option value="3">Praticar emoções</option>
            </select>
            <select className="form-select" aria-label="Default select example">
                    <option selected>Duração</option>
                    <option value="1">Meia hora</option>
                    <option value="2">Uma hora</option>
                    <option value="3">Uma hora e meia</option>
            </select>
            <select className="form-select" aria-label="Default select example">
                    <option selected>Quantas vezes por semana</option>
                    <option value="1">Uma vez por semana</option>
                    <option value="2">Duas vezes por semana</option>
                    <option value="3">Três vezes por semana</option>
            </select>

            <button  onClick={()=>{navigate('/relatoriogeral')}}>
                Próximo
            </button>
        </>
    )
}

export default Terapia