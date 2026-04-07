import Header from "../layout/Header/Header";
import Footer from "../layout/Footer/Footer";
import ShopBreadCrump from "../layout/Header/ShopBreadCrump";
import TeamList from "../sections/team/TeamList";
import TeamHero from "../sections/team/TeamHero";
import FreeTrial from "../sections/FreeTrial";
import ContactHero from "../sections/contact/ContactHero";
import Clients from "../sections/Clients";
import WorkWithUs from "../sections/about/WorkWithUs";
import Stats from "../sections/about/Stats";
import AboutIntro from "../sections/about/AboutIntro";
import AboutVideo from "../sections/about/AboutVideo";

function AboutPage() {
  return (
    <>
      <Header page="about" showIcon={true} />
      <ContactHero page="about" />
      <AboutIntro />
      <Stats />
      <AboutVideo />
      <TeamList length={3} showDescription={true} title="Meet Our Team" />
      <div className="py-20 md:py-28 bg-[#FAFAFA]">
        <Clients
          title="Big Companies Are Here"
          description="Problems trying to resolve the conflict between the two major realms of Classical physics"
          descriptionColor="text-[#737373]"
        />
      </div>
      <WorkWithUs />
      <Footer footerTopClassName="bg-white" />
    </>
  );
}

export default AboutPage;
