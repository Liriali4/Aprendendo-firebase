import { useState } from "react"
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
import "./perfil.css"

export default function Perfil() {
    const [imgUrl, setImgUrl] = useState();
    const [photoView, setPhotoView] = useState('');
    const [photoProfile, setPhotoProfile] = useState();

    function pegarfoto(event) {
        event.preventDefault()

        const storage = getStorage();
        const storageRef = ref(storage, `imagens/${photoProfile.name}`);

        const uploadTask = uploadBytesResumable(storageRef, photoProfile);
      
        getDownloadURL(uploadTask.snapshot.ref)
        .then(url => {
            console.log(url)
        })

    }

    const previewPhotoLoaded = (e) => {

        try {
            const reader = new FileReader();
            const filePhoto = e.target.files;

            reader.onload = (e) => {
                setPhotoView(e.target?.result);
            };
            reader.readAsDataURL(filePhoto[0]);
                setPhotoProfile(filePhoto[0]);
        } catch (error) {
            setPhotoView('');
        }
    };

    return (
        <main>
            <div className="imagem">
                <img src={photoView?photoView:'https://upload.wikimedia.org/wikipedia/commons/b/b9/No_Cover.jpg?20090511140841'} alt="imagem" />
            </div>
            <div className="pegarimg">
                <form className="formperfil"  >
                    <input
                        type="file"
                        value={imgUrl}
                        onChange={(e) => previewPhotoLoaded(e)}
                    />
                    <button
                        className="carregarimg"
                        type="submit"
                        onClick={(e) =>
                            pegarfoto(e)
                        } >Carregar imagem</button>
                </form>
            </div>
        </main>
    )
}
