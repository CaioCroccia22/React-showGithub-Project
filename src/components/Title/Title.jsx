import { useState, useEffect } from "react";
import styles from "./Title.module.css"

const Title = () => {
    return(
        <header className={`${styles.header}`}>
            <nav className={` nav ${styles.nav}`}>
                <h1 className={`${styles.title}`}>Bem vindo</h1>
                <ul className={`${styles.navList}`}>
                    <li className={`${styles.itemLink} nav-item`} >
                        <a className={`nav-link`} aria-current="page" href="#">Consultar conta Git</a>
                    </li>
                    <li className={`${styles.itemLink} nav-item`}>
                        <button className={`btn ${styles.btn}`}>
                            <a className={`${styles.itemLink}`} href="#">
                                Não tenho conta no Github
                            </a>
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Title;