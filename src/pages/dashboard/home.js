import Formulario from "../../componentes/formulario/formulario"
import Lista from "../../componentes/lista/lista"
import "./home.css"
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../config/firebase";
import { useNavigate } from "react-router-dom";


export default function Home(){
  const navigate = useNavigate();


    function logout(){

        signOut(auth).then(() => {

          console.log("logout")
        }).catch((error) => {

        });
        onAuthStateChanged(auth, (user) => {
            if (user) {

              const uid = user.uid;
              console.log(uid)
              navigate("/")

            } else {

              console.log("nao tem logados")

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
