import { useState } from "react";
import { Button, Offcanvas, Accordion } from "react-bootstrap";
import { CgMenuRightAlt } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
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

            <ul className="nav-list list-unstyled secondaryFont">
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
                <a href="#tips" className="nav-link-custom">
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
              href="#contact"
              className="btn book-free-btn fw-semibold px-4 py-2 textFont"
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
                    <ul className="list-unstyled d-flex flex-column  gap-4 secondaryFont">
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
                        <a
                          href="#tips"
                          className="nav-link-custom"
                          onClick={handleClose}
                        >
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
                          href="#contact"
                          onClick={handleClose}
                          className="btn book-free-btn fw-semibold px-4 py-2 textFont"
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

      {/* Hero */}
      <section id="home" className="hero-section">
        <div className="container py-3">
          <div className="row align-items-center g-4 py-4 px-3">
            <div className="col-md-6 text-white">
              <h1
                className="display-5 fw-bold mb-4 primeFont"
                style={{ color: "#333" }}
              >
                A Safe <span style={{ color: "#E75480" }}>&</span> Supportive{" "}
                <br />
                Fitness Community for Women's,
              </h1>
              <h4 className="fw-bold text-dark secondaryFont">
                Transform your body and mind through yoga
              </h4>
              <p className="text-black textFont">
                Discover strength, balance, and inner peace . Our yoga programs
                are designed to empower women and help them connect deeply with
                their true potential physically and mentally.
              </p>

              <div className="hero-buttons">
                <a href="#contact">
                  <button className="hero-btn px-4 py-2 rounded-pill fw-semibold border-0 join-btn secondaryFont">
                    Join Now
                  </button>
                </a>
                <a href="#contact">
                  <button className="hero-btn px-4 py-2 rounded-pill fw-semibold border border-light bg-white text-dark secondaryFont">
                    Contact Us
                  </button>
                </a>
              </div>

              {/* Contact Info */}
              <div className="hero-contact-card mt-3">
                <div className="hero-contact-item">
                  <div className="hero-icon purple rounded-circle p-2">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <address className="text-dark m-0 hero-LT textFont">
                    <b>Sharva Studio:</b> <br />
                    Karthik illam, 231 G, 2nd floor, Kamarajar Salai, near
                    Manimaran Bakery, Madurai
                  </address>
                </div>

                <div className="hero-contact-item ">
                  <div className="hero-icon pink rounded-circle p-2">
                    <Clock className="text-white" size={20} />
                  </div>
                  <div className="text-dark hero-LT textFont">
                    <b>Batches:</b>
                    <p className="m-0">6AM - 7AM • 11AM - 12PM</p>
                    <p className="m-0">Online only: 4PM - 5PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 text-center">
              <div className="hero-image-wrapper">
                <img
                  src="/Hero-img1.jpeg"
                  alt="Women practicing yoga"
                  className="hero-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className=" about-section">
        <div className="container">
          <div className="row align-items-center g-2">
            <div className="col-lg-6 py-5 px-4">
              <div className="mb-4">
                <h2 className="fw-bold display-6 text-dark mb-3 textFont">
                  What You Get with{" "}
                  <span style={{ color: "#E75480" }}>Sharva</span>
                </h2>
                <p className="text-uppercase about-welcome p-2 secondaryFont">
                  Welcome to Sharva Yoga & Fitness
                </p>
              </div>

              <p className="text-muted testFont">
                At Sharva Yoga and Fitness, we go beyond regular workouts we
                guide you to build a balanced, healthy, and mindful lifestyle.
              </p>

              <p className="text-muted testFont">
                Our programs combine traditional yoga with modern fitness
                techniques to strengthen your body, calm your mind, and energize
                your spirit.
              </p>

              <ul className="list-unstyled mt-4 testFont ">
                {[
                  "Personalized yoga and fitness sessions for all levels",
                  "Certified trainers and holistic wellness support",
                  "Meditation, breathwork, and stress-relief techniques",
                  "Posture correction and flexibility improvement",
                  "Nutrition tips and continuous progress tracking",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="d-flex align-items-start mb-3 about-point testFont"
                  >
                    <FaCheckCircle
                      className="me-3 mt-1"
                      style={{ color: "#8A2BE2", fontSize: "22px" }}
                    />
                    <span className="fw-semibold text-dark">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-lg-6 text-center">
              <div className="about-img-wrapper position-relative">
                <div className="about-glow"></div>
                <img
                  src="/aboutImg.jpg"
                  alt="Yoga practice"
                  className="img-fluid rounded-4 shadow-lg about-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Follow On Insta */}
      <section className="container-fluid my-5 py-3">
        <div className="d-flex justify-content-center mb-4 ">
          <a href="https://www.instagram.com/sharva_yoga_and_fitness?utm_source=qr&igsh=MXEwa3F0aGcxNXljZQ%3D%3D">
            <button className="py-2  px-4 rounded border-0 book-free-btn textFont">
              Follow us on Instagram
            </button>
          </a>
        </div>
        <Swiper
          modules={[Virtual, Autoplay]}
          spaceBetween={20}
          slidesPerView={2}
          loop={true}
          speed={1500}
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

      {/* Services */}
      <section id="services" className="pb-3">
        <div className="container">
          <div className="text-center mb-5 textFont">
            <h1 className="display-5 fw-bold mb-2" style={{ color: "#333" }}>
              <span style={{ color: "#E75480" }}>Our</span> Specialized Services
            </h1>
            <p className="text-dark secondaryFont">
              Empowering women through fitness, yoga, and holistic healthcare
            </p>
          </div>

          <div className="mb-5">
            <div className="row g-4 d-flex align-items-center justify-content-center">
              {[
                {
                  title: "Yoga Classes",
                  subtitle: "Find Inner Balance & Strength",
                  desc: "Blend of Hatha, Vinyasa, and Power Yoga to enhance flexibility, mindfulness, and inner peace.",
                  img: "service8.jpeg",
                },
                {
                  title: "Strength Training",
                  subtitle: "Tone & Build Lean Muscle",
                  desc: "Customized strength programs that sculpt your body while improving endurance and posture.",
                  img: "service7.webp",
                },
                {
                  title: "Zumba & Cardio",
                  subtitle: "Dance Your Way to Fitness",
                  desc: "Fun, energetic, calorie-burning workouts with music and rhythm to keep your heart healthy.",
                  img: "Zumba & Cardio.jpg",
                },
                {
                  title: "Music & Fun Workouts",
                  subtitle: "Move, Groove & Glow",
                  desc: "Dynamic group sessions designed to make fitness enjoyable and social for women of all ages.",
                  img: "Music & Fun Workouts.jpg",
                },
                {
                  title: "Healthy Diet Plan",
                  subtitle: "Eat Smart, Stay Fit",
                  desc: "Personalized nutrition guidance and meal plans aligned with your fitness and wellness goals.",
                  img: "service5.jpg",
                },
                {
                  title: "PCOD & PCOS Care",
                  subtitle: "Balance Your Hormones Naturally",
                  desc: "Customized workout and nutrition plans to manage hormonal imbalance effectively.",
                  img: "service6.jpeg",
                },
                {
                  title: "Weight Loss Program",
                  subtitle: "Transform Your Body with Confidence",
                  desc: "Structured fitness and diet program for sustainable and healthy weight management.",
                  img: "service1.jpg",
                },
                {
                  title: "Postpartum Workout",
                  subtitle: "Regain Strength After Pregnancy",
                  desc: "Safe postpartum recovery workouts designed to rebuild strength and flexibility.",
                  img: "Postpartum Workout.jpg",
                },
                {
                  title: "Irregular Periods Wellness",
                  subtitle: "Regain Rhythm & Balance",
                  desc: "Gentle yoga, breathing, and lifestyle corrections for menstrual cycle regularity.",
                  img: "Irregular Periods Wellness.jpg",
                },
              ].map((service, idx) => (
                <div key={idx} className="col-md-6 col-lg-4 px-5 px-md-3">
                  <div className="card service-card h-100 border-0 shadow-sm rounded-4">
                    <img
                      src={service.img}
                      alt={service.title}
                      className="card-img-top rounded-top-4"
                      style={{ height: "220px", objectFit: "cover" }}
                    />
                    <div
                      className="card-body p-4 rounded-bottom-4"
                      style={{ borderBottom: "4px solid #E75480" }}
                    >
                      <h5
                        className="fw-bold textFont"
                        style={{ color: "#E75480" }}
                      >
                        {service.title}
                      </h5>
                      <h6 className="text-dark mb-2 textFont">
                        {service.subtitle}
                      </h6>
                      <p className="text-dark secondaryFont">{service.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Transformations */}
      <section id="transformations" className=" py-4">
        <div className="text-center mb-4 container">
          <h2 className="fw-bold display-6 textFont" style={{ color: "#333" }}>
            <span style={{ color: "#E75480" }}>Real</span> Transformations ✨
          </h2>
          <p className="text-dark mb-0 secondaryFont">
            Inspiring fitness journeys of women who changed their lives with{" "}
            <b>Sharva Yoga</b>
          </p>
        </div>
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
            768: { slidesPerView: 3 },
            992: { slidesPerView: 4 },
            1200: { slidesPerView: 5 },
          }}
        >
          {[
            ["/SR5.jpg", "/SR19.jpeg", "/SR16.jpg"],
            ["/SR2.jpg", "/SR3.jpg", "/SR20.jpeg"],
            ["/SR7.jpg", "/SR15.jpg", "/SR4.jpg"],
            ["/SR10.jpg", "/SR23.jpeg", "/SR12.jpg"],
            ["/SR18.jpeg", "/SR1.jpg", "/SR6.jpg"],
            ["/SR21.jpeg", "/SR8.jpg", "/SR22.jpeg"],
          ].map((group, index) => (
            <SwiperSlide key={index}>
              <div className="d-grid gap-3">
                {group.map((img, i) => (
                  <div
                    key={i}
                    className="transformation-img position-relative rounded-4 overflow-hidden"
                  >
                    <img
                      src={img}
                      className="img-fluid w-100 h-100"
                      alt={`Transformation ${i + 1}`}
                      style={{ objectFit: "cover", height: "300px" }}
                    />
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h1
              className="display-5 fw-bold mb-2 textFont"
              style={{ color: "#333" }}
            >
              What Our <span style={{ color: "#E75480" }}>Users Love</span> 💖
            </h1>
            <p className="text-dark secondaryFont">
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
              <div
                key={idx}
                className="col-12 col-sm-10 col-md-6 col-lg-4 px-5 px-md-3 "
              >
                <div
                  className="testimonial-card h-100"
                  style={{ borderBottom: "4px solid #E75480" }}
                >
                  <div className="card-body p-4">
                    <div className="d-flex align-items-center mb-3">
                      <div className="testimonial-avatar rounded-circle me-3 px-3 py-2 fw-bold primeFont">
                        {testimonial.name.charAt(0).toUpperCase()}
                      </div>
                      <div className="d-flex align-items-center justify-content-between w-100">
                        <div>
                          <h5
                            className="fw-bold mb-0 textFont"
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

                    <p className="testimonial-text text-dark secondaryFont">
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
      <section id="tips" className="py-5">
        <div className="container">
          <div className="row ">
            {/* Fitness & Wellness Tips */}
            <div className="col-lg-6 px-4">
              <h2
                className="display-6 fw-bold mb-4 textFont"
                style={{ color: "#333" }}
              >
                <span style={{ color: "#E75480" }}>Women's</span> <br /> Fitness
                & Wellness Tips 👇
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
                    className="card"
                    style={{
                      borderLeft: "4px solid #E75480",
                      backgroundColor: "#F3E8FF",
                    }}
                  >
                    <div className="card-body p-4">
                      <h4
                        className="h6 fw-bold mb-2 textFont"
                        style={{ color: "#8A2BE2" }}
                      >
                        {item.tip}
                      </h4>
                      <p className="text-dark mb-0 secondaryFont">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ Accordion */}
            <div className="col-lg-6 mt-4 mt-md-0 mb-3 px-4">
              <h2
                className="display-6 fw-bold mb-4 textFont"
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
                      <div className=" d-flex gap-2 textFont">
                        <h4 className="h6 fw-bold mb-2 ">
                          {idx + 1}
                          {"."}
                        </h4>
                        <h4 className="h6 fw-bold mb-2">{faq.q}</h4>
                      </div>
                    </Accordion.Header>
                    <Accordion.Body className="bg-light secondaryFont">
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
            <h1 className="display-4 fw-bold mb-2 textFont">
              Get in <span style={{ color: "#E75480" }}>Touch</span> 🤝
            </h1>
            <p className="text-dark secondaryFont">
              Have questions or need assistance? We're here to help you on your
              fitness & yoga journey.
            </p>
          </div>

          <div className="row g-5">
            <div className="col-12 col-md-6">
              <iframe
                title="studio-map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.1995558088006!2d78.13158399999999!3d9.917331699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c5f0b9eb886f%3A0xe1c840175f2954af!2sSharva%20Yoga%20and%20Fitness!5e0!3m2!1sen!2sin!4v1761324807730!5m2!1sen!2sin"
                width="100%"
                height="450px"
                className="rounded border-0"
                loading="lazy"
              ></iframe>
            </div>
            <div className="col-12 col-md-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer text-white py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-12 col-lg mb-3 mb-md-0">
              <a className="logo d-flex text-decoration-none " href="#home">
                <img
                  src="SharvaLogo.png"
                  className="img-fluid mb-4 rounded-1 pe-2"
                  alt="Sharva Yoga & Fitness Logo"
                  width={150}
                />
              </a>
              <p className="text-white footer-font w-75 secondaryFont">
                Find your balance, breathe deeply, and rediscover yourself. At
                Sharva, we create a safe and supportive space where women
                transform their minds and bodies through yoga and mindful
                living.
              </p>
            </div>
            <div className="col-12 col-md-6 col-lg-3 mb-3 mb-md-0 secondaryFont">
              <h4 className="h5 mb-3 font-semibolds textFont">QUICK LINKS</h4>
              <div className="d-flex flex-column gap-2 footer-links">
                <a href="#home">
                  <button className="btn btn-link text-white text-decoration-none p-0 text-start">
                    Home
                  </button>
                </a>
                <a href="#about">
                  <button className="btn btn-link text-white text-decoration-none p-0 text-start">
                    About Us
                  </button>
                </a>
                <a href="#services">
                  <button className="btn btn-link text-white text-decoration-none p-0 text-start">
                    Services
                  </button>
                </a>

                <a href="#testimonials">
                  <button className="btn btn-link text-white text-decoration-none p-0 text-start">
                    Testimonials
                  </button>
                </a>

                <a href="#contact">
                  <button className="btn btn-link text-white text-decoration-none p-0 text-start">
                    Contact Us
                  </button>
                </a>

                <a href="#transformations">
                  <button className="btn btn-link text-white text-decoration-none p-0 text-start">
                    Transformations
                  </button>
                </a>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 mb-3 mb-md-0 secondaryFont">
              <h4 className="h5 mb-3 font-semibold textFont">SERVICES</h4>
              <div className="d-flex flex-column gap-2 text-white footer-links">
                <a href="#services">
                  <button className="btn btn-link text-white text-decoration-none p-0 text-start">
                    Yoga Classes
                  </button>
                </a>
                <a href="#services">
                  <button className="btn btn-link text-white text-decoration-none p-0 text-start">
                    Personal Training
                  </button>
                </a>
                <a href="#services">
                  <button className="btn btn-link text-white text-decoration-none p-0 text-start">
                    Strength Training
                  </button>
                </a>
                <a href="#services">
                  <button className="btn btn-link text-white text-decoration-none p-0 text-start">
                    Nutrition Guidance
                  </button>
                </a>
                <a href="#services">
                  <button className="btn btn-link text-white text-decoration-none p-0 text-start">
                    Zumba & Cardio
                  </button>
                </a>
                <a href="#services">
                  <button className="btn btn-link text-white text-decoration-none p-0 text-start">
                    Weight Loss Program
                  </button>
                </a>
              </div>
            </div>
            <div className=" col-12 col-md-6 col-lg-3 mb-3 mb-md-0 secondaryFont">
              <h4 className="h5 font-semibold mb-3 textFont">FOLLOW US</h4>
              <div className="d-flex gap-3 my-4">
                <a href="">
                  <img
                    src="/facebook.png"
                    alt="Yoga practice"
                    className="img-fluid rounded-4 shadow-lg about-img"
                    width="40"
                  />
                </a>
                <a href="https://www.instagram.com/sharva_yoga_and_fitness?utm_source=qr&igsh=MXEwa3F0aGcxNXljZQ%3D%3D">
                  <img
                    src="/instagram.png"
                    alt="Yoga practice"
                    className="img-fluid rounded-4 shadow-lg about-img"
                    width="40"
                  />
                </a>
                <a href="">
                  <img
                    src="/youtube.png"
                    alt="Yoga practice"
                    className="img-fluid rounded-4 shadow-lg about-img"
                    width="40"
                  />
                </a>
              </div>
              <div className=" text-white small mt-3 secondaryFont">
                <div className="d-flex align-items-center gap-2 mb-2">
                  <Phone size={16} color="white" />
                  <span className="text-white small">+91 63815 00790</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <Mail size={16} color="white" />
                  <span>divyatsk772@gmail.com</span>
                </div>
              </div>
              <div className="textFont">
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
      >
        <p className="mb-0 textFont text-dark">
          Made with <span className="text-danger">❤️</span> for women's wellness
        </p>
      </section>

      {/* Floating contact */}
      <FloatingContact />
    </main>
  );
}

export default App;

