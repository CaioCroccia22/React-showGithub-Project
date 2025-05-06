import { useState, useEffect } from "react"

const Formulario = () => {
    // O useState vai nos retornar o valor e uma função para alterar o valor
    //Por isso coloca a desistruturação de array []
    let [materiaA, setMaterialA] = useState(0);
    let [materiaB, setMaterialB] = useState(0);
    let [materiaC, setMaterialC] = useState(0);


    useEffect(() => {
        console.log("O esstado nome mudou: " + materiaA)
    }, [materiaA]);


    
    const renderizaResultado = () => {
        const soma = materiaA + materiaB + materiaC;
        const media = soma / 3;

        console.log(media)

        if (media >= 7){
            return (
                <p>Você foi aprovado</p>
            )
        } else {
            return (
                <p>Você não foi aprovado</p>
            )
        }
    }
    
    
    return (
        <form action="">
            {[1,2,3,4,5].map(item => (
                <li key={item}>{item}</li>
                ))}
            {/* Como armazenar o valores que estão nesses campos */}
            <input type="number" 
            placeholder="nota matéria A" 
            onChange={evento => setMaterialA(parseInt(evento.target.value))}/>
            <input type="number" 
            placeholder="nota matéria B"
            onChange={evento => setMaterialB(parseInt(evento.target.value))} />
            <input type="number" 
            placeholder="nota matéria C"
            onChange={evento => setMaterialC(parseInt(evento.target.value))} />
            {renderizaResultado()}
        </form>   
    )
}


export default Formulario