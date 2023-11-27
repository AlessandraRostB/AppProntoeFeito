import {BrowserRouter, Routes, Route} from "react-router-dom"; 
import Cadastrar from "../pagina/Cadastrar/Cadastrar";
import Home from "../pagina/Home/Home";
import Login from "../pagina/Login/Login";
import PrimeiraPagina from "../pagina/PrimeiraPagina/PrimeiraPagina";
import Header from "../componentes/Header/Header";
import Terapia from "../componentes/Terapia/TerapiaDistancia";
import RelatorioGeral from "../componentes/RelatorioGeral/RelatorioGeral";
import Finalizacao from "../componentes/Finalizacao/Finalizado";


function Rotas(){
    return(
        <>
           <BrowserRouter>
                <Routes>
                    <Route index element={<Login/>}/>
                    <Route path="cadastro" element={<Cadastrar/>}/>
                    <Route path="home" element={<Home/>}/>
                    <Route path="primeirapagina" element={<PrimeiraPagina/>}/>
                    <Route path="header" element={<Header/>}/>
                    <Route path="terapia" element={<Terapia/>}/>
                    <Route path="relatoriogeral" element={<RelatorioGeral/>}/>
                    <Route path="finalizacao" element={<Finalizacao/>}/>
                </Routes>
           </BrowserRouter>
        </>
    )
}

export default Rotas