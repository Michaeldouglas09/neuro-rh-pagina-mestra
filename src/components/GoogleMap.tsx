
import React, { useEffect, useRef } from 'react';

const GoogleMap: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize the map only after the component has mounted
    if (!mapRef.current) return;
    
    // Create an iframe to embed the Google Map
    const iframe = document.createElement('iframe');
    iframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.9754687506906!2d-34.912607!3d-8.116764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab21f4c77c26c1%3A0x1c8d2e5c1dd38d8b!2sCentro%20de%20Eventos%20Recife!5e0!3m2!1spt-BR!2sbr!4v1714093199260!5m2!1spt-BR!2sbr";
    iframe.width = "100%";
    iframe.height = "400";
    iframe.style.border = "0";
    iframe.allowFullscreen = false;
    iframe.loading = "lazy";
    iframe.referrerPolicy = "no-referrer-when-downgrade";
    
    // Clear the div and append the iframe
    if (mapRef.current) {
      mapRef.current.innerHTML = '';
      mapRef.current.appendChild(iframe);
    }
  }, []);

  return (
    <section className="bg-white py-10">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold mb-4 text-center text-neuro-dark">Localização do Evento</h3>
          <div className="h-1 w-20 bg-neuro-purple mx-auto mb-6"></div>
          <p className="text-center text-gray-600 mb-6">
            Centro de Eventos Recife<br />
            Avenida Marechal Mascarenhas de Moraes<br />
            Imbiribeira, Recife, Pernambuco - 51150-004
          </p>
          <div 
            ref={mapRef} 
            className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default GoogleMap;
