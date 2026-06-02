import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin } from "lucide-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";
import bgTexture from "../../assets/bg-texture.png";

const Footer = () => {
  return (
    <footer
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
       <div className="w-full py-12">

          {/* --- MAP SECTION --- */}
         <div className="max-w-7xl mx-auto bg-[#F8F6F2] rounded-[32px] border border-[#E5DCC7] overflow-hidden mb-16 shadow-md">
<div className="grid grid-cols-1 lg:grid-cols-2">
    {/* Left Side */}
    <div className="p-8 md:p-12 flex flex-col justify-center">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2B2217] mb-6">
        VISIT OUR STORE
      </h2>

      <div className="text-[#3B3127] text-base sm:text-lg leading-8 sm:leading-10">
        <p>SH15, opp. Govt HS School,</p>
        <p>Kannankulangara,</p>
        <p>Thrippunithura,</p>
        <p>Kerala 682301</p>
      </div>

      <a
        href="https://maps.google.com"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center mt-8 bg-[#C8A85A] text-white px-8 py-4 rounded-xl w-fit hover:opacity-90 transition"
      >
        View on Google Maps →
      </a>
    </div>

    {/* Right Side */}
    <div className="h-[300px] lg:h-[450px]">
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