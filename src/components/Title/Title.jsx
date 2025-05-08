import { useState, useEffect } from "react";
import styles from "./Title.module.css"

const Title = () => {
    return(
        <header>
            <h1>Page</h1>
            <ul class="nav nav-underline">
                <li className={`${styles.itemLink} nav-item`} >
                    <a className={`nav-link`} aria-current="page" href="#">Consultar conta Git</a>
                </li>
                <li className={`${styles.itemLink} nav-item`}>
                    <a className={`${styles.itemLink}`} href="#">Não tenho conta no Github</a>
                </li>
            </ul>
        </header>
    );
}

export default Title;