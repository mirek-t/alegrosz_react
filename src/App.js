import MainAppBar from "./components/MainAppbar/MainAppbar";
import Home from "./components/Home/Home";
import Details from "./components/Detail/Details";
import {BrowserRouter,Routes,Route} from "react-router-dom";

import "./App.css"

function App() {
    return (
        <div>
            <BrowserRouter>
                <MainAppBar/>
                <Routes>
                    <Route path="/" element={<Home    />}/>
                    <Route path="/detail" element={<Details />}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
