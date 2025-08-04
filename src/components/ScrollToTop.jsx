// src/components/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    // Always scroll to top on route change or same-route click
    window.scrollTo({
      top: 0,
      behavior: "instant", // change to "smooth" if desired
    });
  }, [location.key]); // location.key changes even when the same path is clicked

  return null;
}


export default ScrollToTop;
