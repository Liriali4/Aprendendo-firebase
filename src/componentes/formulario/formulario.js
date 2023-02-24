import "./formulario.css"

export default function Formulario() {

    return (
        <>
            <form>
                <h3>Ver capa dos filmes</h3>
                <label>Nome</label>
                <input type="email" placeholder="insira o seu email"></input>

                <label>ID</label>
                <input type="text" placeholder="insira o seu ID"></input>
                <button className="pesquisar">Pesquisar</button>
            </form>
        </>

    )

}
