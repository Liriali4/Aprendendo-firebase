import "./paraexibir.css"
import { app } from "../../config/firebase";
import { getFirestore, Timestamp } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";

export default function ParaExibir(){
    
    const bd = getFirestore(app);

    async function adicionar(){
        
           /* Se o documento não existir, ele será criado. 
            Se o documento existir, o conteúdo dele será 
            substituído pelos dados recém-fornecidos como mostrado.*/


          await setDoc(doc(bd, "Filmes", "1"), {
        id: "1",
        name: "Baby boss 1",
        category: "animação",
        classification:"+ 7",
        description: "O primeiro filme"
    
          });   

         /*    Se você não tiver certeza de que o 
            documento existe, ignore a opção de 
            mesclar novos dados com qualquer documento
            atual para evitar a substituição de documentos inteiros.

    const filmesref = doc(bd, 'Filmes', '1');
    setDoc(filmesref, { capital: "O primeiro filme de dois" });

            Criar coleção com diferentes tipoos de dados
                
    const filmesref = {
        stringExample: "Hello world!",
        booleanExample: true,
        numberExample: 3.14159265,
        dateExample: Timestamp.fromDate(new Date("December 10, 1815")),
        arrayExample: [5, true, "hello"],
        nullExample: null,
        objectExample: {
            a: 5,
            b: {
                nested: "foo"
            }
        }
    };
    await setDoc(doc(bd, "Filmes", "one"), filmesref);

*/



}
  

    return(
        <div className="paraexibir">

        <button onClick={adicionar}>Criar coleção</button>
        </div>        
    );
}
