import { useState } from "react";

export const Cabecera = (props) => {
  const { senyores, modificarMarcadoTodos } = props;
  const [titulo, setTitutlo] = useState(
    "señores que te apuntan con el dedo marcados"
  );

  const marcados = senyores.reduce(
    (contador, senyor) => (senyor.marcado ? contador + 1 : contador),
    0
  );

  const fraseApuntan = ` señor${marcados === 1 ? " " : "es "} que te apunta${
    marcados === 1 ? " " : "n  "
  } con el dedo marcado${marcados === 1 ? " " : "s "}`;
  return (
    <>
      <header className="cabecera">
        <h1>{titulo}</h1>
        <p className="totales">
          <span className="nmarcados">{marcados}</span>
          {fraseApuntan}
        </p>
        <a
          className="accion-marcar"
          href="marcar-todos"
          onClick={modificarMarcadoTodos}
        >
          Marcar todos
        </a>
      </header>
    </>
  );
};
