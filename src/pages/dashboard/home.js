import Formulario from "../../componentes/formulario/formulario"
import Lista from "../../componentes/lista/lista"
import "./home.css"
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../config/firebase";


export default function Home(){


    function logout(){

        signOut(auth).then(() => {
        // Sign-out successful.
        console.log("logout")
        }).catch((error) => {
        // An error happened.
        });
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User
              const uid = user.uid;
              console.log(uid)
              // ...
            } else {
              // User is signed out
              console.log("nao tem logados")
              // ...
            }
          });
    }

    return(
        <main>
        <div className="list">
        <Lista/>
        </div>
        
        <div className="form">
        <Formulario/>
        <button onClick={logout} >Logout</button>
        </div>
        
        </main>
    )
}
