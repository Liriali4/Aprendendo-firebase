import "./register.css"
import { useState } from "react"
import { Link } from "react-router-dom";
import { auth } from "../../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function Register() {
    const [user, setUser] = useState("");
    const [telefone, setTelefone] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

function createcount (e){
    e.preventDefault()
    console.log(user, telefone,email, senha)

    
    createUserWithEmailAndPassword(auth, email, senha)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });


}
    return (
        <main>
            <div className="container">
                 <h1>Criar conta</h1>
                <div className="formulario">
                   
                    <form>
                    <label>Nome de usuário</label>

                            <input 
                            type="email" 
                            placeholder="insira o seu nome"
                            value={user}
                            onChange={(event)=> setUser(event.target.value)}
                            ></input>
                       

                        <label>Número de telefone</label>

                            <input 
                            type="text" 
                            placeholder="9XX XXX XXXX"
                            value={telefone}
                            onChange={(event)=> setTelefone(event.target.value)}
                            ></input>
                       
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

                        <Link to={'/home'}>
                        <button className="entrar" onClick={createcount} > Entrar</button>
                        </Link>
                    </form>
                </div>
            </div>
        </main>
        
    )
 
}