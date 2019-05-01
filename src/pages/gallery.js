import React from "react"
import Layout from "../components/layout"
import GalleryProcessor from "../components/gallery-processor";
import SEO from "../components/seo";
import seoJson from "../assets/seo.json";

export default () => (
    <Layout>
      <SEO title="Kyokushin Mas Oyama" description={seoJson["decription"]} keywords={seoJson["keywords"]}/>
      <div className="body-content">
        <GalleryProcessor></GalleryProcessor>
      </div>
    </Layout>
  )