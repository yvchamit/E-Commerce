import Header from "../layout/Header/Header";
import Footer from "../layout/Footer/Footer";
import ContactHero from "../sections/contact/ContactHero";
import VisitOffice from "../sections/contact/VisitOffice";
import TalkOffice from "../sections/contact/TalkOffice";

function HomePage() {
  return (
    <>
      <Header page="contact"/>
      <ContactHero />
      <VisitOffice/>
      <TalkOffice/>
      <Footer footerTopClassName={"bg-white"} />
    </>
  );
}

export default HomePage;
