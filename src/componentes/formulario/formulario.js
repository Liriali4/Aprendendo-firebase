import { app } from "../../config/firebase";
import { useState } from "react";
import "./formulario.css"
import { addDoc, collection, getFirestore } from "firebase/firestore";

export default function Formulario() {
    
    const [nome, setNome] = useState("");
    const [id, setId] = useState("");
    const [categoria, setCategoria] = useState("");
    const [classification, setClassification] = useState("");
    
    const bd = getFirestore(app);

    async function add(e){
        e.preventDefault()
        try {
          
        await addDoc(collection(bd, "Filmes"), {
            id: id,
            name: nome,
            categoria: categoria,
            classificação: classification,
        });  
        } catch (error) {
            console.log("Erro" , error)
        }
    }

    return (
        <>
            <form>
                <h3>Listar filme</h3>

                <label >Nome</label>
                <input 
                name="nome" 
                id="nome"
                type="text" 
                placeholder="insira o nome"
                value={nome}
                onChange={(event)=> setNome(event.target.value)}
                />

                <label >categoria</label>
                <input 
                name="nome" 
                id="nome"
                type="text" 
                placeholder="insira a categoria"
                value={categoria}
                onChange={(event)=> setCategoria(event.target.value)}
                />

                 <label >classificação</label>
                <input 
                name="nome" 
                id="nome"
                type="text" 
                placeholder="insira a classificação"
                value={classification}
                onChange={(event)=> setClassification(event.target.value)}
                />

                <label >ID</label>
                <input 
                name="id" 
                id="id" 
                type="text" 
                placeholder="insira o ID"
                value={id}
                onChange={(event)=> setId(event.target.value)}
                />

                <button 
                className="pesquisar" 
                onClick={add}
                >
                    Pesquisar
                </button>
            </form>
        </>

    )

}
