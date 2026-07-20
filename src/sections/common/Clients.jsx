import {
  FaAws,
  FaStripe,
  FaRedditAlien,
  FaLyft,
  FaHooli,
} from "react-icons/fa6";

import { GrPiedPiper } from "react-icons/gr";

const clients = [
  {
    id: 1,
    Icon: FaHooli,
    name: "Hooli",
    url: "https://www.google.com/search?q=hooli",
  },
  { id: 2, Icon: FaLyft, name: "Lyft", url: "https://www.lyft.com" },
  {
    id: 3,
    Icon: GrPiedPiper,
    name: "Pied Piper",
    url: "https://www.google.com/search?q=pied+piper",
  },
  { id: 4, Icon: FaStripe, name: "Stripe", url: "https://www.stripe.com" },
  { id: 5, Icon: FaAws, name: "AWS", url: "https://aws.amazon.com" },
  { id: 6, Icon: FaRedditAlien, name: "Reddit", url: "https://www.reddit.com" },
];

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
            <a
              key={client.id}
              href={client.url || "#"}
              target="_blank"
              className="group flex items-center justify-center w-full transition-all duration-300"
            >
              <client.Icon
                className="w-24 h-24 text-[#737373] opacity-75 transition-all duration-300 
                group-hover:opacity-100 group-hover:text-[#252B42] group-hover:drop-shadow-sm 
                group-hover:scale-110 object-contain cursor-pointer"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
