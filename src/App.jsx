import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import './app.css'
import Companies from "./components/Companies/Companies";
import Residences from "./components/Residences/Residences";
import Value from "./components/Value/Value";

function App() {
    return (
        <div className="App">
            <div>
                <Header/>
                <Hero/>
            </div>
            <Companies/>
            <Residences/>
            <Value/>
        </div>
    );
}

export default App;
