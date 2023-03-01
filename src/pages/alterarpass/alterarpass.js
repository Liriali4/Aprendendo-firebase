
export default function Alterarpass(){

    const [oldpass, setOldpass] = useState("");
    const [newpass, setNewpass] = useState("");


    return(
        <main>
            <div className="container">
                <h1>Login</h1>
                <div className="formulario">
                    <form>
                       
                        <label>Email</label>

                            <input 
                            type="email" 
                            placeholder="insira o seu email"
                            value={email}
                            onChange={(event)=> setEmail(event.target.value)}
                            ></input>
                       

                        <label>Senha</label>

                            <input 
                            type="password" 
                            placeholder="insira a sua senha"
                            value={senha}
                            onChange={(event)=> setSenha(event.target.value)}
                            ></input>

                        <button className="entrar" onClick={Handlelogin} > Entrar</button>
                    </form>
                </div>
            </div>
        </main>
    )
}
