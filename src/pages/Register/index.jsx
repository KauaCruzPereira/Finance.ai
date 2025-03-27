import { useContext, useState } from 'react'
import './index.css'
import AuthContext from '../../contexts/authContext'
import { useNavigate } from 'react-router-dom'
export function Register() {
  const authContext = useContext(AuthContext)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const navigate = useNavigate();

  function handleOnInputChange(e) {
    const inputValue = e.target.value;
    const inputName = e.target.name
    setFormData({
      ...formData, [inputName]: inputValue
    })
  }
  async function register() {
    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      alert("Preencha todos os campos")
      return
    }
    if (formData.confirmPassword != formData.password){
      alert("Confirmação de senha inválida")
      return
    }
   const res = await authContext.register(formData.name, formData.email, formData.password)
   if (res.success == true){
    navigate("/login");
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
            <div className='title'><h2>Crie sua conta</h2></div>
          </div>
          <div className='inputsDiv'>
            <label htmlFor="name">Nome</label>
            <input type="text" name="name" id="name" className='inputs' value={formData.name} onChange={handleOnInputChange} />
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" className='inputs' value={formData.email} onChange={handleOnInputChange} />
            <label htmlFor="password">Senha</label>
            <input type="password" name="password" id="password" className='inputs' value={formData.password} onChange={handleOnInputChange} />
            <label htmlFor="confirmPassword">Confirme sua senha</label>
            <input type="password" name="confirmPassword" id="pasconfirmPasswordword" className='inputs' value={formData.confirmPassword} onChange={handleOnInputChange} />
          </div>
          <div
            className='loginButtonDiv'><button type="button" className='loginButton'
              onClick={function () {
                register()
              }}>Registrar</button>
            <p className='registerLink'><a href="">Já possui conta? Faça o login aqui.</a></p>
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