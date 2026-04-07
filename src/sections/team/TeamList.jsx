import TeamCard from '../../components/TeamCard'

const teamMembers = [
  { id: 1, name: "Username", role: "Profession", image: "/image/team1.jpg" },
  { id: 2, name: "Username", role: "Profession", image: "/image/team2.jpg" },
  { id: 3, name: "Username", role: "Profession", image: "/image/team3.jpg" },
  { id: 4, name: "Username", role: "Profession", image: "/image/team4.jpg" },
  { id: 5, name: "Username", role: "Profession", image: "/image/team5.jpg" },
  { id: 6, name: "Username", role: "Profession", image: "/image/team6.jpg" },
  { id: 7, name: "Username", role: "Profession", image: "/image/team7.jpg" },
  { id: 8, name: "Username", role: "Profession", image: "/image/team8.jpg" },
  { id: 9, name: "Username", role: "Profession", image: "/image/team9.jpg" },
];

const TeamList = ({
  length = 3,
  showDescription = false,
  title = "Meet Our Team",
}) => {
  // Gönderilen length değerine göre yeni bir liste kopyası oluşturuyoruz
  const displayList = teamMembers.slice(0, length);

  return (
    <section className="py-20 px-4 max-w-section mx-auto">
      {/* Başlık ve Şartlı Açıklama Alanı */}
      <div className="text-center mb-8 md:mb-16 flex flex-col items-center gap-4">
        <h2 className="text-4xl font-bold text-[#252B42] mx-auto max-w-60 md:max-w-112.5">
          {title}
        </h2>

        {/* showDescription true ise bu paragraf görünür */}
        {showDescription && (
          <p className="text-[#737373] text-sm font-medium max-w-60 md:max-w-112.5 leading-relaxed">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
        )}
      </div>

      {/* Kartların Listelendiği Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-0 gap-y-12">
        {displayList.map((member) => (
          <TeamCard
            key={member.id}
            image={member.image}
            name={member.name}
            role={member.role}
          />
        ))}
      </div>
    </section>
  );
};

export default TeamList;
