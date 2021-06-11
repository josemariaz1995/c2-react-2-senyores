import { useState } from "react";

export const Tarjeta = (props) => {
  const {
    senyores,
    senyores: { id, nombre, profesion, twitter, estado, imagen },
    marcado,
    modificarMarcado,
  } = props;

  return (
    <article className="senyor" onClick={() => modificarMarcado(id, marcado)}>
      <div className="avatar">
        <img
          src={imagen}
          className={marcado ? "fotoMarcada " : ""}
          alt={`${nombre} señalándote con el dedo`}
        />
        <span className="inicial">F</span>
      </div>
      <div className="info">
        <h2>{nombre}</h2>
        <ul>
          <li>
            <span className="etiqueta">Profesión:</span> {profesion}
          </li>
          <li>
            <span className="etiqueta">Estado:</span> {estado}
          </li>
          <li>
            <span className="etiqueta">Twitter:</span> {twitter}
          </li>
        </ul>
      </div>
      <i className={`${marcado ? "marcado " : ""}icono fas fa-check`} />
    </article>
  );
};
