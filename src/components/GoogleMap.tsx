
import React, { useEffect, useRef } from 'react';

const GoogleMap: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize the map only after the component has mounted
    if (!mapRef.current) return;
    
    // Create an iframe to embed the Google Map
    const iframe = document.createElement('iframe');
    iframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.4073767670904!2d-47.18827142455181!3d-23.62244977869691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c58b975e574071%3A0x1cb44ac3589cfb56!2sRecruitment%20-%20Recursos%20Humanos!5e0!3m2!1spt-BR!2sbr!4v1714088640678!5m2!1spt-BR!2sbr";
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
            Recruitment - Recursos Humanos<br />
            R. Sorocaba, 1033 - Centro, Votorantim - SP, 18110-074
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
