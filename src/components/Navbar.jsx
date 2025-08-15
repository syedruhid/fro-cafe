import React, { useEffect } from "react";
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
  };

  return (
    <fieldset className="switcher">
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
  );
};

export default Navbar;
