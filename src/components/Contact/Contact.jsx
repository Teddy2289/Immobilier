import React from "react";

import value from "../../assets/contact.jpg";
import {BsFillChatDotsFill, HiChatBubbleBottomCenter, MdCall} from "react-icons/all";
import './Contact.css'
function Contact() {
    return (
        <section className="s-wrapper">
            <div className="paddings innerWidth flexCenter s-container">
                <div className="flexColStart s-left">
                    <span className="orangeText">Notre contact</span>
                    <span className="primaryText">Facile de nous contacter</span>
                    <span className="secondaryText">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab laboriosam nihil nulla sed similique totam?</span>

                    <div className="flexColStart contactMode">
                        <div className="flexStart row">
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <MdCall size={25}/>
                                    </div>
                                    <div className="flexColStart details">
                                        <span className="primaryText">Appel</span>
                                        <span className="secondaryText">034 32 853 02</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">
                                    Appeller
                                </div>
                            </div>
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <BsFillChatDotsFill size={25}/>
                                    </div>
                                    <div className="flexColStart details">
                                        <span className="primaryText">Appel Video</span>
                                        <span className="secondaryText">034 32 853 02</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">
                                    Appeller
                                </div>
                            </div>
                        </div>
                        <div className="flexStart row">
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <MdCall size={25}/>
                                    </div>
                                    <div className="flexColStart details">
                                        <span className="primaryText">Appel au</span>
                                        <span className="secondaryText">034 32 853 02</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">
                                    Appeller
                                </div>
                            </div>
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <HiChatBubbleBottomCenter size={25}/>
                                    </div>
                                    <div className="flexColStart details">
                                        <span className="primaryText">Message</span>
                                        <span className="secondaryText">034 32 853 02</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">
                                    Appeller
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flexCenter s-right">
                    <div className="img-container">
                        <img src={value} alt=""/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
