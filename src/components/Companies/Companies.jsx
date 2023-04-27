import pro from '../../../public/promesse_immobilier_logo_orange_ecriture_bleu@320x320.png'
import company from '../../../public/immobiliere-devreux-logo.jpg'
import company2 from '../../../public/is_company.jpg'
import company3 from '../../../public/real-estate-logo-2151181.jpg'
import './Companies.css'
function Companies() {
    return (
        <section className="c-wrapper">
            <div className="paddings innerWidth flexCenter c-container">
                <img src={company} alt=""/>
                <img src={pro} alt=""/>
                <img src={company2} alt=""/>
                <img src={company3} alt=""/>
            </div>
        </section>
    );
}

export default Companies;
