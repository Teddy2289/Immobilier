import './Header.css';
import logo from '../../../public/immobilier.png';

function Header() {
    return (
        <div>
            <section className="h-wrapper">
                <div className="flexCenter paddings innerWidth h-container">
                    <img src={logo} alt="" width={100}/>
                    <div className="flexCenter h-menu">
                        <a href="#">Residence </a>
                        <a href="#">Notre valeur</a>
                        <a href="#">Conatct</a>
                        <button className="button">
                            <a href="#">Conatcter nous</a>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Header;
