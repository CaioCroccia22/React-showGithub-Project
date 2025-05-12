import { useState, useEffect } from "react";
import styles from "./ReposList.module.css"

const ReposList = ({ nomeUsuario }) => {

    const [repos, setRepos] = useState([]);
    const [download, setDownload] = useState(false)

    useEffect(() => {
        setDownload(false)
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
        .then(res => res.json())
        .then(resJson => {
            setTimeout(() => {
                setDownload(true)
                setRepos(resJson)

            }, 3000)
        })
    }, [nomeUsuario]);

    return (
        <div className={`${styles.reposContent}`}>
            {!download && <h1>Carregando...</h1>}


            <ul className={`${styles.list}`} >
                {repos.map(repositorio => ( 
                    <li className={styles.listItem} key={repositorio.id}>
                        <div className={`card ${styles.card}`} >
                            <div className={`card-body ${styles.cardBody}`} >
                                <h5 className={`card-title ${styles.itemName}`} >Nome: {repositorio.name}</h5>
                                <h5 className={`card-title ${styles.itemLanguage}`}> Linguagem: {repositorio.language}</h5>
                                {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p> */}
                                <div className={styles.itemLink}>
                                    <a target="_blank" rel="noreferrer" href={repositorio.html_url}>Visitar no GitHub</a>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ReposList