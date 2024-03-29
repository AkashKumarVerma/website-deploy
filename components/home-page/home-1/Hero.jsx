import Image from "next/image";
import React from "react";

const Hero1 = () => {
  const options = [
    { value: 0, display: "Select from our offerings .." },
    { value: 1, display: "Website Design & Development" },
    { value: 2, display: "Application Design & Development" },
    { value: 3, display: "Consultation" },
    { value: 4, display: "Dont know" },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission
  };

  return (
    <div className="hero-banner-ten position-relative zn2">
      <div className="container">
        <div className="row">
          <div
            className="col-lg-9 col-md-10 m-auto text-center"
            data-aos="fade-up"
          >
						{/* <h1 className="hero-heading fw-500 tx-dark">
              Your own personal <br /><span>Techie</span>.
            </h1> */}

            <h1 className="hero-heading fw-500 tx-dark">
              Everything for your <span>Business</span>.
            </h1>
            <p className="text-lg tx-dark mt-45 mb-50 lg-mt-30 lg-mb-40">
              Your personal engineering and design team. <br /> Incredible prices. Big heart.
            </p>
            {/* <form
              className="search-area d-md-inline-flex m-auto"
              onSubmit={handleSubmit}
            >
              <select className="nice-select form-select">
                {options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.display}
                  </option>
                ))}
              </select>
              <input
                type="text"
                className="zip-code-input"
                placeholder="your email"
              />
              <button className="fw-500 text-white tran3s" type="submit">
                Contact Us
              </button>
            </form> */}
            {/* End form */}

            {/* <div>
              <div className="approval-info d-inline-flex align-items-center mt-130 lg-mt-80">
                <img src="/images/icon/icon_99.svg" alt="" className="me-1" />
                <span>An UK insurer approved by the UICO.</span>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      {/* End .container */}

      <Image
        width={487}
        height={649}
        src="/images/assets/ils_11.png"
        alt="ilustration"
        className="lazy-img illustration-one"
        data-aos="fade-left"
        layout="intrinsic"
      />
      <Image
        width={537}
        height={658}
        src="/images/assets/ils_12.png"
        alt="ilustration"
        className="lazy-img illustration-two"
        data-aos="fade-right"
        layout="intrinsic"
      />
    </div>
  );
};

export default Hero1;
