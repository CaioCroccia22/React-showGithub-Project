import { useState, useEffect } from "react";
import styles from "./Title.module.css"
import { style } from "motion/react-client";

 


const Title = () => {
    const [isActive, setIsActive] = useState(false);
    return(
        <header className={`${styles.header}`}>
            <nav className={` nav ${styles.nav}`}>
                <h1 className={`${styles.title}`}>Bem vindo</h1>
                <ul className={`${styles.navList}`}>
                    <li className={`nav-item`} >
                        <button 
                        className={`${styles.btnLink}`} >
                            <a 
                            className={``} 
                            href="#">
                                Registrar
                            </a>
                        </button>
                    </li>
                    <li className={`nav-item`}>
                        <button 
                        onMouseEnter ={() => setIsActive(true)} 
                        onMouseLeave ={() => setIsActive(false)} 
                        className={`${styles.btnLink}`}>
                            <a 
                                className={``} 
                                href="#">
                                Log in
                            </a>
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Title;