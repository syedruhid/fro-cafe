import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const switcherOptions = [
  { label: "Home", value: "home", path: "/", cOption: "1", defaultChecked: true },
  { label: "Menu", value: "menu", path: "/menu", cOption: "2" },
  { label: "About", value: "about", path: "/about", cOption: "3" },
  { label: "Gallery", value: "gallery", path: "/gallery", cOption: "4" },
  { label: "Contact", value: "contact", path: "/contact", cOption: "5" },
];

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Scroll detection effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const currentOption = switcherOptions.find(opt => opt.path === location.pathname);
    if (currentOption) {
      const radios = document.querySelectorAll('.switcher input[type="radio"]');
      radios.forEach(radio => {
        radio.checked = radio.value === currentOption.value;
      });
    }
  }, [location]);

  // Tracks previous selection
  useEffect(() => {
    const timeout = setTimeout(() => {
      const switcher = document.querySelector(".switcher");
      if (!switcher) return;

      const trackPrevious = (el) => {
        const radios = el.querySelectorAll('input[type="radio"]');
        let previousValue = null;

        const initiallyChecked = el.querySelector('input[type="radio"]:checked');
        if (initiallyChecked) {
          previousValue = initiallyChecked.getAttribute("c-option");
          el.setAttribute("c-previous", previousValue);
        }

        radios.forEach((radio) => {
          radio.addEventListener("change", () => {
            if (radio.checked) {
              const current = radio.getAttribute("c-option");
              console.log(`Changed to: ${current}, Previous: ${previousValue}`);
              el.setAttribute("c-previous", previousValue ?? "");
              previousValue = current;
            }
          });
        });
      };

      trackPrevious(switcher);
    }, 0);

    return () => clearTimeout(timeout);
  }, []);

  const handleClick = (path) => {
    navigate(path);
    setIsMenuOpen(false); // Close menu when navigating
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Collapsed Burger Menu */}
      {isScrolled && (
        <div className="navbar-collapsed">
          <button 
            className="burger-menu" 
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            <span className={`burger-line ${isMenuOpen ? 'open' : ''}`}></span>
            <span className={`burger-line ${isMenuOpen ? 'open' : ''}`}></span>
            <span className={`burger-line ${isMenuOpen ? 'open' : ''}`}></span>
          </button>
          
          {/* Collapsed Menu Dropdown */}
          <div className={`collapsed-menu ${isMenuOpen ? 'open' : ''}`}>
            {switcherOptions.map((opt) => (
              <button
                key={opt.value}
                className={`collapsed-menu-item ${location.pathname === opt.path ? 'active' : ''}`}
                onClick={() => handleClick(opt.path)}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Full Navbar */}
      <fieldset className={`switcher ${isScrolled ? 'hidden' : ''}`}>
        <legend className="switcher__legend">Theme Switcher</legend>
        {switcherOptions.map((opt) => (
          <label key={opt.value} className="switcher__option">
            <input
              type="radio"
              name="theme"
              value={opt.value}
              c-option={opt.cOption}
              defaultChecked={opt.defaultChecked || false}
              className="switcher__input"
              onClick={() => handleClick(opt.path)}
            />
            <span className="switcher__label">{opt.label}</span>
          </label>
        ))}
        <svg className="switcher__filter" xmlns="http://www.w3.org/2000/svg">
          <filter id="switcher">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.8"
              numOctaves="4"
              result="noise"
            />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="1" />
          </filter>
        </svg>
      </fieldset>
    </>
  );
};

export default Navbar;
