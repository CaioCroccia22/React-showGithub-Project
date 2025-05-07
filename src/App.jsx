
// Importação
import { useState } from "react"

import Perfil from "./components/Perfil/Perfil"
import ReposList from "./components/ReposList"

// Codigo do componente

function App() {
 const [nomeUsuario, setNomeUsuario] = useState('')
 
 return (
  <>
    <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)} />
    {/* Esses atributos passados como string são acessados dentro dos componentes */}

    {nomeUsuario.length > 4 && (
      <>  
        <Perfil nomeUsuario={nomeUsuario} />
        <ReposList nomeUsuario={nomeUsuario}/>
      </>
    )}
    
   
    
  </>
  // Fragmento é o elemento vazio
 )
}

export default App
