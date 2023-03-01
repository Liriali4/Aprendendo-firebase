import "./login.css"
import { useState } from "react"
import { getAuth, signInWithEmailAndPassword, } from "firebase/auth";
import { Link } from "react-router-dom";


export default function Login() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

function Handlelogin (e){
    e.preventDefault()
    console.log(email, senha)

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("login", user)
        // ...
      })
      .catch(() => {
        console.log("ERRO")
      });
      


    setEmail("")
    setSenha("") 

}
    return (
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
                            <Link to={"/home"}>
                        <button className="entrar" onClick={Handlelogin} > Entrar</button>
                        </Link>
                        <a href="/alterarpass">Alterar password</a>
                    </form>
                </div>
            </div>
        </main>
        
    )
 
}