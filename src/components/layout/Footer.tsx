import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin } from "lucide-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";
import bgTexture from "../../assets/bg-texture.png";

const Footer = () => {
  return (
    <footer
    id="contact"
      className="relative text-[#D4AF5A]"
      style={{
        background:
          "linear-gradient(180deg, #2B2217 0%, #241A12 50%, #1E160F 100%)",
      }}
    >

      {/* --- BACKGROUND IMAGE --- */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${bgTexture})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.9, // adjust if needed (0.1 - 0.3)
        }}
      ></div>

      {/* --- CONTENT WRAPPER (Overlay for readability) --- */}
      <div className="relative">
        <div className="w-full ">

          
          {/* --- MAP SECTION --- */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-12">
            <div className="bg-white rounded-[28px] border border-[#E8E1D3] overflow-hidden shadow-[0_10px_25px_rgba(0,0,0,0.06)]">

              <div className="grid grid-cols-1 lg:grid-cols-2">

                {/* Left Side */}
                <div className="p-5 md:p-6 lg:p-8 flex flex-col justify-center">

                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-11 h-11 rounded-full bg-[#C8A85A] flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-white" />
                    </div>

                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-[#3A2A1A]">
                        VISIT OUR STORE
                      </h2>
                    </div>
                  </div>

                  <div className="text-[#4B4035] text-sm md:text-base leading-7 ml-15 md:ml-16">
                    <p>SH15, opp. Govt HS School,</p>
                    <p>Kannankulangara,</p>
                    <p>Thrippunithura,</p>
                    <p>Kerala 682301</p>
                  </div>

                  <div className="ml-15 md:ml-16 mt-5">
                    <a
  href="https://www.google.com/maps/search/?api=1&query=9.943071674012783,76.34724677450792"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-3 bg-[#C8A85A] text-white px-6 py-3 rounded-xl hover:bg-[#B99849] transition-all duration-300"
>
  View on Google Maps
  <span className="text-lg">→</span>
</a>
                  </div>

                </div>

                {/* Right Side */}
                <div className="h-[220px] sm:h-[250px] md:h-[280px] lg:h-[300px]">
                  <iframe
                    title="KBS Traders Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3556.3461816033578!2d76.34724677450792!3d9.943071674012783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b08739935274861%3A0x37776d0fc870fc5a!2sKBS%20TRADERS!5e1!3m2!1sen!2sin!4v1770401656623!5m2!1sen!2sin"
                    className="w-full h-full"
                    style={{ border: 0 }}
                    loading="lazy"
                  />
                </div>

              </div>
            </div>
          </div>
          <div
            className="py-10 md:py-16"
            style={{
              background:
                "linear-gradient(90deg,#24180F 0%,#2B1E12 50%,#24180F 100%)",
            }}
          >
            {/* --- GRID SECTION --- */}
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-10">

              {/* Column 1 */}
              <div className="flex flex-col gap-4 lg:pr-10 lg:border-r border-[#5A4630]">
                <h1 className="text-2xl md:text-xl font-bold text-white uppercase tracking-widest">KBS TRADERS</h1>

                <ul className="space-y-2 text-sm text-white">
                  <li className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    <a href="mailto:info@kbstraders.com">info@kbstraders.com</a>
                  </li>
                  <li className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    <a href="tel:+919946601888">+91 9946601888</a>
                  </li>
                  <li className="flex items-start gap-2 pt-1">
                    <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                    <span>
                      SH15, opp. Govt HS School, Kannankulangara, Thrippunithura, Kerala 682301
                    </span>
                  </li>
                </ul>

                {/* Social Icons */}
                <div className="flex flex-wrap gap-3 mt-6">
                  <a href="https://www.instagram.com/kbstraders.in/" className="w-11 h-11 rounded-full border border-[#D4AF5A] flex items-center justify-center text-white hover:bg-[#D4AF5A] hover:text-[#2B2217] transition">
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a href="https://www.facebook.com/profile.php?id=61579892137344" className="w-11 h-11 rounded-full border border-[#D4AF5A] flex items-center justify-center text-white hover:bg-[#D4AF5A] hover:text-[#2B2217] transition">
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a href="https://www.linkedin.com/company/kbstraderskerala/" className="w-11 h-11 rounded-full border border-[#D4AF5A] flex items-center justify-center text-white hover:bg-[#D4AF5A] hover:text-[#2B2217] transition">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href="https://wa.me/919946601888" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full border border-[#D4AF5A] flex items-center justify-center text-white hover:bg-[#D4AF5A] hover:text-[#2B2217] transition">
                    <FontAwesomeIcon icon={faWhatsapp} className="h-5 w-5" />
                  </a>
                </div>
              </div>

              {/* Column 2 */}
              <div className="lg:px-10 lg:border-r border-[#5A4630]">
                <h4 className="font-bold text-sm uppercase mb-6 text-white tracking-widest">CATEGORIES</h4>
                <ul className="space-y-3 text-sm text-white">
                  <li><a href="#categories" className="hover:text-accent">Dates</a></li>
                  <li><a href="#categories" className="hover:text-accent">Nuts</a></li>
                  <li><a href="#categories" className="hover:text-accent">Dry Fruits</a></li>
                  <li><a href="#categories" className="hover:text-accent">Chocolates</a></li>
                  <li><a href="#categories" className="hover:text-accent">Spices</a></li>
                  <li><a href="#categories" className="hover:text-accent">Seeds</a></li>
                </ul>
              </div>

              {/* Column 3 */}
              <div className="lg:px-10 lg:border-r border-[#5A4630]">
                <h4 className="font-bold text-sm uppercase text-white mb-6 tracking-widest">KNOW US</h4>
                <ul className="space-y-3 text-sm text-white">
                  <li><Link to="/about-us" className="hover:text-accent">About Us</Link></li>
                  <li><a href="#" className="hover:text-accent">Contact Us</a></li>
                  <li><a href="#" className="hover:text-accent">Blog</a></li>
                  <li><a href="#" className="hover:text-accent">Delivery Status</a></li>
                </ul>
              </div>

              {/* Column 4 */}
              <div className="lg:pl-10">
                <h4 className="font-bold text-sm uppercase text-white mb-6 tracking-widest">POLICIES</h4>
                <ul className="space-y-3 text-sm text-white">
                  <li><a href="#" className="hover:text-accent">Terms & Conditions</a></li>
                  <li><a href="#" className="hover:text-accent">Privacy & Policy</a></li>
                  <li><a href="#" className="hover:text-accent">Return Policy</a></li>
                  <li><a href="#" className="hover:text-accent">Refund Policy</a></li>
                  <li><a href="#" className="hover:text-accent">Shipping Policy</a></li>
                </ul>
              </div>

            </div>

            {/* --- COPYRIGHT --- */}
            <div className="border-t border-[#5A4630] mt-12">
              <div className="max-w-7xl mx-auto px-4 py-6 text-center text-sm text-white">
                <p>© 2026 KBS Traders. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;