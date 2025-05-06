
// Importação
import { useState } from "react"

import Perfil from "./components/Perfil/Perfil"
import Formulario from "./components/formulario"
import ReposList from "./components/ReposList"

// Codigo do componente

function App() {
  


 const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true)
 return (
  <>
  
    {/* Esses atributos passados como string são acessados dentro dos componentes */}
    <Perfil nomeUsuario="CaioCroccia22" />
    <ReposList />
    {formularioEstaVisivel && (
      <Formulario />
    
    )}
    
    <button onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)} type="button">toogle button</button>
    
  </>
  // Fragmento é o elemento vazio
 )
}

export default App
