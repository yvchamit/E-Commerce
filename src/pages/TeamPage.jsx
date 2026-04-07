import Header from "../layout/Header/Header";
import Footer from "../layout/Footer/Footer";
import ShopBreadCrump from "../layout/Header/ShopBreadCrump";
import TeamList from "../sections/team/TeamList";
import TeamHero from "../sections/team/TeamHero";
import FreeTrial from "../sections/FreeTrial";

function TeamPage() {
  return (
    <>
      <Header page="team" showContactIcon={true} />
      <div className="pt-8">
        <ShopBreadCrump
          variant="centered"
          subtitle="WHAT WE DO"
          title="Innovation tailored for you"
          currentPage="Team"
        />
      </div>
      <TeamHero />
      <TeamList length={9} showDescription={false} title="Meet Our Team" />
      <FreeTrial />
      <Footer footerTopClassName="bg-white" />
    </>
  );
}

export default TeamPage;
