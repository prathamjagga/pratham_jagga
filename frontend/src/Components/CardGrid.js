import React, { useState } from "react";

import "../Styles/CardGrid.css";

const Card = ({ company, headline, primaryText }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div
      className="adCard"
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      {!isHovered && (
        <div>
          <div style={{ fontSize: "2rem" }}>{company}</div>
          <div style={{ fontSize: "1.2rem", padding: "5px 0" }}>{headline}</div>
          <p>{primaryText}</p>{" "}
        </div>
      )}
      {isHovered && (
        <div>
          <div className="cardOnHover">
            <div
              style={{
                fontSize: "5rem",
              }}
            >
              {company.split(" ")[0]}
            </div>
            <div
              style={{
                fontSize: "1rem",
                textDecoration: "underline",
                color: "#818CF8",
                cursor: "pointer",
              }}
            >
              {headline}&nbsp;
              <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
              </svg>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const CardGrid = ({ ads }) => {
  const cards = ads.map((item, index) => {
    const { company, headline, primaryText } = item;
    return (
      <Card
        company={company}
        headline={headline}
        primaryText={primaryText}
        key={index}
      />
    );
  });
  return (
    ads.length != 0 && (
      <div className="cardGrid">{ads.length != 0 && cards}</div>
    )
  );
};

export default CardGrid;
