import styles from './skills.module.css';
import { DiHtml5,DiCss3 ,DiJavascript1,DiSass,DiBootstrap,DiFirebase,DiReact} from 'react-icons/di';
const Skills = () => {
    return (
        <section className={styles.skills}>
            <div>
                <div>
                    <h1 className={styles.sectiontitle}>
                        <span>SKILLS</span>
                    </h1>

                </div>
                <div className={styles.skillsicon}>
                    <ul className={styles.listorder}>
                    <li className={styles.listinline}>
                    <span><div className={styles.listdiv}>
                    <i> <DiHtml5/>
                    <p className={styles.textcenter}>HTML 5</p></i>
                    </div></span></li>
                    <li className={styles.listinline}>
                    <span><div className={styles.listdiv}>
                    <i> <DiCss3/>
                    <p className={styles.textcenter}>CSS 3</p></i>
                    </div></span></li>
                    <li className={styles.listinline}>
                    <span><div className={styles.listdiv}>
                    <i> <DiJavascript1/>
                    <p className={styles.textcenter}>JavaScripts</p></i>
                    </div></span></li>
                    <li className={styles.listinline}>
                    <span><div className={styles.listdiv}>
                    <i> <DiSass/>
                    <p className={styles.textcenter}>Sass</p></i>
                    </div></span></li>
                    <li className={styles.listinline}>
                    <span><div className={styles.listdiv}>
                    <i> <DiBootstrap/>
                    <p className={styles.textcenter}>BootStrap</p></i>
                    </div></span></li>
                    <li className={styles.listinline}>
                    <span><div className={styles.listdiv}>
                    <i> <DiReact/>
                    <p className={styles.textcenter}>React</p></i>
                    </div></span></li>
                    <li className={styles.listinline}>
                    <span><div className={styles.listdiv}>
                    <i> <DiFirebase/>
                    <p className={styles.textcenter}>Firebase</p></i>
                    </div></span></li>
                   
                    </ul>
                    </div>
                    </div>
        </section>
    )
}
export default Skills;