const Block = () => {
  return (
    <>
      <div className="row align-items-end" data-aos="fade-up">
        <div className="col-md-5 col-sm-4">
          <img
            src="/images/shape/shape_136.svg"
            alt="shape"
            className="lazy-img d-none d-sm-inline-block"
          />
        </div>
        <div className="col-md-7 col-sm-8" data-aos="fade-down">
          <div className="block-wrapper block-one">
            <h3 style={{ color: "#FFAE10" }}>10+ Services</h3>
            <p>Variety of services to support all your needs in one place.</p>
          </div>
          {/* /.block-wrapper */}
        </div>
      </div>
      {/* End .row */}

      <div className="row gx-xxl-5" data-aos="fade-down">
        <div className="col-sm-7" data-aos="fade-down">
          <div className="block-wrapper block-two position-relative mt-50 sm-mt-30">
            <h3 style={{ color: "#9650EF" }}>
              10+ <br />
              <span>Prebuilt Solutions</span>
            </h3>
            <p>
              Choose from our list of prebuilt services to accelerate your business<br /> in no time at all.
            </p>
            <img
              src="/images/shape/shape_138.svg"
              alt="sahpe"
              className="lazy-img shapes shape-one"
            />
          </div>
          {/* /.block-wrapper */}
        </div>
        {/* End .col */}

        <div className="col-sm-5" data-aos="fade-up">
          <div className="block-wrapper block-three mt-50 sm-mt-30">
            <h3 style={{ color: "#00BDE6" }}>
              <span>Excelent Support</span>
            </h3>
            <p>Let us take care of making sure everything is all right.</p>
          </div>
          {/* /.block-wrapper */}
          <img
            src="/images/shape/shape_137.svg"
            alt="shape"
            className="lazy-img mt-30 ms-auto me-auto d-none d-sm-inline-block"
          />
        </div>
      </div>
    </>
  );
};

export default Block;
