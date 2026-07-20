import Footer from "../layout/footer/Footer";
import Header from "../layout/header/Header";
import ShopBreadcrumb from "../layout/header/ShopBreadcrumb";
import Clients from "../sections/common/Clients";
import FreeTrial from "../sections/common/FreeTrial";
import PricingFAQ from "../sections/pricing/PricingFAQ";
import PricingList from "../sections/pricing/PricingList";

function PricingPage() {
  return (
    <>
      <Header page="Pricing" showIcon="true" />
      <ShopBreadcrumb
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
