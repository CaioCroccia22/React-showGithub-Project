
// Importação
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import Perfil from "./components/Perfil/Perfil";
import ReposList from "./components/ReposList";
import Title from "./components/Title/Title";

// Codigo do componente

function App() {
 const [nomeUsuario, setNomeUsuario] = useState('')
 
 return (
  <>
    <Title />
    <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)} />
    {/* Esses atributos passados como string são acessados dentro dos componentes */}
    
    {nomeUsuario.length > 4 && (
      <>  
        <Title />
        <Perfil nomeUsuario={nomeUsuario} />
        <ReposList nomeUsuario={nomeUsuario}/>
      </>
    )}
    
   
    
  </>
  // Fragmento é o elemento vazio
 )
}

export default App
