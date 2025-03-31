import "../styles/PortfolioCard.css";
import Button from "./Button";

import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

function PortfolioCard({ image, title, description, githubLink }) {
  return (
    <div className="portfolio-card">
      <Zoom>
        <img
          src={image}
          alt={title}
          className="portfolio-image"
        />
      </Zoom>
      <h3>{title}</h3>
      <p>{description}</p>
      <Button 
        label="View on Github"
        onClick={() => window.open(githubLink, "_blank")}
        variant="primary"
      />
    </div>
  );
}

export default PortfolioCard;