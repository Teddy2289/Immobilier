import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import './app.css'
import Companies from "./components/Companies/Companies";
import Residences from "./components/Residences/Residences";
import Value from "./components/Value/Value";
import Contact from "./components/Contact/Contact";
import Started from "./components/Started/Started.jsx";
import Footer from "./components/Footer/Footer.jsx";

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
            <Contact/>
            <Started/>
            <Footer/>
        </div>
    );
}

export default App;
