import assets from "../../assets/consultas.jpg";
import Calendar from "react-calendar";
import { useNavigate } from "react-router-dom";



function Header(){

    const navigate = useNavigate()
    return(

        

        <>
                <h1>Consultas com Profissionais</h1>
                <img src={assets}/>
        
            <select class="form-select" aria-label="Default select example">
                    <option selected>Nome do profissional</option>
                    <option value="1">Fernanda Oliveira</option>
                    <option value="2">José de Almeida</option>
                    <option value="3">Ana Cristina</option>
            </select>

            <div>
                <Calendar onChange={'onChange'} value={''}/>
            </div>

            <select className="form-select" aria-label="Default select example">
                    <option selected>Especialização</option>
                    <option value="1">Psiquiatra</option>
                    <option value="2">Psicóloga</option>
                    <option value="3">Terapeuta</option>
            </select>

          <button type="submit" onClick={()=>{navigate('/terapia')}}>
                Próximo
          </button>
        </>

        
    )
}

export default Header