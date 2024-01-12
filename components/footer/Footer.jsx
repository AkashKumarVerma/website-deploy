import React from "react";

const Footer = () => {
  const links = [
    {
      id: 1,
      title: "Links",
      column: "col-lg-2 col-md-3 col-sm-6 mb-30",
      items: [
        { label: "Home", href: "/" },
        { label: "Pricing", href: "/pricing" },
        { label: "About us", href: "/about-v1" },
        // { label: "Careers", href: "#" },
        { label: "Services", href: "#" },
        { label: "Blog", href: "/blog-v2." },
      ],
    },
    {
      id: 2,
      title: "Services",
      column: "col-lg-3 col-md-4 col-sm-6 mb-30",
      items: [
        { label: "Design", href: "/service-details" },
        { label: "Development", href: "/service-details" },
        { label: "Consultation", href: "/service-details" },
        { label: "Support", href: "/service-details" },
      ],
    },
  ];

  const socialIcons = [
    {
      iconClass: "fab fa-facebook-f",
      link: "https://www.facebook.com/profile.php?id=61554986896943",
    },
    {
      iconClass: "fab fa-twitter",
      link: "https://twitter.com/alchemycores",
    },
    {
      iconClass: "fab fa-linkedin-in",
      link: "https://www.linkedin.com/in/alchemy-cores-779b7a2a9/",
    },
  ];

  return (
    <>
      {links.map((link) => (
        <div className={link.column} key={link.id}>
          <h5 className="footer-title text-white fw-500">{link.title}</h5>
          <ul className="footer-nav-link style-none">
            {link.items.map((item, i) => (
              <li key={i}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}

      <div className="col-xl-3 col-lg-4 col-md-5 mb-30">
        <h5 className="footer-title text-white fw-500">Address</h5>
        <p className="text-white opacity-75 mb-35">
          Bulding No. 979, 3rd Main, D Block <br />
          AECS Layout, Kundanhalli, Banglore 
        </p>
        <ul className="d-flex social-icon style-none">
          {socialIcons.map((icon, index) => (
            <li key={index}>
              <a href={icon.link} target="_blank" rel="noopener noreferrer">
                <i className={icon.iconClass} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Footer;
