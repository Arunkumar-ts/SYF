import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { LuPhoneCall } from "react-icons/lu";
import { RiArrowUpDoubleLine } from "react-icons/ri";

const FloatingContact = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="floating-contact">
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-success contact-btn whatsapp"
      >
        <FaWhatsapp size={24} />
      </a>

      <a href="tel:+919876543210" className=" btn-primary contact-btn phone">
        <LuPhoneCall size={22} />
      </a>

      {showScroll && (
        <button className=" contact-btn up mt-4" onClick={scrollToTop}>
          <RiArrowUpDoubleLine size={29} />
        </button>
      )}
    </div>
  );
};

export default FloatingContact;
