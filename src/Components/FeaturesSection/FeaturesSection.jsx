import React from "react";
import "./FeaturesSection.css";

const FeaturesSection = () => {
  return (
    <div>
      <section className="features">
        <h2 className="features-heading">
          Nuestras Principales Características
        </h2>
        <div className="feature-cards">
          <div className="feature-card">
            <img src="" alt="Imagen" />
            <h3>Soluciones Solar de Alta Calidad</h3>
            <p>
              Ofrecemos paneles solares de la más alta calidad, seleccionados y
              diseñados para garantizar máxima eficiencia y durabilidad.
            </p>
          </div>
          <div className="feature-card">
            <img src="" alt="Imagen" />
            <h3>Variedad de Soluciones Solares</h3>
            <p>
              Ofrecemos una amplia gama de opciones, desde paneles solares y
              inversores hasta calentadores solares, todos de la mejor calidad
              para satisfacer tus necesidades energéticas.
            </p>
          </div>
          <div className="feature-card">
            <img src="" alt="Imagen" />
            <h3>Energía Solar Sostenible</h3>
            <p>
              Nos comprometemos con soluciones energéticas responsables que
              cuidan el medio ambiente y promueven la sostenibilidad a largo
              plazo.
            </p>
          </div>
        </div>
      </section>

      <section className="cta">
        <h2 className="cta-heading">¡Comienza Hoy Mismo!</h2>
        <p className="cta-subheading">
          Únete a miles de clientes satisfechos y lleva tu negocio al siguiente
          nivel.
        </p>
        <a href="/Contact" className="cta-button-f">
          Contáctanos Ahora
        </a>
      </section>
    </div>
  );
};

export default FeaturesSection;
