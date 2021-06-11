import { Cabecera } from "./components/Cabecera";
import { Senyores } from "./components/Senyores";
import { Tarjeta } from "./components/Tarjeta";
function App() {
  const senyores = new Array(Senyores());
  console.log(senyores[0]);

  return (
    <div className="contenedor">
      <Cabecera />
      <main>
        {senyores[0].map((senyor) => (
          <Tarjeta key={senyor.id} senyores={senyor} />
        ))}
      </main>
    </div>
  );
}

export default App;
