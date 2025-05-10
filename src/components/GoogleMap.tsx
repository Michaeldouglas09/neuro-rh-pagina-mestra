
import React, { useEffect, useRef } from 'react';

const GoogleMap: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize the map only after the component has mounted
    if (!mapRef.current) return;
    
    // Create an iframe to embed the Google Map
    const iframe = document.createElement('iframe');
    iframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.0200156961262!2d-35.7323182!3d-9.6468181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x70145b9ef5b54a1%3A0x1b373d3aa6727f07!2sR.%20El%C3%B3i%20Lemos%20de%20Fran%C3%A7a%2C%2075%20-%20Gruta%20de%20Lourdes%2C%20Macei%C3%B3%20-%20AL%2C%2057052-880!5e0!3m2!1spt-BR!2sbr!4v1714093199260!5m2!1spt-BR!2sbr";
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
            R. Elói Lemos de França, 75 - Gruta de Lourdes<br />
            Maceió - AL, 57052-880
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
