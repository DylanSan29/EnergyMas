import React from 'react';
import './OurProducts.css'; // Nuevos estilos

const products = [
  { 
    id: 1, 
    name: "Paneles solares", 
    description: "La solución perfecta para empresas que buscan eficiencia energética, reducción de costos y un compromiso con la sostenibilidad, adaptada a las necesidades de tu negocio.", 
    image: "https://via.placeholder.com/400", 
    link: "#" 
  },
  { 
    id: 2, 
    name: "Calentadores solares", 
    description: "La solución ideal para empresas y hogares que buscan eficiencia energética y un ahorro significativo en costos de calefacción, aprovechando la energía solar de manera sostenible.", 
    image: "https://via.placeholder.com/400", 
    link: "#" 
  },  
  { 
    id: 3, 
    name: "Paquete de 12 paneles solares", 
    description: "Perfecto para hogares medianos o pequeñas empresas que buscan una solución energética eficiente, con un alto rendimiento y ahorro a largo plazo.", 
    image: "https://via.placeholder.com/400", 
    link: "#" 
  },  
];


const OurProducts = () => {
  return (
    <section className="our-products">
      <h2 className="section-heading">Nuestros Productos Exclusivos</h2>
      <p className="section-subheading">Descubre la combinación perfecta de estilo y funcionalidad.</p>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-description">{product.description}</p>
              {/* <a href={product.link} className="cta-button">Ver Detalles</a> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurProducts;
