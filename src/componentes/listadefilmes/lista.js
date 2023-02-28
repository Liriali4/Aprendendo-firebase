import { collection, getDocs, getFirestore, } from "firebase/firestore";
import { useEffect, useState } from "react";
import { app } from "../../config/firebase";

export default function Lista() {
    const [filmes, setFilmes] = useState([]);
    
    const bd = getFirestore(app);
    
    async function pegardados(){

            const querySnapshot = await getDocs(collection(bd, "Filmes"));
            let dados = []
            querySnapshot.forEach((doc) => {
                
                let id = doc.id;
                let data = doc.data()

                dados.push({id, ...data})    
            });

        setFilmes(dados)

     }
     
     useEffect(() => {
        pegardados()
    }, []);


   
       
    return (
        <div className="listadefilmes">
            <h2>Filmes</h2>

            <table border={"1"}>
                <thead>
                    <tr>
                        <td>Nome</td>
                        <td>Categoria</td>
                        <td>classificação</td>
                        <td>ID</td>
                        
                    </tr>
                </thead>

              <tbody >
                {filmes && filmes.map(filme=>{
                    return(
                   
            <tr key={filme.id}>
                <td >{filme.name }</td>
                <td>{filme.categoria}</td>
                <td>{filme.classificação}</td>
                <td>{filme.id}</td>
               
            </tr>     
                    )
                })}
              </tbody>

            </table>
           
        </div>
    )
    
}