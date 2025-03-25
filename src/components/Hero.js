import "../styles/Hero.css";
import placeholderImg from "../assets/img/placeholder.png";

import React, { useState, useEffect} from "react";

function Hero() {
    const name = "Hanah Mae,";
    const [typedText, setTypedText] = useState("");
  
    useEffect(() => {
      let index = 0;

      const typingInterval = setInterval(() => {
        if (index < name.length) {
            const nextChar = name.charAt(index);
            setTypedText((prev) => prev + nextChar);
            index++;
        } else {
            clearInterval(typingInterval);
        }
    }, 250);
         return () => clearInterval(typingInterval);
    }, []);

    return (
        <section className="hero d-flex align-items-center">
            <div className="container text-center text-lg-start">
                <div className="row align-items-center flex-column-reverse flex-lg-row">
                <div className="col-lg-6 text-center text-lg-start">
                    <h1>
                        Hello<br />
                        I'm <span className="typing-effect">{typedText}</span><br />
                        <span className="web-dev">Web Developer</span>
                    </h1>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation.
                    </p>
                    <div className="btn-container mt-4">
                        <button className="btn btn-primary" 
                                onClick={() => window.open("https://storage.googleapis.com/hanah-cv-bucket/Hanah%20Mae%20Duran%20-%20CV.pdf", 
                                "_blank")}>
                                View my CV
                        </button>

                        <button className="btn btn-outline-secondary">Portfolio</button>
                    </div>
                </div>
                <div className="image-section col-lg-6 text-center d-none d-md-block">
                    <div class="circle circle-1"></div>
                    <div class="circle circle-2"></div>
                    <div class="circle circle-3"></div>

                    <img
                        src={placeholderImg}
                        alt="Hanah Mae"
                        className="img-fluid hero-image"
                    />
                </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;