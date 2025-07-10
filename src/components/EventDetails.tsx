
import React from 'react';
import { Calendar, MapPin, Clock, Users } from "lucide-react";

const EventDetails: React.FC = () => {
  const eventDetails = [
    { icon: <Calendar className="text-neuro-purple" />, text: "30 de Agosto de 2025" },
    { icon: <MapPin className="text-neuro-purple" />, text: "Centro de Eventos Recife" },
    { icon: <Clock className="text-neuro-purple" />, text: "Das 9h às 18h (8h de conteúdo)" },
    { icon: <Users className="text-neuro-purple" />, text: "Máximo 12 participantes" }
  ];

  return (
    <div className="mb-6">
      <h3 className="text-2xl font-semibold mb-2">Detalhes do Evento</h3>
      <div className="h-1 w-20 bg-neuro-purple mb-4"></div>
      
      <ul className="space-y-4">
        {eventDetails.map((detail, index) => (
          <li key={index} className="flex items-center gap-3">
            <div className="p-2 bg-white/10 rounded-full">
              {detail.icon}
            </div>
            <span className="text-lg">{detail.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventDetails;
