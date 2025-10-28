import { FaPhone } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineTimer } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { CgMenuRightAlt } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Virtual } from "swiper/modules";
import "swiper/css";

function App() {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <main>
      {/* HEADER */}
      <header className="py-1 shadow-sm header">
        <nav>
          {/* Desk top Navbar */}
          <div className="container d-none d-lg-flex align-items-center justify-content-between">
            <a href="#home">
              <img
                src="SharvaLogo.png"
                className="img-fluid"
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
                <div className="d-flex flex-column gap-5">
                  <div className="mt-5 ps-2">
                    <ul className="list-unstyled d-flex flex-column gap-4">
                      <li>
                        <a
                          href="#home"
                          className="nav-link-custom"
                          onClick={handleClose}
                        >
                          Home
                        </a>
                      </li>
                      <li>
                        <a
                          href="#services"
                          className="nav-link-custom"
                          onClick={handleClose}
                        >
                          Services
                        </a>
                      </li>
                      <li>
                        <a
                          href="#about"
                          className="nav-link-custom"
                          onClick={handleClose}
                        >
                          About Us
                        </a>
                      </li>
                      <li>
                        <a href="#tis" className="nav-link-custom">
                          Tips
                        </a>
                      </li>
                      <li>
                        <a
                          href="#contact"
                          className="nav-link-custom"
                          onClick={handleClose}
                        >
                          Contact Us
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <a
                      href="#enroll"
                      onClick={handleClose}
                      className="btn book-free-btn fw-semibold px-4 py-2"
                    >
                      Book Free Session
                    </a>
                  </div>
                </div>
              </Offcanvas.Body>
            </Offcanvas>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section id="home">
        <div className="container py-md-5">
          <div className="row align-items-center g-4 hero-text-side ">
            <div className="col-md-6 side-flower ">
              <h1 className="hero-text">
                A Safe <span className="hero-text-and">&</span> Supportive Yoga
                Community for Women's
                <span className="text-black">
                  , <br />
                </span>
              </h1>
              <h3 className="hero-text hero-test2">
                Transform your body and mind through yoga
              </h3>
              <h5 className="mt-3 hero1-text">
                Discover strength, balance, and inner peace. Our specialized
                yoga programs empower women to connect with their true
                potential.
              </h5>

              <div className="mt-4 d-flex flex-wrap gap-3">
                <a href="#classes" className="hero-btn">
                  Join now
                </a>
                <a href="#contact" className="hero-btn hero-btn-active">
                  Contact Us
                </a>
              </div>

              <div className="mt-4 row g-2 d-flex align-items-center bg-white justify-content-center rounded-3 px-2 py-3">
                <div className="col-12 d-flex align-items-start  align-items-md-center gap-2">
                  <div className="fs-4 d-flex align-items-center justify-content-center rounded-circle hero-icon p-2">
                    <IoLocationOutline color="white" />
                  </div>
                  <address className="text-black m-0 hero-contact">
                    Karthik illam 231 G, 2nd floor, Kamarajar salai near
                    Manimaran Bakery, Madurai
                  </address>
                </div>

                <div className="col-12 d-flex align-items-center gap-2">
                  <div className="fs-4 d-flex align-items-center justify-content-center rounded-circle hero-icon p-2">
                    <MdOutlineTimer color="white" />
                  </div>
                  <div className="text-black m-0 hero-contact">
                    Batches (6AM - 7AM) (11AM - 12PM) <br />
                    Online only (4PM - 5PM)
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div>
                <div className="rounded-3 text-end">
                  <img
                    src="Hero-img1.jpeg"
                    alt="Women's practicing yoga"
                    className="img-fluid rounded-3"
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
        </div>
      </section>

      {/* MISSIONS & VISIONS */}
      <section id="about">
        <div className="container">
            <div className="row">
              <div className="col">

              </div>
            </div>
        </div>
      </section>



      <div className="container py-4">
        <Swiper
          modules={[Virtual, Autoplay]}
          spaceBetween={10}
          slidesPerView={2}
          loop={true}
          speed={3000}
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
      </div>
      {/* CONTACT */}
      {/* <section id="contact" className="container py-5">
        <div className="row mb-4">
          <div className="col-md-4 mb-3 d-flex align-items-start">
            <div className="me-2">
              <FaPhone />
            </div>
            <div>
              <div className="text-muted small">Phone</div>
              <div className="fw-medium">+91 98765 43210</div>
            </div>
          </div>

          <div className="col-md-4 mb-3 d-flex align-items-start">
            <div className="me-2">
              <IoLocationSharp />
            </div>
            <div>
              <div className="text-muted small">Address</div>
              <address className="fw-medium">
                Karthik illam 231 G, 2nd floor, Kamarajar salai near manimaran
                bakery, Madurai
              </address>
            </div>
          </div>
        </div>

        <div className="row">
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
            <form
              className="bg-white p-4 rounded shadow-sm"
              onSubmit={handleFormSubmit}
            >
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Phone No</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Your no"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">
                  What are you interested in?
                </label>
                <select className="form-select">
                  <option>Try a Class</option>
                  <option>Membership</option>
                  <option>Private Session</option>
                  <option>Workshop</option>
                </select>
              </div>

              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea
                  className="form-control"
                  rows="4"
                  placeholder="Tell us anything we should know"
                ></textarea>
              </div>

              <div className="d-flex gap-2">
                <button type="submit" className="btn btn-danger">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section> */}

      {/* FOOTER */}
      {/* <footer className="bg-white border-top mt-4">
        <div className="container py-3 d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
          <div>
            <h1 className="fw-semibold small">Sharva Yoga & Fitness</h1>
            <h1 className="text-muted small">
              © {new Date().getFullYear()} Sharva Women's Yoga & Fitness
            </h1>
          </div>

          <div className="text-muted small">
            Made with <span className="text-danger">❤️</span> for women's
            wellness
          </div>
        </div>
      </footer> */}
    </main>
  );
}

export default App;


































































