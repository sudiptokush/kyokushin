import React from "react";
import Layout from "../components/layout"
import ImageProcessor from "../components/image-processor";
import CarouselProcessor from "../components/carousel-processor";
import SEO from "../components/seo";
import seoJson from "../assets/seo.json";

export default () => (
  <Layout imageSource="masOyama"> 
    <SEO title="Kyokushin Home" description={seoJson["decription"]} keywords={seoJson["keywords"]}/>
    <div className="home">
      <div className="banner">
          <CarouselProcessor></CarouselProcessor>
      </div>
      <div className="sub-header">
        Kyokushin: <span className="highlight">The Ultimate Truth</span>
      </div>
      <div className="content-container">
          <div className="left-inset-image-content">
              <ImageProcessor source="masutatsuOyamaHome" type="fluid"></ImageProcessor>
          </div>
          <div className="body-content">
            <span className="quotes">
              <p>
                Although it is important to study and train for skill in techniques, for the man who wishes to 
                truly accomplish the way of Budo, it is more important to make his whole life in training and 
                therefore not aiming for skill and strength alone, but also for spiritual attainment.  
              </p>
              <p className="quoted-by">
                Masutatsu Oyama
              </p>
            </span>
          </div>     
      </div>
    </div>
  </Layout>
)
