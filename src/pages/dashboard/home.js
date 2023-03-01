import Formulario from "../../componentes/formulario/formulario"
import Lista from "../../componentes/lista/lista"
import "./home.css"

export default function Home(){
    return(
        <main>
        <div className="list">
        <Lista/>
        </div>
        
        <div className="form">
        <Formulario/>
        </div>
        </main>
    )
}
