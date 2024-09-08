import React, { useEffect } from "react";
import "./preloader.css";
import { preLoaderAnim } from "../../src/components/animations/index";

const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);
  return (
    <div className="preloader">
      <div className="texts-container">
        <span> Health </span>
        <span> Management </span>
        <span> System</span>
      </div>
    </div>
  );
};

export default PreLoader;
