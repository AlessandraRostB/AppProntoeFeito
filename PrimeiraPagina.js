import background from "../../assets/images2.jpg";

function PrimeiraPagina(props){


    return(

        <>
          <div className='App' style={{backgroundImage: `url(${background})`}}>
              <h1>Saúde Mental em dia</h1>
          </div>

          <button type='submit' onClick={props.Login}>Login</button>
          <button type='submit' onClick={props.Cadastrar}>Cadastrar</button>
        </>
    ) 
  } 
    
    
export default PrimeiraPagina