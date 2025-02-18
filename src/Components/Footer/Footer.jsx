import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Sobre Nosotros</h4>
          <img src="" alt="Imagen de la Empresa" className="footer-image" />
          <p>Estamos comprometidos a ofrecer los mejores productos y servicios a nuestros clientes.</p>
        </div>
        <div className="footer-section">
          <h4>Enlaces Rápidos</h4>
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/FeaturesSection">Características</a></li>
            <li><a href="/AboutUs">Sobre Nosotros</a></li>
            <li><a href="/OurProducts">Productos</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Síguenos</h4>
          <div className="social-links">
            <a href="https://www.facebook.com/energycolmx/">Facebook</a>
            <a href="https://twitter.com">Twitter</a>
            <a href="https://instagram.com">Instagram</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Energy +. Todos los Derechos Reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
