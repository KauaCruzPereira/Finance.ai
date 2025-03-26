import './index.css'
import { NavBar } from "./components/NavBar/NavBar"
import HomePage from './pages/Home'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import { Login } from './pages/Login';




function App() {
  return (
    <Router>
      <>
        <NavBar />

        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/login" Component={Login} />
          <Route path="/transactions" Component={() => (<h1>Página de Transações</h1>)} />
          <Route path="/subscription" Component={() => (<h1>Página de Assinaturas</h1>)} />
        </Routes>
      </>
    </Router>
  );
}

export default App
