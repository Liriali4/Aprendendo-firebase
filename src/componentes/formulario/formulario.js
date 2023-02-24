import { app } from "../../config/firebase";
import { useState } from "react";
import "./formulario.css"
import { addDoc, collection, doc, getFirestore } from "firebase/firestore";

export default function Formulario() {
    
    const [nome, setNome] = useState("");
    const [id, setId] = useState("");

    const bd = getFirestore(app);

    async function add(e){
        e.preventDefault()
        try {
            console.log("Aqui")
            
        await addDoc(collection(bd, "Filmes"), {
            id: id,
            name: nome,
        });  
        } catch (error) {
            console.log("Erro" , error)
        }
    }

    return (
        <>
            <form>
                <h3>Ver capa dos filmes</h3>

                <label >Nome</label>
                <input 
                name="nome" 
                id="nome"
                type="text" 
                placeholder="insira o seu email"
                value={nome}
                onChange={(event)=> setNome(event.target.value)}
                />

                <label >ID</label>
                <input 
                name="id" 
                id="id" 
                type="text" 
                placeholder="insira o seu ID"
                value={id}
                onChange={(event)=> setId(event.target.value)}
                />

                <button 
                className="pesquisar" 
                onClick={add}>
                    Pesquisar
                </button>
            </form>
        </>

    )

}
