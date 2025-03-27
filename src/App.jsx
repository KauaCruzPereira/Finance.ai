import {
  BrowserRouter as Router
} from "react-router-dom";
import { AuthProvider } from './contexts/authContext';
import './index.css';
import { MainRoutes } from './Routes';




function App() {
  return (
    <Router>
      <AuthProvider>
        <MainRoutes />
      </AuthProvider>
    </Router>
  );
}

export default App
