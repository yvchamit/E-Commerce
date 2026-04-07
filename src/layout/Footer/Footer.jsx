import Copyright from "../../../src/layout/Footer/Copyright";
import FooterInfo from "../../../src/layout/Footer/FooterInfo";
import FooterTop from "../../../src/layout/Footer/FooterTop";

function Footer({ isGray = false }) {
  return (
    <footer>
      <FooterTop isGray={isGray} />
      <FooterInfo />
      <Copyright />
    </footer>
  );
}

export default Footer;
