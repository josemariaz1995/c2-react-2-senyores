import userEvent from "@testing-library/user-event";
import { useEffect, useState } from "react";
import { Cabecera } from "./components/Cabecera";
import { senyoresAPI } from "./components/Senyores";
import { Tarjeta } from "./components/Tarjeta";
const App = () => {
  const [senyores, setSenyores] = useState([]);
useEffect(()=>{
  setTimeout(()=>{setSenyores(senyoresAPI)},2000)
},[])
  const modificarMarcado = (id, marcado) =>
    setSenyores((senyores) =>
      senyores.map((senyor) => {
        if (senyor.id === id) {
          return { ...senyor, marcado: !senyor.marcado };
        } else {
          return senyor;
        }
      })
    );
  const modificarMarcadoTodos = (e) => {
    e.preventDefault();
    setSenyores((senyores) =>
      senyores.map((senyor) => {
        return { ...senyor, marcado: true };
      })
    );
  };

  return (
    <div className="contenedor">
      <Cabecera
        senyores={senyores}
        modificarMarcadoTodos={modificarMarcadoTodos}
      />
      <main>
        {senyores.map((senyor) => (
          <Tarjeta
            key={senyor.id}
            marcado={senyor.marcado}
            senyores={senyor}
            modificarMarcado={modificarMarcado}
          />
        ))}
      </main>
    </div>
  );
};
/* setTimeout(() => {
  App();
}, 2000);
 */
export default App;
