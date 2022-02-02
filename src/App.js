import {BrowserRouter,Routes,Route} from "react-router-dom";

import MainAppBar from "./components/MainAppbar/MainAppbar";
import Home from "./components/Home/Home";
import Detail from "./components/Detail/Detail";

import "./App.css";

function App() {
    return (
        <div>
            <BrowserRouter>
                <MainAppBar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/detail" element={<Detail/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
