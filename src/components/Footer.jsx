import {
  SiFacebook,
  SiInstagram,
  SiTwinmotion,
} from "@icons-pack/react-simple-icons";
import { Mail, Phone, MapPin, Computer,  } from "lucide-react";
import { Link } from "react-router-dom";

const footerData = {
  brand: {
    socials: [
      { link: "https://twitter.com", label: <SiTwinmotion /> },
      { link: "https://facebook.com", label: <SiInstagram /> },
      { link: "https://instagram.com", label: <SiFacebook /> },
    ],
  },
  sections: [
    {
      title: "Company",
      links: [
        { to: "/about", label: "About", href: "#" },
        { to: "/careers", label: "Careers", href: "#" },
        { to: "/blog", label: "Blog", href: "#" },
      ],
    },
    {
      title: "Support",
      links: [
        { to: "/contact", label: "Contact", href: "#" },
        { href: "mailto:support@instacart.com", label: "Support" },
        { to: "/faq", label: "FAQ", href: "#" },
      ],
    },
  ],
  contact: [
    { icon: Mail, text: "" },
    { icon: Phone, text: "" },
    { icon: MapPin, text: "" },
  ],
  bottom: {
    copyright: "© 2026 MockPrepare. All rights reserved.",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Settings", href: "#" },
    ],
  },
};

const Footer = () => {
  return (
    <footer className="bg-cyan-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* top */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand  */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4">
              < Computer className="w-6 h-6 text-white" />
              <span className="text-xl font-semibold">Mock-Prepare</span>
            </Link>
            <p className="text-sm text-white/70 mb-4">
              **Mock Prepare** is an EdTech platform designed to help Class 10
              students practice for school interviews and improve their
              communication skills. It provides simple mock interview sessions,
              helpful feedback, and easy tips to build confidence, speak
              clearly, and prepare for future academic and career opportunities.
            </p>

            <div className="flex gap-3">
              {footerData.brand.socials.map((social, i) => (
                <a
                  key={i}
                  href={social.link}
                  className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20"
                >
                  <span className="text-sm">{social.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Dynamic sections  */}

          {footerData.sections.map((section, i) => (
            <div key={i}>
              <h3 className="text-sm font-semibold uppercase mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2.5">
                {section.links.map((link, j) => (
                  <li key={j}>
                    {link.to ? (
                      <Link
                        to={link.to}
                        className="text-sm text-white/70 hover:text-white"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="text-sm text-white/70 hover:text-white"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* contact  */}

          <div className="">
            <h3 className="text-sm font-semibold uppercase mb-4">Contact Us</h3>
            <ul className="space-y-3">
              {footerData.contact.map((item, i) => {
                const Icon = item.icon;
                return (
                  <li key={i} className="flex gap-3 text-sm text-white/70">
                    <Icon className="size-4 text-white" />
                    {item.text}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* bottommmm */}

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>{footerData.bottom.copyright}</p>

          <div className="flex gap-4">
            {footerData.bottom.links.map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="text-xs text-white/50 hover:text-white/70 "
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
