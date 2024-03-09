import React from "react";
import "./YourmentalHealth.css";
import ImageOne from "./image 14.png";
const Image2 = () => {
    return (
        <div className="image-text-section">
          <div className="text-content">
            <h2 className="heading">Take a <br/>Nature Walk</h2>
            <p className="paragraph">Escape into nature with a revitalizing walk. Step outside,<br/> breathe in the fresh air, and let the natural surroundings<br/> ease your mind. The rhythmic pace and scenic beauty <br/>offer a therapeutic experience, promoting relaxation and <br/>mental clarity. Embrace the healing power of nature as <br/> you take this moment for yourself, finding solace in <br/> the simplicity of a calming and refreshing outdoor walk.</p>
          </div>
          <div className="image-container">
            <img src={ImageOne} alt="Your Image" />
          </div>
        </div>
  );
};

export default Image2;
