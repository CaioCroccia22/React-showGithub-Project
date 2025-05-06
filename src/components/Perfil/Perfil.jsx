import './perfil.css'

export default (props) => {
    // Desestruturação da props
    const { nomeUsuario } = props;
   
    return (
         /* Apartir disso conseguimos converter o objeto em uma string */
        <header>

            <img className="perfil-avatar" src={`https://github.com/${nomeUsuario}.png`} />
            <h1 className="perfil-titulo">
                Nome do usuário: {nomeUsuario}
            </h1>
        </header>
    ) 

}

/*
-- Ou

const Perfil = () => {

    const usuario = {
        nome: 'Caio Croccia',
        avatar: 'https://github.com/caiocroccia22.png'
    }


    return (
        <div>
            <img className="perfil-avatar" src={usuario.avatar} />
            <h3 className="perfil-titulo">{usuario.nome}</h3>
        </div>
    ) 
}


export default Perfil

*/