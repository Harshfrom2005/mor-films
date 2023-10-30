import React from "react";
import {
    FaInstagram,
    FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                    I just typed some random text about me here because I do not want to paste those boring lorem ipsum stuff. So I am an 18 year old boy from India learning Web Development because my elder brother bought me a course , Yes !! I was not interested in this field earlier BUT now I am in love with it. Wanna Know More About me ? Click on the Social Media Handles below
                </div>
                <div className="socialIcons">
                    <span className="icon">
                        <a href="https://www.instagram.com/harshittfrom2005/" target="blank" style={{textDecoration:'none', color: 'inherit'}}><FaInstagram /></a>
                    </span>
                    <span className="icon">
                        <a href="https://www.linkedin.com/in/harsh-mor-05a243264/" target="blank" style={{textDecoration:'none', color: 'inherit'}}><FaLinkedin /></a>
                    </span>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
