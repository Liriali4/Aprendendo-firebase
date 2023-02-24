import "./paraexibir.css"
import { app } from "../../config/firebase";

import { getFirestore}
 from "firebase/firestore";

import { doc, setDoc } from "firebase/firestore";

export default function ParaExibir(){
    
    const bd = getFirestore(app);

    async function adicionar(){
        await setDoc(doc(bd, "Filmes", "1"), {
            id: "2",
            name: "nome",
        }); 
}
  

    return(
        <div className="paraexibir">

        <button onClick={ adicionar }>Criar coleção</button>
        </div>        
    );
}
