export const Tarjeta = ()=>{
  return(
  <main>
    <article className="senyor">
      <div className="avatar">
        <img src="img/fary.jpg" alt="El Fary señalándote con el dedo"/>
        <span className="inicial">F</span>
      </div>
      <div className="info">
        <h2>El Fary</h2>
        <ul>
          <li><span className="etiqueta">Profesión:</span> Influencer</li>
          <li><span className="etiqueta">Estado:</span> RIP</li>
          <li><span className="etiqueta">Twitter:</span> pendiente</li>
        </ul>
      </div>
      <i className="icono fas fa-check"/>
    </article>
    <article className="senyor">
      <div className="avatar">
        <img src="img/julio.jpg" alt="Julio Iglesias señalándote con el dedo"/>
        <span className="inicial">J</span>
      </div>
      <div className="info">
        <h2>Julio Iglesias</h2>
        <ul>
          <li><span className="etiqueta">Profesión: Youtuber</span></li>
          <li><span className="etiqueta">Estado:</span> Vivo</li>
          <li><span className="etiqueta">Twitter:</span> @JulioIglesias</li>
        </ul>
      </div>
      <i className="icono fas fa-check"/>
    </article>
    <article className="senyor">
      <div className="avatar">
        <img src="img/bertin.jpg" alt="Bertín Osborne señalándote con el dedo"/>
        <span className="inicial">B</span>
      </div>
      <div className="info">
        <h2>Bertín Osborne</h2>
        <ul>
          <li><span className="etiqueta">Profesión:</span> Java Developer</li>
          <li><span className="etiqueta">Estado:</span> Vivo</li>
          <li><span className="etiqueta">Twitter:</span> @BertinOsborne</li>
        </ul>
      </div>
      <i className="icono fas fa-check" />
    </article>
  </main>)
}
