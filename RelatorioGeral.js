import assets from "../../assets/relatoriogeral3.jpg";
import { useNavigate } from "react-router-dom";

function RelatorioGeral(props){

    const navigate = useNavigate()

    return(
        <>
            <h1>Relatório Geral</h1>
                <img src={assets}/>
            <div>
                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
            </div>

            <button type="submit" onClick={()=>{navigate('/finalizacao')}}>Consulta finalizada</button>
        </>
    )
}

export default RelatorioGeral