const accordionItems = [
  {
    id: 1,
    icon: "/images/icon/icon_108.svg",
    title: "Great Value, Affordable Prices",
    content:
      "We focus on giving you the best without the high costs. Our promise of pocket-friendly prices ensures top-quality service that won’t strain your budget.",
  },
  {
    id: 2,
    icon: "/images/icon/icon_109.svg",
    title: "Cleanr & Quick",
    content:
      "We keep things simple and straightforward. Our process is easy to follow, keeping you informed all the way for a hassle-free experience.",
  },
  {
    id: 3,
    icon: "/images/icon/icon_110.svg",
    title: "Always Excellent",
    content:
      "We’re all about top-notch quality. Our team works hard to make sure every service goes beyond what you expect, making your happiness our priority.",
  },
];

const WhyChoose = () => {
  return (
    <div className="accordion accordion-style-five md-mb-70" id="accordionOne">
      {accordionItems.map((item) => (
        <div className="accordion-item" key={item.id}>
          <div className="accordion-header" id={`heading${item.id}`}>
            <button
              className={`accordion-button ${item.id === 2 ? "" : "collapsed"}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${item.id}`}
              aria-expanded={item.id === 2 ? "true" : "false"}
              aria-controls={`collapse${item.id}`}
            >
              <img src={item.icon} alt="" className="me-3" /> {item.title}
            </button>
          </div>
          <div
            id={`collapse${item.id}`}
            className={`accordion-collapse collapse${
              item.id === 2 ? " show" : ""
            }`}
            aria-labelledby={`heading${item.id}`}
            data-bs-parent="#accordionOne"
          >
            <div className="accordion-body">
              <p>{item.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WhyChoose;
