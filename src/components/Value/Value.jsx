import React from "react";
import {useState} from "react";
import accordion from "../../utils/accordion";
import value from '../../assets/value.png';
import './Value.css'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState
} from 'react-accessible-accordion'
import 'react-accessible-accordion/dist/fancy-example.css'
import {MdArrowDropDown} from "react-icons/all";
import data from "../../utils/accordion";

function Value() {
    return (
        <section className="v-wrapper">
            <div className="paddings innerWidth flexCenter v-container">
                <div className="v-left">
                    <div className="img-container">
                        <img src={value} alt=""/>
                    </div>
                </div>
                <div className="flexColStart v-right">
                    <span className="orangeText">Nos valeur</span>
                    <span className="primaryText">Valeur à donner pour vous</span>
                    <span className="secondaryText">Nous sommes toujours prêts à vous aider en vous fournissant les meilleurs services<br/>
                   Nous croyons qu'un bon endroit où vivre peut rendre votre vie meilleure
                    </span>

                    <Accordion className="accordions" allowMultipleExpanded={false} preExpanded={[0]}>
                        {
                            data.map((item, i) => {
                                const [className, setClassName] = useState(null);
                                return (
                                    <AccordionItem className={`accordionItem ${className}`} key={i} uuid={i}>
                                        <AccordionItemHeading>
                                            <AccordionItemButton className="flexCenter accordioButton">
                                                <AccordionItemState>
                                                    {
                                                        ({expanded}) =>
                                                        expanded ? setClassName("expanded") : setClassName("collapsed")
                                                    }
                                                </AccordionItemState>
                                                <div className="flexCenter icon">
                                                    {item.icon}
                                                </div>
                                                <span className="primaryText">
                                                    {item.heading}
                                                </span>
                                                <div className="flexCenter icon">
                                                    <MdArrowDropDown size={20}/>
                                                </div>
                                            </AccordionItemButton>
                                        </AccordionItemHeading>

                                        <AccordionItemPanel>
                                            <p className="secondaryText">{item.detail}</p>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                );
                            })
                        }
                    </Accordion>
                </div>
            </div>
        </section>
    );
}

export default Value;
