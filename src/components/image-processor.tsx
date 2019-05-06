import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

function ImageProcessor({ source, type }) {
  const imgGql = graphql`{
    masutatsuOyama:
      file(relativePath: { eq: "masutatsu_oyama.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      shokeiMatsui:
      file(relativePath: { eq: "kancho_shokei_matsui.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      masutatsuOyamaHome:
      file(relativePath: { eq: "masutatsu_oyama_home.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      logoTop: 
      file(relativePath: { eq: "logo-top.png" }) {
        childImageSharp {
          fixed(width: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      },
      logoMiddle: 
      file(relativePath: { eq: "logo-middle.png" }) {
        childImageSharp {
          fixed(width: 140) {
            ...GatsbyImageSharpFixed
          }
        }
      },
      logoBottom: 
      file(relativePath: { eq: "logo-bottom.png" }) {
        childImageSharp {
          fixed(width: 170) {
            ...GatsbyImageSharpFixed
          }
        }
      },
      dojoKunBanner:
      file(relativePath: { eq: "dojo-kun-banner.png" }) {
        childImageSharp {
          fluid(maxWidth: 1800) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      prasenjitSahaGurukul:
      file(relativePath: {eq: "prasenjit_saha_gurukul.jpg"}) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
   }`;

  const data = useStaticQuery(imgGql);
  
  return type == "fluid" ? 
    <Img key={source} fluid={data[source].childImageSharp.fluid}></Img> : 
    <Img key={source} fixed={data[source].childImageSharp.fixed}></Img> 
  
}
export default ImageProcessor;
