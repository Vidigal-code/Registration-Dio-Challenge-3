import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Feed } from "./pages/feed";
import { Home } from './pages/home'
import { Login } from './pages/login'
import { Registration } from './pages/Registration'
import { RecoverPassword } from './pages/RecoverPassword'
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <Router>
     <GlobalStyle/>
     <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/Registration-Dio-Challenge-3/" element={<Registration/>}/>
        <Route path="/feed" element={<Feed/>}/>
        <Route path="/recoverPassword" element={<RecoverPassword/>}/>
     </Routes >
    </Router>
  );
}

export default App;
