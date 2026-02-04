import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  HomeOutlined,
} from "@ant-design/icons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: "About Us", href: "#about" },
      { label: "Our Team", href: "#team" },
      { label: "Careers", href: "#careers" },
      { label: "Blog", href: "#blog" },
    ],
    properties: [
      { label: "Search Properties", href: "#search" },
      { label: "List Your Property", href: "#list" },
      { label: "Featured Listings", href: "#featured" },
      { label: "Neighborhoods", href: "#neighborhoods" },
    ],
    support: [
      { label: "Help Center", href: "#help" },
      { label: "Terms of Service", href: "#terms" },
      { label: "Privacy Policy", href: "#privacy" },
      { label: "FAQs", href: "#faq" },
    ],
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(135deg, #7613AB 0%, #7B45BD 100%)",
                }}
              >
                <HomeOutlined className="text-white text-2xl" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Name</h2>
                <p className="text-xs" style={{ color: "#A4ACD3" }}>
                  Find Your Dream Home
                </p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your trusted partner in finding the perfect rental property. We
              connect landlords and tenants seamlessly.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 hover:bg-[#7613AB] transition-all duration-200"
              >
                <FacebookOutlined className="text-lg" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 hover:bg-[#7613AB] transition-all duration-200"
              >
                <TwitterOutlined className="text-lg" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 hover:bg-[#7613AB] transition-all duration-200"
              >
                <InstagramOutlined className="text-lg" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 hover:bg-[#7613AB] transition-all duration-200"
              >
                <LinkedinOutlined className="text-lg" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3
              className="text-lg font-semibold mb-4"
              style={{ color: "#A4ACD3" }}
            >
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#7B45BD] transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Properties Links */}
          <div>
            <h3
              className="text-lg font-semibold mb-4"
              style={{ color: "#A4ACD3" }}
            >
              Properties
            </h3>
            <ul className="space-y-3">
              {footerLinks.properties.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#7B45BD] transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3
              className="text-lg font-semibold mb-4"
              style={{ color: "#A4ACD3" }}
            >
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-gray-400 text-sm">
                <EnvironmentOutlined className="text-[#7B45BD] mt-1" />
                <span>
                  123 Real Estate Ave,
                  <br />
                  New York, NY 10001
                </span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400 text-sm">
                <PhoneOutlined className="text-[#7B45BD]" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400 text-sm">
                <MailOutlined className="text-[#7B45BD]" />
                <span>info@name.com</span>
              </li>
            </ul>

            {/* Newsletter */}
            <div className="mt-6">
              <h4
                className="text-sm font-semibold mb-2"
                style={{ color: "#A4ACD3" }}
              >
                Subscribe to Newsletter
              </h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 rounded-l-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 text-sm focus:outline-none focus:border-[#7B45BD]"
                />
                <button
                  className="px-4 py-2 rounded-r-lg text-white font-medium text-sm"
                  style={{
                    background:
                      "linear-gradient(135deg, #7613AB 0%, #7B45BD 100%)",
                  }}
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Support Links */}
        <div className="border-t border-white/10 pt-6">
          <div className="flex flex-wrap gap-4 justify-center mb-4">
            {footerLinks.support.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-gray-400 hover:text-[#7B45BD] transition-colors duration-200 text-sm"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Name. All rights reserved.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>Made with</span>
              <span className="text-red-500 text-lg">♥</span>
              <span>for renters everywhere</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
