import Footer from "../layout/Footer/Footer";
import Header from "../layout/Header/Header";
import ShopBreadCrump from "../layout/Header/ShopBreadCrump";
import Clients from "../sections/Clients";
import FreeTrial from "../sections/FreeTrial";
import PricingFAQ from "../sections/pricing/PricingFAQ";
import PricingList from "../sections/pricing/PricingList";

function PricingPage() {
  return (
    <>
      <Header page="Pricing" showIcon="true" />
      <ShopBreadCrump
        variant="centered"
        subtitle="PRICING"
        title="Simple Pricing"
        currentPage="Pricing"
      />
      <PricingList/>
      <Clients
        description="Trusted By Over 4000 Big Companies"
        descriptionColor="text-[#252B42]"
      />
      <PricingFAQ/>
      <FreeTrial />
      <Footer footerTopClassName="bg-white" />
    </>
  );
}

export default PricingPage;
