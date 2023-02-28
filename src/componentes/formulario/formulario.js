import { app } from "../../config/firebase";
import { useState } from "react";
import "./formulario.css"
import { doc, getFirestore, onSnapshot, setDoc } from "firebase/firestore";

export default function Formulario() {
    
    const [nome, setNome] = useState("");
    const [id, setId] = useState("");
    const [categoria, setCategoria] = useState("");
    const [classification, setClassification] = useState("");
    
    const bd = getFirestore(app);

    /*
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
*/

        async function alterar(e){
            e.preventDefault()

            try {

                await setDoc(doc(bd, "Filmes", "1"), {
                    name: nome,
                    id: id,
                    categoria: categoria,
                    classificação: classification,
                  });

                onSnapshot(doc(bd, "Filmes", "1"), (doc) => {
                    console.log("Alterações: ", doc.id, "=>", doc.data());});

            } catch (error) {
                console.log("Erro" , error)
            }
        }


        /*
    const unsub = onSnapshot(doc(bd, "Filmes", "1"), (doc) => {
        console.log("Alterações: ", doc.data());
    });*/

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
                onClick={alterar}
                >
                    Pesquisar
                </button>
                
            </form>
        </>

    )

}
