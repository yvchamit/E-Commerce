import Copyright from "../../../src/layout/footer/Copyright";
import FooterInfo from "../../../src/layout/footer/FooterInfo";
import FooterTop from "../../../src/layout/footer/FooterTop";

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
