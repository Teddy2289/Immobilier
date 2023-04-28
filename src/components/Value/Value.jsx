import React from "react";
import accordion from "../../utils/accordion";
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

accordion

function Value() {
    return (
        <section className="v-wrapper">
            <div className="paddings innerWidth flexCenter v-container">

            </div>
        </section>
    );
}

export default Value;
