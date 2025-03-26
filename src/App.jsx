import './index.css'
import { NavBar } from "./components/NavBar/NavBar"
import HomePage from './pages/Home'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";




function App() {
  return (
    <Router>
      <>
        <NavBar />

        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/transactions" Component={() => (<h1>iauysdgasidgahjsdkas</h1>)} />
        </Routes>
      </>
    </Router>
  );
}

export default App
