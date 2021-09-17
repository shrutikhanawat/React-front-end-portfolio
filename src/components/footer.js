import React from 'react';
import style from "./footer.module.css";
import { FaGithub, FaInstagram } from "react-icons/fa";





const Footer = () => {
    return (
        <footer>
            <div className={style.footerdiv}>
             <div className={style.sociallinks}>
                 <span className={style.icon}>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer"><i>  <FaGithub /> </i></a>
               </span>
               <span className={style.icon}>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><i> <FaInstagram /></i></a>
                </span>
                 </div>
                <div className={style.container}>
                    
            <small>Copyright © Shruti Bhati</small>
            </div></div>
        </footer>
    )
}

export default Footer;