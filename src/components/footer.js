import React from 'react';
import style from "./footer.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";





const Footer = () => {
    return (
        <footer>
            <div className={style.footerdiv}>
             <div className={style.sociallinks}>
                 <span className={style.icon}>
                <a href="https://github.com/shrutikhanawat" target="_blank" rel="noopener noreferrer"><i>  <FaGithub /> </i></a>
               </span>
               <span className={style.icon}>
                <a href="https://www.linkedin.com/in/shruti-bhati-6776b888" target="_blank" rel="noopener noreferrer"><i> <FaLinkedin/></i></a>
                </span>
                 </div>
                <div className={style.container}>
                    
            <small>Copyright © Shruti Bhati</small>
            </div></div>
        </footer>
    )
}

export default Footer;