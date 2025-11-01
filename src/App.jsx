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
import FloatingContact from "./FloatingContact ";

function App() {
  const [show, setShow] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setShow(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you soon.");
    setContactForm({ name: "", email: "", phone: "", message: "" });
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
          <h2 className="text-center mb-2 section-title">
            What Our Clients Say
          </h2>
          <p className="text-center section-subtitle mb-5 mx-auto">
            Hear from women who have transformed their lives at Saara Yoga &
            Fitness
          </p>

          <div className="row g-4">
            {[
              {
                name: "Lakshmi R.",
                role: "Yoga Student",
                text: "Saara Yoga has completely transformed my life. The instructors are knowledgeable and caring, and the atmosphere is so welcoming. I feel stronger and more balanced than ever!",
                rating: 5,
                program: "Yoga Classes",
              },
              {
                name: "Priya M.",
                role: "Weight Loss Member",
                text: "Best fitness center in the city! The combination of yoga and modern fitness training is perfect. I have achieved my fitness goals faster than I imagined. Lost 15kg and feeling fantastic!",
                rating: 5,
                program: "Weight Loss Program",
              },
              {
                name: "Deepa N.",
                role: "New Mother",
                text: "The pregnancy weight loss program helped me stay fit and recover beautifully after childbirth. The instructors are specially trained and very supportive. Highly recommended!",
                rating: 5,
                program: "Pregnancy Weight Loss",
              },
              {
                name: "Arjun T.",
                role: "CrossFit Member",
                text: "Great facilities, excellent trainers, and a wonderful community. The CrossFit program really pushed my limits and I have seen amazing strength gains. I look forward to every session!",
                rating: 5,
                program: "CrossFit Training",
              },
              {
                name: "Shruti K.",
                role: "Pre-Bridal Program",
                text: "Thanks to Saara, I looked and felt my absolute best on my wedding day. The pre-bridal program is perfectly designed and the trainers kept me motivated throughout. Forever grateful!",
                rating: 5,
                program: "Pre-Bridal Weight Loss",
              },
              {
                name: "Radha S.",
                role: "Zumba Enthusiast",
                text: "Zumba classes here are so much fun! I never thought working out could be this enjoyable. Lost weight while dancing - what more could I ask for? Love the energy and the instructor!",
                rating: 5,
                program: "Zumba Fitness",
              },
            ].map((testimonial, idx) => (
              <div key={idx} className="col-md-6">
                <div className="card testimonial-card border-0 shadow-sm h-100">
                  <div className="card-body p-4">
                    <div className="d-flex align-items-center mb-3">
                      <div className="testimonial-avatar">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="testimonial-name">{testimonial.name}</h4>
                        <p className="testimonial-role">{testimonial.role}</p>
                      </div>
                    </div>
                    <div className="mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-warning fs-5">
                          ⭐
                        </span>
                      ))}
                    </div>
                    <p className="testimonial-text">"{testimonial.text}"</p>
                    <div className="border-top pt-3">
                      <small className="testimonial-program">
                        Program: {testimonial.program}
                      </small>
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
          <div className="row">
            {/* Tips */}
            <div className="col-lg-6">
              <h2 className="h3 fw-bold mb-4" style={{ color: "#333" }}>
                Wellness Tips
              </h2>
              <div className="d-flex flex-column gap-3">
                {[
                  {
                    tip: "Stay Hydrated",
                    desc: "Drink at least 8 glasses of water daily to keep your body functioning optimally",
                  },
                  {
                    tip: "Practice Consistency",
                    desc: "Regular practice is better than intense sporadic sessions",
                  },
                  {
                    tip: "Listen to Your Body",
                    desc: "Rest when needed and never push through pain",
                  },
                  {
                    tip: "Breathe Properly",
                    desc: "Focus on deep, controlled breathing during all exercises",
                  },
                  {
                    tip: "Eat Mindfully",
                    desc: "Combine your fitness routine with balanced nutrition for best results",
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
            <div className="col-lg-6 mt-4 mt-md-0">
              <h2 className="h3 fw-bold mb-4" style={{ color: "#333" }}>
                Frequently Asked Questions
              </h2>
              <Accordion defaultActiveKey="0">
                {[
                  {
                    q: "Do I need prior experience to join?",
                    a: "Not at all! We welcome complete beginners and offer classes for all fitness levels. Our certified instructors will guide you through each step and modify exercises based on your ability.",
                  },
                  {
                    q: "What should I bring to my first class?",
                    a: "Just wear comfortable workout clothing. We provide yoga mats, props, and all necessary equipment. Bring a water bottle and a positive attitude!",
                  },
                  {
                    q: "How long are the classes?",
                    a: "Most classes are 60 minutes long. Some specialized sessions like weight loss programs may last 90 minutes. Check our schedule for specific class durations.",
                  },
                  {
                    q: "Can I try a class before committing?",
                    a: "Yes! We offer a free trial session for all new members. Book your free session through our contact form or call us directly.",
                  },
                  {
                    q: "What are your operating hours?",
                    a: "We are open Monday to Saturday, 6 AM to 9 PM, and Sunday 7 AM to 1 PM. We offer multiple batch timings throughout the day to fit your schedule.",
                  },
                  {
                    q: "Do you offer online classes?",
                    a: "Yes, we offer online yoga classes from 4 PM to 5 PM daily. This is perfect for those who prefer working out from home.",
                  },
                  {
                    q: "What is included in the weight loss program?",
                    a: "Our comprehensive weight loss program includes personalized workout plans, nutrition guidance with Herbalife products, regular progresstracking, and one-on-one support from certified trainers.",
                  },
                  {
                    q: "Is the pre-bridal program customizable?",
                    a: "Absolutely! We create a personalized plan based on your wedding date, current fitness level, and specific goals. Whether you want to lose weight, tone up, or gain flexibility, we tailor the program for you.",
                  },
                ].map((faq, idx) => (
                  <Accordion.Item eventKey={idx.toString()} key={idx}>
                    <Accordion.Header>
                      <strong>{faq.q}</strong>
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
      <section
        id="contact"
        className="py-5"
        style={{ background: "linear-gradient(135deg, #8A2BE2, #E75480)" }}
      >
        <div className="container">
          <h2 className="text-center mb-2 display-5 fw-bold text-white">
            Get In Touch
          </h2>
          <p
            className="text-center mb-5 mx-auto text-white opacity-75"
            style={{ maxWidth: "600px" }}
          >
            Ready to start your wellness journey? Reach out to us today!
          </p>
          <h3 className="h4 fw-bold mb-4 text-white">Contact Information</h3>
          <div className="d-flex flex-column gap-4">
            <div className="d-flex align-items-start text-white">
              <MapPin className="me-3 mt-1 flex-shrink-0" size={24} />
              <div>
                <p className="fw-semibold mb-1">Address</p>
                <p className="mb-0">
                  123 Wellness Street, Chennai, Tamil Nadu 600001
                </p>
              </div>
            </div>
            <div className="d-flex align-items-center text-white">
              <Phone className="me-3 flex-shrink-0" size={24} />
              <div>
                <p className="fw-semibold mb-1">Phone</p>
                <p className="mb-0">+91 98765 43210</p>
              </div>
            </div>
            <div className="d-flex align-items-center text-white">
              <Mail className="me-3 flex-shrink-0" size={24} />
              <div>
                <p className="fw-semibold mb-1">Email</p>
                <p className="mb-0">info@saarayoga.com</p>
              </div>
            </div>
            <div className="d-flex align-items-start text-white">
              <Clock className="me-3 mt-1 flex-shrink-0" size={24} />
              <div>
                <p className="fw-semibold mb-1">Hours</p>
                <p className="mb-0">Mon-Sat: 6 AM - 9 PM</p>
                <p className="mb-0">Sunday: 7 AM - 1 PM</p>
              </div>
            </div>
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

            <div className="col-lg-6">
              <h3 className="h4 fw-bold mb-4 text-white">Send Us a Message</h3>
              <div className="d-flex flex-column gap-3">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={contactForm.name}
                  onChange={(e) =>
                    setContactForm({ ...contactForm, name: e.target.value })
                  }
                  className="form-control form-control-lg"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={contactForm.email}
                  onChange={(e) =>
                    setContactForm({ ...contactForm, email: e.target.value })
                  }
                  className="form-control form-control-lg"
                />
                <input
                  type="tel"
                  placeholder="Your Phone"
                  value={contactForm.phone}
                  onChange={(e) =>
                    setContactForm({ ...contactForm, phone: e.target.value })
                  }
                  className="form-control form-control-lg"
                />
                <textarea
                  placeholder="Your Message"
                  rows="4"
                  value={contactForm.message}
                  onChange={(e) =>
                    setContactForm({ ...contactForm, message: e.target.value })
                  }
                  className="form-control form-control-lg"
                ></textarea>
                <button
                  onClick={handleSubmit}
                  className="btn btn-light btn-lg fw-semibold"
                  style={{ color: "#8A2BE2" }}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-4 text-center copyright-footer">
        <a
          href="#enroll"
          onClick={handleClose}
          className="btn book-free-btn fw-semibold px-4 py-2"
        >
          Book Free Session
        </a>
      </section>

      {/* Footer */}
      <footer className="footer text-white py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-3">
              <h3 className="h5 fw-bold mb-3">Saara Yoga & Fitness</h3>
              <p className="text-white footer-font w-75">
                Transform your life through wellness, balance, and strength.
              </p>
            </div>
            <div className="col-lg-3">
              <h4 className="h5 mb-3 font-semibolds">QUICK LINKS</h4>
              <div className="d-flex flex-column gap-2">
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
                  Contact
                </button>
              </div>
            </div>
            <div className="col-lg-3">
              <h4 className="h5 mb-3 font-semibold">SERVICES</h4>
              <div className="d-flex flex-column gap-2 text-white">
                <p className="mb-0">Yoga Classes</p>
                <p className="mb-0">Personal Training</p>
                <p className="mb-0">Group Fitness</p>
                <p className="mb-0">Nutrition Guidance</p>
              </div>
            </div>
            <div className="col-lg-3">
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
            </div>
          </div>
        </div>
      </footer>

      <section className="py-4 text-center copyright-footer">
        <p className="mb-0">
          Made with <span className="text-danger">❤️</span> for women's wellness
          <br />
          Copyright &copy; 2025 All rights reserved. | <br /> SHARVA Yoga &
          Fitness | Developed by ANEXTTECH
        </p>
      </section>

      {/* Floating contact */}
      <FloatingContact />
    </main>
  );
}

export default App;

