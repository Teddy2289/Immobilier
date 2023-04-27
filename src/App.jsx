import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import './app.css'
import Companies from "./components/Companies/Companies";
import Residences from "./components/Residences/Residences";

function App() {
    return (
        <div className="App">
            <div>
                <Header/>
                <Hero/>
            </div>
            <Companies/>
            <Residences/>
        </div>
    );
}

export default App;
