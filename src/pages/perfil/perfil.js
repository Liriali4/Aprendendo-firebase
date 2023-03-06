import { useState } from "react"
import { getStorage, ref, uploadBytes } from "firebase/storage";

import "./perfil.css"

export default function Perfil(){
    const [imgUrl, setImgUrl] = useState();

    function pegarfoto(event){
        event.preventDefault()
        
        const storage = getStorage();
        const storageRef = ref(storage, imgUrl);

        
        const metadata = {
        contentType: 'image/jpeg',
        };

      
        const uploadTask = uploadBytes(storageRef, imgUrl, metadata);
        console.log(uploadTask)
    }

    return(
        <main>
            <div className="imagem">
                Imagem
            </div>
            <div className="pegarimg">
                <form className="formperfil"  >
                    <input 
                    type="file"
                    value={imgUrl}
                    onChange={(event)=> setImgUrl(event.target.value)}
                    />
                    <button className="carregarimg" onClick={pegarfoto} >Carregar imagem</button>
                </form>
            </div>
        </main>
    )
}
