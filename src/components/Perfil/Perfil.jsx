
import styles from './Perfil.module.css';
// React
import { motion } from "motion/react"



export default (props) => {
    // Desestruturação da props
    const { nomeUsuario } = props;
   
    return (
         /* Apartir disso conseguimos converter o objeto em uma string */
        <div className={styles.profileContent}>

            <motion.img
                alt="Avatar"
                style={{ width: 200, borderRadius: '50%' }}
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                src={`https://github.com/${nomeUsuario}.png`}
            />
            

            <h1 className={styles.name}>
                Nome do usuário: {nomeUsuario}
            </h1>
        </div>
    ) 

}

