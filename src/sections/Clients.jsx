import {
  FaAws,
  FaStripe,
  FaRedditAlien,
  FaLyft,
  FaHooli,
} from "react-icons/fa6";

import { GrPiedPiper } from "react-icons/gr";

const clients = [
  { id: 1, Icon: FaHooli, name: "Hooli" },
  { id: 2, Icon: FaLyft, name: "Lyft" },
  { id: 3, Icon: GrPiedPiper, name: "Pied Piper" },
  { id: 4, Icon: FaStripe, name: "Stripe" },
  { id: 5, Icon: FaAws, name: "AWS" },
  { id: 6, Icon: FaRedditAlien, name: "Reddit" },
];

import React from "react";

const Clients = ({
  title,
  description,
  descriptionColor = "text-[#737373]",
}) => {
  return (
    <section className="bg-[#FAFAFA]">
      <div className="max-w-section mx-auto py-12 px-8 md:px-0">
        {(title || description) && (
          <div className="text-center mb-14 max-w-150 mx-auto">
            {title && (
              <h2 className="text-4xl font-bold text-[#252B42] mb-6">
                {title}
              </h2>
            )}
            {description && (
              <p className={`text-xl font-medium ${descriptionColor}`}>
                {description}
              </p>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-12 items-center justify-items-center">
          {clients.map((client) => (
            <div
              key={client.id}
              className="group flex items-center justify-center w-full"
            >
              <client.Icon className="w-24 h-24 text-[#737373] opacity-90 transition-all duration-300 group-hover:opacity-100 group-hover:text-[#252B42] group-hover:drop-shadow-mdgroup-hover:scale-110 object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
