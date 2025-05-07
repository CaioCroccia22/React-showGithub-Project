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

            }, 30000)
        })
    }, [nomeUsuario]);

    return(
        <div className="contaniner">
            {download === false && (
                <h1>Carregando...</h1>
            )}
            <ul className={styles.list}>
                {repos.map(repositorio => (
                    <li className={styles.listItem} key={repositorio.id}>
                        <div className={styles.itemName}>
                            <b>Nome: </b>{repositorio.name} <br />
                        </div>
                        <div className={styles.itemLanguage}>
                            <b>Linguagem: </b>{repositorio.language} <br />
                        </div>
                        <div className={styles.itemLink}>
                            <a target="_blank" href={repositorio.html_url}>Visitar no github</a>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ReposList