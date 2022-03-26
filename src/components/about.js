import React from "react";
import { FaHtml5, FaReact,FaJs } from "react-icons/fa";
import style from './about.module.css';
import {GrEmoji} from "react-icons/gr";


const AboutPage = () => {
    return (
        <div className={style.div1}>
            <h1>ABOUT ME</h1>
            <div className={style.div2}>
                <div className={style.div3}>

                    <span className={style.span1}>
                        <img className={style.profile} alt="Avatar profile" src="profilepicture.png"></img>
                        <div className={style.icon}>
                        <span className={style.con1}> 
                        <FaHtml5 />
                        </span>
                        <span className={style.con2}> 
                        <FaJs/>
                        </span>
                        <span className={style.con3}> 
                        <FaReact />
                        </span>

                        </div>
                    </span>





                </div>
                <div className={style.card}>
                    <section className={style.sectioncontainer}>
                        <div className={style.toolbar}>
                            <span></span>
                            <span></span>
                            <span></span>

                        </div>
                        <div className={style.container}>
                            <span>Hi  <span className={style.emoji}> <GrEmoji/></span></span><br />
                            <br />
                            <span>👋 I'm Shruti Bhati. I am a B. Tech I.T. Engineer from India. I've just started learning web development and this is my first ever portfolio. If you like it, make sure to ⭐ the repository to make it more recognizable for other users. I am also looking for a job in React frontend development. So if you have any open position then you can contact me on linkedIn Thank you 💜</span>

                        </div>
                    </section>
                </div>
            </div>
        </div>

    )
}
export default AboutPage;