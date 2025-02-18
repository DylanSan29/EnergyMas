import React from "react";
import "./MainScreen.css";

const MainScreen = () => {
  return (
    <div className="main-screen">
      <section className="full-width-image-GrupoGalvez">
        <img
          src=""
          alt="Imagen de portada"
          className="full-width-image-element"
        />
      </section>

      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-heading">La Mejor Calidad en Energía Solar</h1>
          <p className="hero-subheading">
            Nos especializamos en ofrecer soluciones de energía solar de alta
            calidad, garantizando eficiencia y sustentabilidad en cada
            instalación. ¡Confía en nosotros para aprovechar lo mejor del sol y
            reducir tu huella de carbono!
          </p>
          <a href="contact" className="cta-button-m">
            Contáctanos
          </a>
        </div>
        <div className="hero-image">
          <img src="" alt="Imagen" />
        </div>
      </section>

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

      <section className="video-section">
        <h2 className="video-heading">Descubre Nuestro Proceso</h2>
        <div className="video-container">
          <video width="100%" height="500px" controls preload="auto">
            <source alt="video" src="" type="video/mp4" />
            El buscador no soporta el video.
          </video>
        </div>
      </section>

      {/* <section className="testimonials">
        <h2 className="testimonials-heading">Historias de éxito</h2>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <p>
              "La calidad de las papas es insuperable. Desde que trabajamos con
              esta empresa, nuestros clientes están más satisfechos que nunca."
            </p>
            <h3>- María López</h3>
            <p>Gerente, compañia ejemplo</p>
          </div>
          <div className="testimonial-card">
            <p>
              "Estamos impresionados con el compromiso y la frescura de cada
              entrega. Sin duda, un socio confiable para nuestro negocio."
            </p>
            <h3>- Carlos Ramírez</h3>
            <p>Propietario, compañia ejemplo</p>
          </div>
        </div>
      </section> */}

      <section className="benefits">
        <h2 className="benefits-heading">¿Por Qué Elegirnos?</h2>
        <ul className="benefits-list">
          <li>
            ✔ Soluciones solares de la más alta calidad, eficientes y duraderas.
          </li>
          <li>
            ✔ Instalación rápida y profesional para garantizar el máximo
            rendimiento.
          </li>
          <li>
            ✔ Soporte personalizado y asesoría en todo el proceso de transición
            energética.
          </li>
          <li>
            ✔ Compromiso con la sostenibilidad y reducción de tu huella de
            carbono.
          </li>
        </ul>
      </section>

      {/* <section className="pricing">
        <h2 className="pricing-heading">Opciones de Servicio</h2>
        <div className="pricing-cards">
          <div className="pricing-card">
            <h3>Básico</h3>
            <p className="price">$199,999.99</p>
            <ul>
              <li>-</li>
              <li>-</li>
              <li>-</li>
            </ul>
          </div>
          <div className="pricing-card">
            <h3>Profesional</h3>
            <p className="price">$299,999.99</p>
            <ul>
              <li>-</li>
              <li>-</li>
              <li>-</li>
            </ul>
          </div>
          <div className="pricing-card">
            <h3>Empresarial</h3>
            <p className="price">Precios Personalizados</p>
            <ul>
              <li>-</li>
              <li>-</li>
              <li>-</li>
            </ul>
          </div>
        </div>
      </section> */}

      <section className="faq">
        <h2 className="faq-heading">Preguntas Frecuentes</h2>
        <div className="faq-items">
          <div className="faq-item">
            <h3>¿De dónde provienen nuestros paneles solares?</h3>
            <p>
              Nuestros paneles solares provienen de fabricantes líderes en la
              industria, garantizando la mejor calidad y eficiencia.
            </p>
          </div>
          <div className="faq-item">
            <h3>¿Ofrecen soluciones personalizadas para empresas?</h3>
            <p>
              Sí, trabajamos con empresas para ofrecer instalaciones solares
              personalizadas que se ajusten a sus necesidades energéticas.
            </p>
          </div>
          <div className="faq-item">
            <h3>¿Cómo puedo solicitar una instalación solar?</h3>
            <p>
              Es fácil, solo tienes que contactarnos a través del botón
              "Contacto" y nuestro equipo te asesorará en todo el proceso.
            </p>
          </div>
          <div className="faq-item">
            <h3>¿Cuál es la diferencia entre sus soluciones solares?</h3>
            <p>
              Ofrecemos una variedad de paneles solares, inversores y
              calentadores solares, adaptados a tus necesidades de eficiencia y
              ahorro energético.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainScreen;
