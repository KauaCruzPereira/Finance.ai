import { useNavigate } from 'react-router-dom';
import './index.css'
import { useContext, useState } from 'react';
import AuthContext from '../../contexts/authContext';
export function Login() {
  const authContext = useContext(AuthContext)
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })
  const navigate = useNavigate();

  function handleOnInputChange(e) {
    const inputValue = e.target.value;
    const inputName = e.target.name
    setFormData({
      ...formData, [inputName]: inputValue
    })
  }
  async function login() {
    if ( !formData.email || !formData.password) {
      alert("Preencha todos os campos")
      return
    }

   const res = await authContext.signIn( formData.email, formData.password)
   if (res.success == true){
    navigate("/");
    return
   }
   alert(res.message)
  }
  return (
    <div className='loginPage'>
      <div className="leftSide">
        <div className='loginPageInterior'>
          <div className='financeAiLogo'><img src="images/Frame 82.svg" alt="FinanceAi logo" /></div>
          <div className='welcomeMessage'>
            <div className='title'><h1>Bem-Vindo!</h1></div>
            <div className='text'><p>A Finance AI é uma plataforma de gestão financeira que utiliza IA para monitorar suas movimentações, e oferecer insights personalizados, facilitando o controle do seu orçamento.</p></div>
          </div>
          <div className='inputsDiv'>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" className='inputs' value={formData.email} onChange={handleOnInputChange} />
            <label htmlFor="password">Senha</label>
            <input type="password" name="password" id="pasword" className='inputs' value={formData.password} onChange={handleOnInputChange} />
          </div>
          <div
            className='loginButtonDiv'><button type="button" className='loginButton' onClick={function(){
              login()
            }}>Entrar</button>
            <p className='registerLink'><a href="http://localhost:5173/register">Não possui conta? Clique aqui.</a></p>
          </div>

        </div>
      </div>
      <img src="images/loginBackground.png" alt="fundo" style={{
        width: "50%",
        objectFit: "cover"
      }} />
    </div>

  )
}