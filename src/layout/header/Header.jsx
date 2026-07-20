import Infobar from "./Infobar";
import Navbar from "./Navbar";
import { PAGE_CONFIG } from "../../lib/navConfig";

export default function Header({ page = "home", showIcon }) {
  const config = PAGE_CONFIG[page.toLowerCase()] ?? PAGE_CONFIG.home;

  return (
    <header className="w-full">
      {config.infobar && (
        <Infobar maxWidth={config.maxWidth} bgColor={config.infobarBg} />
      )}
      <Navbar
        page={page}
        variant={config.nav}
        maxWidth={config.maxWidth}
        showIcon={showIcon}
      />
    </header>
  );
}
