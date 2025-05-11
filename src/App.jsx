
// Importação
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import Perfil from "./components/Perfil/Perfil";
import ReposList from "./components/ReposList";
import Title from "./components/Title/Title";
import styles from './App.module.css';



// Codigo do componente

function App() {
 const [nomeUsuario, setNomeUsuario] = useState('')
 
 return (
  <>
    <Title />
    <div className="container">
      <div className={`${styles.contentMensage}`}>
        <h2 className={`${styles.secondaryTitle}`}>
          Encotre seus repositórios do GitHub aqui:
        </h2>
        <input className={`${styles.contentInput}`} type="text" onBlur={(e) => setNomeUsuario(e.target.value)} placeholder="Insira seu usuário do Github aqui"/>
      </div>
      <div className={`${styles.contentProfile}`}>
        <Perfil nomeUsuario={nomeUsuario} />
      </div>
    </div>
    {/* Esses atributos passados como string são acessados dentro dos componentes */}
    
    {nomeUsuario.length > 4 && (
      <>  
        <ReposList nomeUsuario={nomeUsuario}/>
      </>
    )}
    
   
    
  </>
  // Fragmento é o elemento vazio
 )
}

export default App
