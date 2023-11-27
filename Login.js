import assets from "../../assets/saude-mental-1.jpg";
import { useUserOperations } from "../../Hooks/useUserOperations";
import "./Login.css";
import { useNavigate } from "react-router-dom";




function Login() {

    const navigate = useNavigate()

    const { form, onChangeForm, hadleSubmit } = useUserOperations({ email: '', password: '' }, '/api/auth/login')

    console.log(form.email)

    const myStyle={
        width:'100%',
        height:'200px',
    }

    return (
        <>
            <h1>Bem-Vindo</h1>
            
                <img  src={assets} alt="saude" />
        
            
            <form  onSubmit={hadleSubmit}>
                <label>E-mail:</label>
                <input type="text"
                    placeholder="Email"
                    name="email"
                    value={form.email}
                    onChange={onChangeForm}
                />

                <label>Senha:</label>
                <input type="password"
                    placeholder="Senha"
                    name="password"
                    value={form.password}
                    onChange={onChangeForm}
                />
                <p>Ainda não tem conta? Criar conta</p>

                <button type='submit' onClick={()=>{navigate('/header')}}>Entrar</button>
            </form>
        </>
    )
}

export default Login;