import { footerSections } from "site/features/Footer/sections.ts";
import {
  FooterTitle,
  FootterLink,
  NewsletterSection,
  SubFooterSection,
} from "site/features/Footer/components.tsx";

function Footer() {
  return (
    <footer className="bg-primary text-muted-foreground">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          {footerSections.map((section) => (
            <div className="space-y-4">
              <FooterTitle>{section.title}</FooterTitle>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li>
                    <FootterLink href={link.url}>{link.text}</FootterLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <NewsletterSection />
        </div>
        <SubFooterSection />
      </div>
    </footer>
  );
}

export default Footer;
