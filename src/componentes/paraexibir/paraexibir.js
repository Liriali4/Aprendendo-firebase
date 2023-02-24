import "./paraexibir.css"
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import { app } from "../../config/firebase";
import { useState } from "react";

export default  function ParaExibir(){
  const [nome, setNome] = useState("");
  const [id, setId] = useState("");

    const bd = getFirestore(app);

  /*
    async function exibir(e){
      e.preventDefault()
        const conteudo = doc(bd, "Filmes", "1");
        const docSnap = await getDoc(conteudo);

      if (docSnap.exists()) {

        console.log("dados do documento:", docSnap.data());
          
      } else {
        // doc.data() will be undefined in this case
        console.log("Documento não encontrado!");
      }
      
    }
*/
  async function exibir(e){
    e.preventDefault()
  const q = query(collection( bd, nome), where("id", "==", id));

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
      });
    }

    return(
        <div className="paraexibir">
        
        <form>
                <h3>Buscar filmes</h3>

                <label >Nome da coleção</label>
                <input 
                name="nome" 
                id="nome"
                type="text" 
                placeholder="insira o Nome"
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

        <button onClick={ exibir }>Pegar nados</button>
        </form>
        </div>        
    );
}
