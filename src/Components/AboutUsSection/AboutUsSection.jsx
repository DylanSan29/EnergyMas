import React from "react";
import "./AboutUsSection.css";

const AboutUsSection = () => {
  return (
    <section className="about-us">
      {/* Sobre Nosotros */}
      <div className="intro">
        <h2>Sobre Nosotros</h2>
        <p>
          <strong>Razon social</strong>
        </p>
      </div>
      <div className="main-image">
        <img src="" alt="Imagen Principal" className="full-width-image" />
      </div>

      <div className="mission-section">
        <h2>Nuestra Misión</h2>
        <p>
          Proporcionar soluciones solares de alta calidad, sostenibles y
          accesibles, mientras fomentamos el desarrollo de comunidades y
          protegemos el medio ambiente para las generaciones futuras.
          Comprometidos a satisfacer las necesidades energéticas del sector,
          ofreciendo productos solares de última tecnología y adaptados a las
          demandas de nuestros clientes.
        </p>
      </div>

      {/* Sección de Visión */}
      <div className="vision-section">
        <h2>Nuestra Visión</h2>
        <p>
          Ser la empresa líder en soluciones solares de alta calidad, reconocida
          por nuestra innovación, eficiencia y compromiso con la sostenibilidad.
          Queremos ser una fuente de orgullo y prosperidad para nuestros
          colaboradores, socios y comunidades, mientras satisfacemos las
          necesidades energéticas del mercado y contribuimos al desarrollo de la
          industria solar a nivel global.
        </p>
      </div>

      {/* Sección de Valores */}
      <div className="values-section">
        <h2>Nuestros Valores</h2>
        <ul>
          <li>Integridad: Siempre actuar con honestidad y transparencia.</li>
          <li>
            Innovación: Buscar soluciones energéticas creativas y avanzadas.
          </li>
          <li>
            Excelencia: Comprometidos con la calidad y eficiencia en cada
            instalación.
          </li>
          <li>
            Éxito del Cliente: Enfocarnos en brindar soluciones energéticas que
            generen impacto y valor duradero.
          </li>
        </ul>
      </div>

      {/* Sección de Impacto */}
      <div className="impact-section">
        <h2>Nuestro Impacto</h2>
        <div className="impact-stats">
          <div className="stat">
            <h3>1,000+</h3>
            <p>Clientes</p>
          </div>
          <div className="stat">
            <h3>10+</h3>
            <p>Estados</p>
          </div>
        </div>
      </div>

      {/* Conoce al Equipo */}
      {/* <div className="team-section">
          <h2>Conoce al Equipo</h2>
          <div className="team-members">
            <div className="team-member">
              <img src="src/images/worker1.jpg" alt="Miembro del Equipo" />
            </div>
            <div className="team-member">
              <img src="src/images/worker2.jpg" alt="Miembro del Equipo" />
            </div>
            <div className="team-member">
              <img src="src/images/worker3.jpg" alt="Miembro del Equipo" />
            </div>
            <div className="team-member">
              <img src="src/images/worker4.jpg" alt="Miembro del Equipo" />
            </div>
            <div className="team-member">
              <img src="src/images/worker5.jpg" alt="Miembro del Equipo" />
            </div>
            <div className="team-member">
              <img src="src/images/worker6.jpg" alt="Miembro del Equipo" />
            </div>
          </div>
        </div> */}
    </section>
  );
};

export default AboutUsSection;
