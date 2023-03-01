import { auth } from "../../config/firebase";
import { useState } from "react";
import { sendPasswordResetEmail, } from "firebase/auth";

export default function Alterarpass(){

    const [oldpass, setOldpass] = useState("");
    const [newpass, setNewpass] = useState("");
    const [email, setEmail] = useState("");

    function alt(){
/*
        const user = auth.currentUser;
        const newPassword = getASecureRandomPassword();

        updatePassword(user, newPassword).then(() => {
        // Update successful.
        }).catch((error) => {
        // An error ocurred
        // ...
        });*/
    }


    function requeriremail(){
                sendPasswordResetEmail(auth, email)
        .then(() => {
            // Password reset email sent!
            console.log("senha alterada")
            // ..
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
    }

    return(
        <main>
            <div className="container">
                <h1>Alterar Senha</h1>
                <div className="formulario">
                    <form>
                        <label>Email da conta</label>

                            <input 
                            type="email" 
                            placeholder="insira o seu email"
                            value={email}
                            onChange={(event)=> setEmail(event.target.value)}
                            ></input>
                        <button className="entrar" onClick={requeriremail} > Pedir email de redifinição de senha</button>

                        <label>Antiga senha</label>

                            <input 
                            type="email" 
                            placeholder="insira o seu email"
                            value={oldpass}
                            onChange={(event)=> setOldpass(event.target.value)}
                            ></input>
                       

                        <label>Nova senha</label>

                            <input 
                            type="password" 
                            placeholder="insira a sua senha"
                            value={newpass}
                            onChange={(event)=> setNewpass(event.target.value)}
                            ></input>

                        <button className="entrar" onClick={alt} > alterar senha</button>
                    </form>
                </div>
            </div>
        </main>
    )
}
