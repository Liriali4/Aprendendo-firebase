import {  collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import { app } from "../../config/firebase";


export default function Lista() {

    const bd = getFirestore(app);

    async function pegardados(){

        const querySnapshot = await getDocs(collection(bd, "Filmes"));
        querySnapshot.forEach((doc) => {

            console.log(doc.id, " => ", doc.data());
        });
    }

    return (
        <div className="listadefilmes">
            <h2>Filmes</h2>
            <table border={"1"}>
                <thead>
                    <tr>
                        <td>Título</td>
                        <td>Categoria</td>
                        <td>Classificação</td>
                        <td>ID</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>The Boss Baby</td>
                        <td>Animação</td>
                        <td> + 5</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>The Boss Baby 2</td>
                        <td>Animação</td>
                        <td> + 5</td>
                        <td>2</td>
                    </tr>
                    <tr>
                        <td>Pedro O Pedro</td>
                        <td>Animação</td>
                        <td> + 7</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>Pedro O Pedro 2</td>
                        <td>Animação</td>
                        <td> + 7</td>
                        <td>4</td>
                    </tr>
                </tbody>
            </table>
            <button onClick={pegardados}>Click</button>
        </div>
    )
}