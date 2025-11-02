import { useEffect, useState } from "react";
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
        href="https://wa.me/916381500790"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp"
      >
        <img src="/whatsapp.png" alt="Whatsapp icon" width="50" />
      </a>

      <a href="tel:+916381500790" className="phone  ">
        <img src="/telephone.png" alt="telephone icon" width="50" />
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
