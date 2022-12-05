import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./index.css";

const LandingPage = () => {
  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }

  return (
    <div>
      <div className="container-fluid">
        <nav className="navbar navbar-light navbar-expand-md offset-7">
          <Link to="#" className="navbar-brand" />{" "}
          <button
            type="button"
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#menu-navigasi"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="menu-navigasi">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="./OurSevices?" className="nav-Link to">
                  Our Services
                </Link>
              </li>
              <li className="nav-item">
                <Link to="./WhyUs" className="nav-Link to">
                  Why Us
                </Link>
              </li>
              <li className="nav-item">
                <Link to="./Testimonial" className="nav-Link to">
                  Testimonial
                </Link>
              </li>
              <li className="nav-item">
                <Link to="./FAQ" className="nav-Link to">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        {/* <!--Bagian tulisan dan gambar mobil--> */}

        <div className="d-md-flex flex-md-coulumn">
          <div className="text-align-center mt-1 p-5">
            <h1 className="fs-2">
              Sewa & Rental Mobil Terbaik di Kawasanmu (Lokasimu)
            </h1>
            <p>
              Selamat datang di Binar Rental Car. Kami menyediakan mobil
              kualitas terbaik dengan harga terjangkau. Selalu siap melayani
              kebutuhanmu untuk sewa mobil selama 24 jam
            </p>
          </div>

          <div className="">
            <img
              src={"./assets/img_car.png"}
              width="704px"
              height="407px"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* <!--bagian services--> */}
      <div className="d-md-flex flex-md-coloumn mt-1 px-5">
        <div className="align-content-center mt-1 p-5 pr-2">
          <img
            src={"./assets/image_service.png"}
            alt="gambar-service"
            width="359px"
            height="328px"
          />
        </div>
        <div className="flex-1 flex-coloumn flex-center p-5 align-item-center">
          <h1>Best Car Rental for Any Kind of Trip in (Lokasimu)</h1>
          <p>
            Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga
            lebih murah dibandingkan yang lain, kondisi mobil baru, serta
            kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding,
            meeting, dll.
          </p>
          <p>
            <img src={"./assets/Group53.png"} />
            &nbsp &nbsp Sewa Mobil Dengan Supir di Bali 12 Jam <br />
          </p>
          <p>
            <img src={"./assets/Group53.png"} />
            &nbsp &nbsp Sewa Mobil Lepas Kunci di Bali 24 Jam
            <br />
          </p>
          <p>
            <img src={"./assets/Group53.png"} />
            &nbsp &nbsp Sewa Mobil Jangka Panjang Bulanan
          </p>
          <p>
            <img src={"./assets/Group53.png"} />
            &nbsp &nbsp Gratis Antar - Jemput Mobil di Bandara
          </p>
          <p>
            <img src={"./assets/Group53.png"} />
            &nbsp &nbsp Layanan Airport Transfer / Drop In Out
          </p>
        </div>
      </div>

      {/* <!--Kartu--> */}
      <div className="d-md-flex flex-md-coloumn justify-content-around px-5 m-3">
        <div className="card m-3 pt-3" style={{ property: "width: 250px" }}>
          <img
            className="offset-1"
            src={"./assets/icon_complete.png"}
            alt=""
            width="32px"
            height="32px"
          />
          <div className="card-body">
            <h6 className="card-title">Mobil Lengkap</h6>
            <p className="card-text">
              Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan
              terawat
            </p>
          </div>
        </div>

        <div className="card m-3 pt-3" style={{ property: "width: 250px" }}>
          <img
            className="offset-1"
            src="./assets/icon_price.png"
            alt="Harga"
            width="32px"
            height="32px"
          />
          <div className="card-body">
            <h6 className="card-title">Harga Murah</h6>
            <p className="card-text">
              Harga murah dan bersaing, bisa bandingkan harga kami dengan rental
              mobil lain
            </p>
          </div>
        </div>

        <div className="card m-3 pt-3" style={{ property: "width: 250px" }}>
          <img
            className="offset-1"
            src={"./assets/icon_24hrs.png"}
            alt="Waktu"
            width="32px"
            height="32px"
          />
          <div className="card-body">
            <h6 className="card-title">Layanan 24 Jam</h6>
            <p className="card-text">
              Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga
              tersedia di akhir minggu
            </p>
          </div>
        </div>

        <div className="card m-3 pt-3" style={{ property: "width: 250px" }}>
          <img
            className="offset-1"
            src={"./assets/icon_professional.png"}
            alt="Lisensi"
            width="32px"
            height="32px"
          />
          <div className="card-body">
            <h6 className="card-title">Sopir Profesional</h6>
            <p className="card-text">
              Sopir yang profesional, berpengalaman, jujur, ramah dan selalu
              tepat waktu
            </p>
          </div>
        </div>
      </div>

      {/* <!--Testimoni--> */}
      <div className="text-center">
        <h3>Testimonial</h3>
        <p>Berbagai review positif dari pelanggan kami</p>
      </div>

      <div className="p-5 m-1" style={{ property: "background-color:white" }}>
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="true"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              {/* <!-- Card1 --> */}
              <div
                className="card mb-3 mx-auto"
                style={{
                  property: "max-width: 540px; background-color: #f1f3ff",
                }}
              >
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={"./assets/img_photo.png"}
                      className="img-fluid rounded-start p-3"
                      style={{ property: "width: 400px" }}
                      alt="gambar1"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <img src={"./assets/Rate"} alt="Rate" />
                      <p className="card-text">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Ducimus alias eveniet vero sed aliquam vitae iusto
                        eos odio maxime non.
                      </p>
                      <p className="card-text">
                        <small className="text-muted">John Dee 32, Bromo</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Card2 --> */}
            <div className="carousel-item">
              <div
                className="card mb-3 mx-auto"
                style={{
                  property: "max-width: 540px; background-color: #f1f3ff",
                }}
              >
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={"./assets/perempuan.png"}
                      className="img-fluid rounded-start p-3"
                      style={{ property: "width: 400px" }}
                      alt="gambar1"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <img src={"./assets/Rate"} />
                      <p className="card-text">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Ducimus alias eveniet vero sed aliquam vitae iusto
                        eos odio maxime non.
                      </p>
                      <p className="card-text">
                        <small className="text-muted">John Dee 32, Bromo</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto">
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon mx-auto"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>

      {/* <!--Sewa Mobil--> */}
      <div className="SewaMobil">
        <h2>Sewa Mobil di (Lokasimu) Sekarang</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        <button className="button1">Mulai Sewa Mobil</button>
      </div>

      {/* <!--FAQ--> */}
      <div className="d-flex  d-md-flex mt-5 ms-4 me-4 p-5">
        <div className="FAQ1">
          <h2>Frequently Ask Question</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
            commodi ut natus sequi, neque quaerat.
          </p>
        </div>
        <div className="FAQ2">
          <button className="accordion">Apa saja yang dibutuhkan?</button>
          <div className="panel">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <button className="accordion">
            Berapa hari minimal sewa mobil lepas kunci
          </button>
          <div className="panel">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <button className="accordion">
            Berapa hari sebelumnya sebaiknya booking sewa mobil?
          </button>
          <div className="panel">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <button className="accordion">Apakah ada biaya antar-jemput?</button>
          <div className="panel">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <button className="accordion">
            Bagaimana jika terjadi kecelekaan?
          </button>
          <div className="panel">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>

      {/* <!--Footage--> */}
      <div classNameName="d-flex d-md-flex mx-4">
        <div className="flex-1 p-2">
          <h6>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</h6>
          <p>binarcarrental@gmail.com</p>
          <p>081-233-334-808</p>
        </div>

        <div className="flex-1 mx-1 p-2">
          <h6>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</h6>
          <p>binarcarrental@gmail.com</p>
          <p>081-233-334-808</p>
        </div>

        <div className="flex-2 mx-1 p-2">
          <Link
            to=""
            style={{ property: "text-decoration: none; color:black" }}
          />
          Our Service <br />
          <Link
            to=""
            style={{ property: "text-decoration: none; color:black" }}
          />
          Why Us <br />
          <Link
            to=""
            style={{ property: "text-decoration: none; color:black" }}
          />
          Testimonial <br />
          <Link
            to=""
            style={{ property: "text-decoration: none; color:black" }}
          />
          FAQ <br />
        </div>

        <div className="flex-2 mx-1 p-2">
          <h6>Connect With Us</h6>
          <span>
            <img src={"./assets/icon_facebook.png"} width="15%" />
          </span>
          <span>
            <img src={"./assets/icon_instagram.png"} width="15%" />
          </span>
          <span>
            <img src={"./assets/icon_mail.png"} width="15%" />
          </span>
          <span>
            <img src={"./assets/icon_twitch.png"} width="15%" />
          </span>
          <span>
            <img src={"./assets/icon_twitter.png"} width="15%" />
          </span>
        </div>

        <div className="flex-1 mx-1 p-2">
          <h6 style={{ property: "text-decoration: none; color:black" }}>
            Copyright Binar
          </h6>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
