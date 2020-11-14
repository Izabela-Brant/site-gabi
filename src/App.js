import logo from './logo.svg';
import './App.css';
import Home from "./Pages/Home/home";
import Cabecalho from "./Components/Header/header";
import Rodape from "./Components/Rodape/rodape"

function App() {
return (
    <div>
        <Cabecalho/>
        <Home/>
        <Rodape/>
    </div>
);
}


export default App;
