import { useState } from "react";
import { Button, Offcanvas, Accordion } from "react-bootstrap";
import { CgMenuRightAlt } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Virtual } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import FloatingContact from "./components/FloatingContact ";
import ContactForm from "./components/ContactForm";
import { FaQuoteRight } from "react-icons/fa";

function App() {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setShow(false);
  };

  const videoSources = [
    "/v1.mp4",
    "/v2.mp4",
    "/v3.mp4",
    "/v4.mp4",
    "/v5.mp4",
    "/v6.mp4",
    "/v7.mp4",
  ];

  const handleVideoClick = (e) => {
    if (e.target.paused) e.target.play();
    else e.target.pause();
  };

  return (
    <main className="min-vh-100 bg-white">
      {/* Navigation */}
      <header className="py-1 shadow header">
        <nav>
          {/* Desk top Navbar */}
          <div className="container d-none d-lg-flex align-items-center justify-content-between">
            <a
              className="logo d-flex align-items-center text-decoration-none"
              href="#home"
            >
              <img
                src="SharvaLogo.png"
                className="img-fluid me-2"
                alt="Sharva Yoga & Fitness Logo"
                width={150}
              />
            </a>

            <ul className="nav-list list-unstyled">
              <li>
                <a href="#home" className="nav-link-custom">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="nav-link-custom">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="nav-link-custom">
                  About Us
                </a>
              </li>
              <li>
                <a href="#tis" className="nav-link-custom">
                  Tips
                </a>
              </li>
              <li>
                <a href="#contact" className="nav-link-custom">
                  Contact Us
                </a>
              </li>
            </ul>

            <a
              href="#enroll"
              className="btn book-free-btn fw-semibold px-4 py-2"
            >
              Book Free Session
            </a>
          </div>

          {/* Mobile Navbar */}
          <div className="container d-lg-none">
            <div className="row d-flex align-items-center">
              <div className="col-8">
                <a
                  className="logo d-flex align-items-center text-decoration-none"
                  href="#home"
                >
                  <img
                    src="SharvaLogo.png"
                    className="img-fluid me-2"
                    alt="Sharva Yoga & Fitness Logo"
                    width={150}
                  />
                </a>
              </div>
              <div className="col-4 d-flex justify-content-end align-items-center">
                <Button onClick={handleShow} variant="none">
                  {show ? (
                    <div className="menu">
                      <IoClose className="menu-icon" />
                    </div>
                  ) : (
                    <div className="menu">
                      <CgMenuRightAlt className="menu-icon" />
                    </div>
                  )}
                </Button>
              </div>
            </div>
            <Offcanvas show={show} onHide={handleClose} className="w-75">
              <Offcanvas.Header className="py-1 shadow-sm ">
                <Offcanvas.Title>
                  <a href="#home">
                    <img
                      src="SharvaLogo.png"
                      className="img-fluid "
                      alt="Sharva Yoga & Fitness Logo"
                      width={150}
                    />
                  </a>
                </Offcanvas.Title>
              </Offcanvas.Header>

              <Offcanvas.Body>
                <div className="d-flex  gap-5">
                  <div className="mt-5 ps-2">
                    <ul className="list-unstyled d-flex flex-column  gap-4">
                      <li>
                        <a
                          href="#home"
                          className="nav-link-custom text-lg"
                          onClick={handleClose}
                        >
                          Home
                        </a>
                      </li>
                      <li>
                        <a
                          href="#services"
                          className="nav-link-custom text-lg"
                          onClick={handleClose}
                        >
                          Services
                        </a>
                      </li>
                      <li>
                        <a
                          href="#about"
                          className="nav-link-custom text-lg"
                          onClick={handleClose}
                        >
                          About Us
                        </a>
                      </li>
                      <li>
                        <a href="#tips" className="nav-link-custom">
                          Tips
                        </a>
                      </li>
                      <li>
                        <a
                          href="#contact"
                          className="nav-link-custom text-lg"
                          onClick={handleClose}
                        >
                          Contact Us
                        </a>
                      </li>
                      <li>
                        <a
                          href="#enroll"
                          onClick={handleClose}
                          className="btn book-free-btn fw-semibold px-4 py-2"
                        >
                          Book Free Session
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </Offcanvas.Body>
            </Offcanvas>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        style={{
          backgroundImage:
            "linear-gradient(rgba(138, 43, 226, 0.1), rgba(231, 84, 128, 0.1)), url(https://images.unsplash.com/photo-1545389336-cf090694435e?w=1600&q=80)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="container py-5">
          <div className="row align-items-center g-4 hero-text-side py-3 px-3">
            <div className="col-md-6">
              <h1 className="hero-text-main">
                A Safe <span className="hero-text-and">&</span> Supportive
                Fitness Community for Women
              </h1>
              <h3 className="hero-subtitle">
                Transform your body and mind through yoga
              </h3>
              <p className="mt-3 hero-description">
                Discover strength, balance, and inner peace. Our specialized
                yoga programs empower women to connect with their true
                potential.
              </p>

              <div className="mt-4 d-flex flex-wrap gap-3">
                <button
                  onClick={() => scrollToSection("services")}
                  className="hero-btn"
                >
                  Join Now
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="hero-btn hero-btn-active"
                >
                  Contact Us
                </button>
              </div>

              <div className="mt-4 row g-2 d-flex align-items-center bg-white justify-content-center rounded-3 px-2 py-3">
                <div className="col-12 d-flex align-items-start gap-2">
                  <div className="fs-4 d-flex align-items-center justify-content-center rounded-circle hero-icon p-2">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <address className="text-black m-0 hero-contact">
                    Karthik illam 231 G, 2nd floor, Kamarajar salai near
                    Manimaran Bakery, Madurai
                  </address>
                </div>

                <div className="col-12 d-flex align-items-center gap-2">
                  <div className="fs-4 d-flex align-items-center justify-content-center rounded-circle hero-icon p-2">
                    <Clock className="text-white" size={20} />
                  </div>
                  <div className="text-black m-0 hero-contact">
                    <p className="m-0">Batches (6AM - 7AM) (11AM - 12PM)</p>
                    <p className="m-0">Online only (4PM - 5PM)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="rounded-3">
                <img
                  src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80"
                  alt="Women practicing yoga"
                  className="img-fluid rounded-3 shadow-lg"
                  style={{
                    height: "400px",
                    objectFit: "cover",
                    width: "100%",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-5">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-md-6">
              <h2 className="section-title-main mb-3">
                What You Get with Saara
              </h2>
              <span className="about-title">WELCOME TO SAARA</span>
              <div>
                <p className="about-para mt-4">
                  At <b className="about-para-b">Saara Yoga</b> and{" "}
                  <b className="about-para-b">Fitness</b>, we go beyond regular
                  workouts, we help you build a balanced, healthy, and mindful
                  lifestyle.
                </p>
                <p className="about-para">
                  Our programs blend{" "}
                  <b className="about-para-b">traditional yoga</b> practices
                  with <b className="about-para-b">modern fitness techniques</b>
                  , designed to strengthen your body, calm your mind, and
                  energize your spirit.
                </p>
                <div className="ms-0 ms-md-4">
                  <ul className="list-unstyled">
                    <li className="about-hand">
                      <FaCheckCircle
                        className="me-3"
                        style={{ color: "#ca28c2ff", fontSize: "24px" }}
                      />
                      Personalized yoga and fitness sessions for all levels
                    </li>
                    <li className="about-hand">
                      <FaCheckCircle
                        className="me-3"
                        style={{ color: "#ca28c2ff", fontSize: "24px" }}
                      />
                      Certified trainers and holistic wellness support
                    </li>
                    <li className="about-hand">
                      <FaCheckCircle
                        className="me-3"
                        style={{ color: "#ca28c2ff", fontSize: "24px" }}
                      />
                      Meditation, breathwork, and stress-relief techniques
                    </li>
                    <li className="about-hand">
                      <FaCheckCircle
                        className="me-3"
                        style={{ color: "#ca28c2ff", fontSize: "24px" }}
                      />
                      Posture correction and flexibility improvement
                    </li>
                    <li className="about-hand">
                      <FaCheckCircle
                        className="me-3"
                        style={{ color: "#ca28c2ff", fontSize: "24px" }}
                      />
                      Nutrition tips and continuous progress tracking
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="rounded-3">
                <img
                  src="https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=800&q=80"
                  alt="Yoga practice"
                  className="img-fluid rounded-3 shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services 1 */}
      <section className="container mt-5">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={10}
          slidesPerView={2}
          loop={true}
          speed={1000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          freeMode={true}
          allowTouchMove={false}
          breakpoints={{
            768: { slidesPerView: 3 },
            992: { slidesPerView: 4 },
            1200: { slidesPerView: 5 },
          }}
        >
          {videoSources.map((src, index) => (
            <SwiperSlide key={index}>
              <video
                src={src}
                className="w-100 rounded-4"
                autoPlay
                loop
                muted
                playsInline
                onClick={handleVideoClick}
                style={{
                  height: "300px",
                  objectFit: "cover",
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Services 2 */}
      <section id="services" className="py-5">
        <div className="container">
          <h2 className="text-center mb-2 section-title">
            Our Specialized Programs
          </h2>
          <p className="text-center section-subtitle mb-5 mx-auto">
            Professional wellness programs tailored to transform your body,
            mind, and lifestyle
          </p>
          <div className="row g-4">
            {[
              {
                title: "Zumba Fitness",
                subtitle: "Creating a Fun and Effective Workout",
                desc: "High-energy dance fitness classes that combine Latin rhythms with easy-to-follow moves for a full-body cardio workout.",
                icon: "💃",
                gradient: "linear-gradient(135deg, #E75480, #D63959)",
                img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=80",
              },
              {
                title: "Weight Loss Program",
                subtitle: "Transform Your Body With Our Weight Loss Program",
                desc: "Comprehensive approach combining structured workouts, nutrition planning, and lifestyle coaching for sustainable results.",
                icon: "⚖️",
                gradient: "linear-gradient(135deg, #8A2BE2, #6A0DAD)",
                img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80",
              },
              {
                title: "Pre-Bridal Weight Loss",
                subtitle:
                  "Wedding Day With Our Targeted Pre-bridal Weight Loss",
                desc: "Specialized program to help you look and feel your absolute best on your special day with personalized fitness plans.",
                icon: "👰",
                gradient: "linear-gradient(135deg, #FF69B4, #E75480)",
                img: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&q=80",
              },
              {
                title: "Herbalife Nutrition",
                subtitle:
                  "Designed to Support Weight Management & Overall Health",
                desc: "Science-backed nutrition solutions with meal replacement shakes, supplements, and personalized dietary guidance.",
                icon: "🌿",
                gradient: "linear-gradient(135deg, #10B981, #059669)",
                img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&q=80",
              },
              {
                title: "Yoga Classes",
                subtitle: "Discover Inner Peace and Strength through Yoga",
                desc: "Traditional and modern yoga styles including Hatha, Vinyasa, and Power Yoga for all experience levels.",
                icon: "🧘‍♀️",
                gradient: "linear-gradient(135deg, #9333EA, #7C3AED)",
                img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&q=80",
              },
              {
                title: "Pregnancy Weight Loss",
                subtitle:
                  "Recover Your Pre-baby Body Healthily and Confidently",
                desc: "Safe postpartum fitness program designed to help new mothers regain strength and confidence after childbirth.",
                icon: "🤱",
                gradient: "linear-gradient(135deg, #3B82F6, #2563EB)",
                img: "https://images.unsplash.com/photo-1555817129-e58f9e4a2c8f?w=600&q=80",
              },
              {
                title: "Anti-Aging Program",
                subtitle: "Your Path to Timeless Beauty and Well-being",
                desc: "Holistic wellness approach combining fitness, nutrition, and lifestyle modifications to promote youthful vitality.",
                icon: "✨",
                gradient: "linear-gradient(135deg, #F59E0B, #D97706)",
                img: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?w=600&q=80",
              },
              {
                title: "CrossFit Training",
                subtitle: "Shape Your Body, Sculpt Your Confidence",
                desc: "High-intensity functional fitness program that builds strength, endurance, and athletic performance.",
                icon: "🏋️‍♀️",
                gradient: "linear-gradient(135deg, #EF4444, #DC2626)",
                img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80",
              },
              {
                title: "Dyno Kids",
                subtitle:
                  "Where Children Have Fun and Parents Can Feel Confident",
                desc: "Age-appropriate fitness and movement programs that develop coordination, strength, and healthy habits in children.",
                icon: "👶",
                gradient: "linear-gradient(135deg, #FBBF24, #F59E0B)",
                img: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&q=80",
              },
            ].map((service, idx) => (
              <div key={idx} className="col-md-6 col-lg-4">
                <div
                  className="card service-card border-0 shadow-sm h-100"
                  style={{ overflow: "hidden" }}
                >
                  <div className="service-image-wrapper">
                    <img
                      src={service.img}
                      alt={service.title}
                      className="card-img-top service-image"
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                    <div
                      className="service-overlay"
                      style={{ background: service.gradient }}
                    >
                      <div className="fs-1">{service.icon}</div>
                    </div>
                  </div>
                  <div className="card-body">
                    <h3 className="service-title">{service.title}</h3>
                    <p className="service-subtitle">{service.subtitle}</p>
                    <p className="service-description">{service.desc}</p>
                    <button className="btn btn-link service-link p-0 fw-semibold">
                      Learn More →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transformations 1*/}
      <section id="transformations" className="container py-4">
        <Swiper
          modules={[Virtual, Autoplay]}
          spaceBetween={10}
          slidesPerView={2}
          loop={true}
          speed={1000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
            1200: { slidesPerView: 3 },
          }}
        >
          <SwiperSlide key="slide-1">
            <div className="d-grid gap-3">
              <img
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
                className="img-fluid rounded-3"
                alt=""
              />
              <img
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
                className="img-fluid rounded-3"
                alt=""
              />
              <img
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
                className="img-fluid rounded-3"
                alt=""
              />
            </div>
          </SwiperSlide>

          <SwiperSlide key="slide-2">
            <div className="d-grid gap-3">
              <img
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
                className="img-fluid rounded-3"
                alt=""
              />
              <img
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
                className="img-fluid rounded-3"
                alt=""
              />
              <img
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
                className="img-fluid rounded-3"
                alt=""
              />
            </div>
          </SwiperSlide>

          <SwiperSlide key="slide-3">
            <div className="d-grid gap-3">
              <img
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"
                className="img-fluid rounded-3"
                alt=""
              />
              <img
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"
                className="img-fluid rounded-3"
                alt=""
              />
              <img
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"
                className="img-fluid rounded-3"
                alt=""
              />
            </div>
          </SwiperSlide>

          <SwiperSlide key="slide-4">
            <div className="d-grid gap-3">
              <img
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg"
                className="img-fluid rounded-3"
                alt=""
              />
              <img
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg"
                className="img-fluid rounded-3"
                alt=""
              />
              <img
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"
                className="img-fluid rounded-3"
                alt=""
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      {/* Transformations 2*/}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-2 section-title">Transformations</h2>
          <p className="text-center section-subtitle mb-5 mx-auto">
            Real results from real women in our community
          </p>

          <div className="row g-4">
            {[
              {
                name: "Priya S.",
                result: "Lost 15kg in 4 months",
                story:
                  "Through consistent yoga and personal training sessions, Priya achieved her dream body and gained incredible confidence.",
                duration: "4 months",
                program: "Weight Loss + Yoga",
                img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80",
              },
              {
                name: "Meera R.",
                result: "Pre-Bridal Transformation",
                story:
                  "Lost 12kg and toned her entire body for her wedding day. She looked absolutely stunning and felt amazing.",
                duration: "3 months",
                program: "Pre-Bridal Program",
                img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=80",
              },
              {
                name: "Anita K.",
                result: "Improved flexibility by 80%",
                story:
                  "From barely touching her toes to mastering advanced yoga poses. Regular Hatha yoga practice transformed her mobility.",
                duration: "6 months",
                program: "Yoga Classes",
                img: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=600&q=80",
              },
              {
                name: "Divya M.",
                result: "Postpartum Recovery Success",
                story:
                  "Safely regained her pre-pregnancy body and energy levels with our specialized postpartum program.",
                duration: "5 months",
                program: "Pregnancy Weight Loss",
                img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80",
              },
              {
                name: "Lakshmi V.",
                result: "Gained muscle & strength",
                story:
                  "Built lean muscle and increased strength through our CrossFit and Power Yoga combination program.",
                duration: "4 months",
                program: "CrossFit + Yoga",
                img: "https://images.unsplash.com/photo-1518310952931-b1de897abd40?w=600&q=80",
              },
              {
                name: "Kavitha P.",
                result: "Complete lifestyle change",
                story:
                  "Lost 20kg and reversed pre-diabetic condition through our comprehensive weight loss and nutrition program.",
                duration: "8 months",
                program: "Weight Loss + Nutrition",
                img: "https://images.unsplash.com/photo-1540206395-68808572332f?w=600&q=80",
              },
            ].map((transform, idx) => (
              <div key={idx} className="col-md-6 col-lg-4">
                <div className="card transformation-card border-0 shadow-sm h-100">
                  <div className="transformation-image-wrapper">
                    <img
                      src={transform.img}
                      alt={transform.name}
                      className="card-img-top"
                      style={{ height: "250px", objectFit: "cover" }}
                    />
                    <div className="transformation-badge">
                      <span
                        className="badge"
                        style={{
                          backgroundColor: "#8A2BE2",
                          color: "white",
                          fontSize: "0.85rem",
                        }}
                      >
                        {transform.program}
                      </span>
                    </div>
                  </div>
                  <div className="card-body">
                    <h4 className="transformation-name">{transform.name}</h4>
                    <p className="transformation-result">{transform.result}</p>
                    <p className="transformation-story">{transform.story}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="badge bg-light text-dark">
                        ⏱️ {transform.duration}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h1 className="display-5 fw-bold mb-2" style={{ color: "#333" }}>
              What Our <span style={{ color: "#E75480" }}>Clients</span> Say 💖
            </h1>
            <p className="text-muted">
              Inspiring journeys of women who found strength, balance, and
              confidence with Sharva Yoga & Fitness
            </p>
          </div>

          <div className="row g-4 justify-content-center">
            {[
              {
                name: "Sangavi NandaKumar.",
                text: "It’s been a month since I joined, and I’ve really enjoyed the sessions! Divya mam provides creative and effective workouts that make every class engaging. Each week includes a good mix of cardio, strength training, Zumba, yoga, and stretches. She also provides a simple and easy-to-follow diet chart, which helps in maintaining consistency and achieving results.",
              },
              {
                name: "Ramya G.",
                text: "I absolutely loved this yoga class! The instructor Divya mam was warm, knowledgeable, and guided us through each pose with clear, calming instructions. The atmosphere was peaceful and welcoming, making it easy to relax and fully immerse myself in the practice. Whether you're a beginner or more experienced, this class offers the perfect balance of challenge and relaxation. It’s the perfect way to reset and recharge—highly recommended for anyone looking to release tension and increase flexibility!",
              },
              {
                name: "Rajalakshmi Chandran.",
                text: "I'm glad to have found the proper spot for my fitness. Sharva Yoga & Fitness Centre provides a variety of activities such as power yoga, strength training, cardio, and so on. Instructor Divya constantly devises new routines to keep us interested while working out. I'm attending her online yoga lessons from overseas... excellent site for women looking to lose weight and increase flexibility.",
              },
              {
                name: "Priya Sasi.",
                text: "Sharva Yoga and Fitness class is a wonderful place. Divya Ma'am is very friendly with everyone. She always asks about our problems and provides solutions. The place is so peaceful, and I feel very happy there. I joined because I was suffering from hormonal issues for 6 months, and now my problem is solved. I am so happy! Thank you, Divya Ma'am.",
              },
              {
                name: "Jeya MathanKumar.",
                text: "I am very happy to have joined the online fitness class in Sharva Yoga. I joined in sep 2023 and have seen a huge difference in my weight and health.Divya takes huge effort to provide innovative workouts everyday. Her food recommendation has helped in the weight loss. I will recommend Sharva Yoga to anyone who is looking to change their lifestyle through exercise and healthy food habits.",
              },
            ].map((testimonial, idx) => (
              <div key={idx} className="col-12 col-sm-10 col-md-6 col-lg-4">
                <div className="testimonial-card h-100">
                  <div className="card-body p-4">
                    <div className="d-flex align-items-center mb-3">
                      <div className="testimonial-avatar rounded-circle me-3 px-3 py-2 fw-bold">
                        {testimonial.name.charAt(0).toUpperCase()}
                      </div>
                      <div className="d-flex align-items-center justify-content-between w-100">
                        <div>
                          <h5
                            className="fw-bold mb-0"
                            style={{ color: "#8A2BE2" }}
                          >
                            {testimonial.name}
                          </h5>
                          <small className="text-muted">⭐⭐⭐⭐⭐</small>
                        </div>
                        <FaQuoteRight
                          style={{
                            opacity: 0.8,
                            fontSize: "1.3rem",
                          }}
                        />
                      </div>
                    </div>

                    <p className="testimonial-text fst-italic text-dark">
                      “{testimonial.text}”
                    </p>

                    <div className="d-flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <i
                          key={i}
                          className="bi bi-star-fill"
                          style={{ color: "#FFD700" }}
                        ></i>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips & FAQ */}
      <section id="faq" className="py-5">
        <div className="container">
          <div className="row ">
            {/* Fitness & Wellness Tips */}
            <div className="col-lg-6">
              <h2
                className="display-6 fw-bold mb-4 ps-3"
                style={{ color: "#333" }}
              >
                <span style={{ color: "#E75480" }}>Women's</span> <br /> Fitness
                & Wellness Tips
              </h2>

              <div className="d-flex flex-column gap-3 mb-3">
                {[
                  {
                    tip: "Stay Consistent with Your Workouts",
                    desc: "Aim for at least 30 minutes of exercise, 5 days a week. Consistency builds strength and confidence.",
                  },
                  {
                    tip: "Balance Cardio & Strength Training",
                    desc: "Combine yoga, dance, and strength workouts to tone muscles and boost metabolism.",
                  },
                  {
                    tip: "Hydrate and Nourish",
                    desc: "Drink plenty of water and include protein-rich foods to support your workouts and recovery.",
                  },
                  {
                    tip: "Prioritize Rest & Recovery",
                    desc: "Sleep 7–8 hours daily and practice yoga or stretching to relax your muscles.",
                  },
                  {
                    tip: "Empower Your Mind",
                    desc: "A healthy body starts with a positive mindset. Practice deep breathing and mindfulness daily.",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="card border-0"
                    style={{ backgroundColor: "#F3E8FF" }}
                  >
                    <div className="card-body p-4">
                      <h4
                        className="h6 fw-bold mb-2"
                        style={{ color: "#8A2BE2" }}
                      >
                        {item.tip}
                      </h4>
                      <p className="text-dark mb-0">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ Accordion */}
            <div className="col-lg-6 mt-4 mt-md-0 mb-3">
              <h2
                className="display-6 fw-bold mb-4 ps-3"
                style={{ color: "#333" }}
              >
                Frequently Asked
                <span style={{ color: "#E75480" }}> Questions</span>
              </h2>

              <Accordion defaultActiveKey="0">
                {[
                  {
                    q: "Is this program only for women?",
                    a: "Yes! Our fitness and yoga sessions are designed specifically for women, focusing on strength, flexibility, and hormonal balance.",
                  },
                  {
                    q: "Do I need to be fit to start?",
                    a: "Not at all. We welcome all fitness levels — from beginners to advanced. Our trainers modify every session to match your capability.",
                  },
                  {
                    q: "Are online sessions available?",
                    a: "Yes! We conduct daily online fitness & yoga sessions for women who prefer working out from home.",
                  },
                  {
                    q: "What kind of workouts do you offer?",
                    a: "We offer a mix of strength training, HIIT, dance fitness, and yoga — all customized to your fitness goals.",
                  },
                  {
                    q: "How does yoga fit into the program?",
                    a: "Yoga complements your fitness routine by improving flexibility, posture, and relaxation while reducing stress.",
                  },
                  {
                    q: "Can I join if I have specific health conditions?",
                    a: "Yes, but we recommend consulting your doctor first. Our trainers can tailor sessions for back pain, PCOS, or postnatal recovery.",
                  },
                  {
                    q: "Do you offer personal training for women?",
                    a: "Absolutely! We provide one-on-one coaching sessions for personalized fitness and nutrition guidance.",
                  },
                  {
                    q: "What should I bring to the class?",
                    a: "Wear breathable workout clothes, bring a towel, a water bottle, and your positive energy!",
                  },
                ].map((faq, idx) => (
                  <Accordion.Item eventKey={idx.toString()} key={idx}>
                    <Accordion.Header style={{ backgroundColor: "#F3E8FF" }}>
                      <h4 className="h6 fw-bold mb-2">{faq.q}</h4>
                    </Accordion.Header>
                    <Accordion.Body className="bg-light">
                      {faq.a}
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className=" container-fluid ">
        <div className="container pt-3 pb-5">
          <div className=" row text-center">
            <h1 className="display-4 fw-bold mb-2">
              Get in <span style={{ color: "#E75480" }}>Touch</span>
            </h1>
            <p>
              Have questions or need assistance? We're here to help you on your
              fitness & yoga journey.
            </p>
          </div>

          <div className="row g-5">
            <div className="col-lg-6">
              <iframe
                title="studio-map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.1995558088006!2d78.13158399999999!3d9.917331699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c5f0b9eb886f%3A0xe1c840175f2954af!2sSharva%20Yoga%20and%20Fitness!5e0!3m2!1sen!2sin!4v1761324807730!5m2!1sen!2sin"
                width="100%"
                height="100%"
                className="rounded border-0"
                loading="lazy"
              ></iframe>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer text-white py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-3 mb-3 mb-md-0">
              <a className="logo d-flex text-decoration-none " href="#home">
                <img
                  src="SharvaLogo.png"
                  className="img-fluid bg-white mb-4 rounded-1 pe-2"
                  alt="Sharva Yoga & Fitness Logo"
                  width={150}
                />
              </a>
              <p className="text-white footer-font w-75">
                Transform your life through wellness, balance, and strength.
              </p>
            </div>
            <div className="col-lg-3 mb-3 mb-md-0">
              <h4 className="h5 mb-3 font-semibolds">QUICK LINKS</h4>
              <div className="d-flex flex-column gap-2">
                <button
                  onClick={() => scrollToSection("about")}
                  className="btn btn-link text-white text-decoration-none p-0 text-start"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="btn btn-link text-white text-decoration-none p-0 text-start"
                >
                  About Us
                </button>
                <button
                  onClick={() => scrollToSection("services")}
                  className="btn btn-link text-white text-decoration-none p-0 text-start"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection("testimonials")}
                  className="btn btn-link text-white text-decoration-none p-0 text-start"
                >
                  Testimonials
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="btn btn-link text-white text-decoration-none p-0 text-start"
                >
                  Contact Us
                </button>
              </div>
            </div>
            <div className="col-lg-3 mb-3 mb-md-0">
              <h4 className="h5 mb-3 font-semibold">SERVICES</h4>
              <div className="d-flex flex-column gap-2 text-white">
                <p className="mb-0">Yoga Classes</p>
                <p className="mb-0">Personal Training</p>
                <p className="mb-0">Group Fitness</p>
                <p className="mb-0">Nutrition Guidance</p>
              </div>
            </div>
            <div className="col-lg-3 mb-3 mb-md-0">
              <h4 className="h5 font-semibold mb-3">FOLLOW US</h4>
              <div className="d-flex gap-3">
                <div className="fs-4 d-flex align-items-center justify-content-center rounded-circle bg-white p-2">
                  <FaFacebook className="text-black" size={24} />
                </div>
                <div className="fs-4 d-flex align-items-center justify-content-center rounded-circle bg-white p-2">
                  <FaInstagram className="text-black" size={24} />
                </div>
                <div className="fs-4 d-flex align-items-center justify-content-center rounded-circle bg-white p-2">
                  <FaYoutube className="text-black" size={24} />
                </div>
              </div>
              <div>
                <p className="mb-0 copy-rights mt-4">
                  Copyright &copy; 2025 All rights reserved |
                </p>
                <p className="mb-0 copy-rights">
                  Sharva Yoga & Fitness | Developed by{" "}
                  <span style={{ color: "yellow" }}>ANextTech</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <section
        className="py-2 text-center"
        style={{ backgroundColor: "#F3E8FF" }}
      >
        <p className="mb-0">
          Made with <span className="text-danger">❤️</span> for women's wellness
        </p>
      </section>

      {/* Floating contact */}
      <FloatingContact />
    </main>
  );
}

export default App;














