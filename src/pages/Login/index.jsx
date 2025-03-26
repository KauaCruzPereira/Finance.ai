import './index.css'
export function Login() {
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
                <input type="email" name="email" id="email" className='inputs'/>
                <label htmlFor="password">Senha</label>
                <input type="password" name="password" id="pasword" className='inputs'/>
              </div>
              <div className='loginButtonDiv'><button type="button" className='loginButton'>Entrar</button></div>
          </div>
        </div>
      <img src="images/loginBackground.png" alt="fundo" style={{
        width: "50%",
        objectFit: "cover"
        }}/>
    </div>
  )
}