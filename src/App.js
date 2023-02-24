import "./app.css"

import Formulario from "./componentes/formulario/formulario";
import Lista from "./componentes/listadefilmes/lista";
import ParaExibir from "./componentes/paraexibir/paraexibir";

function App() {
  return (
  <main>
    <Lista/>
    <Formulario/>
    <ParaExibir/>
  </main>
  );
}

export default App;
