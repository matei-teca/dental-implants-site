// ShowCasesPage.js
import React from "react";
import "./styles/ShowCasesPage.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const cases = [
    {
      image: "/img/shutterstock_773757976-1-500x334.jpg",
      title: "Case Title 1",
      brief: "A brief explanation of Case 1...",
      details: "Further details about Case 1.",
      testimonial: "“Dr. [Name] did an amazing job! I feel confident and my smile looks great.” - Patient A"
    },
    {
      image: "/img/shutterstock_773757976-1-500x334.jpg",
      title: "Case Title 2",
      brief: "A brief explanation of Case 2...",
      details: "Further details about Case 2.",
      testimonial: "“I never thought I'd be able to smile so naturally again. Thank you, Dr. [Name]!” - Patient B"
    },
    // Add more cases as needed
  ];
  
  const ShowCasesPage = () => {
    return (
        <>
        <Header />
      <div className="showcases-page">
        <h1>Successful Cases Exemplified</h1>
        <div className="case-cards">
          {cases.map((caseItem, index) => (
            <div key={index} className="case-card">
              <img src={caseItem.image} alt={caseItem.title} className="case-image" />
              <h2>{caseItem.title}</h2>
              <p>{caseItem.brief}</p>
              <p className="case-details">{caseItem.details}</p>
              <blockquote className="case-testimonial">{caseItem.testimonial}</blockquote>
            </div>
          ))}
        </div>
      </div>
      <Footer />
      </>
    );
  };
  
  export default ShowCasesPage;
  