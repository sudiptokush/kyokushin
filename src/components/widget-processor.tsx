import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

function WidgetProcessor({ source }) {
  const widgetGql = graphql`{
  shokeiMatsui:
  allFile( sort: { fields: [name]}, filter: {sourceInstanceName: {eq: "shokei-matsui"}}) {
    edges {
      node {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  },
  masOyama:
  allFile( sort: { fields: [name]}, filter: {sourceInstanceName: {eq: "mas-oyama"}}) {
    edges {
      node {
        childImageSharp {
          fluid{
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  },
  prasenjitSaha: 
  allFile( sort: { fields: [name]}, filter: {sourceInstanceName: {eq: "prasenjit-saha"}}) {
    edges {
      node {
        childImageSharp {
          fluid{
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
 } `;

  const data = useStaticQuery(widgetGql);
  const sourceObject = {
    shokeiMatsui: data.shokeiMatsui.edges,
    masOyama: data.masOyama.edges,
    prasenjitSaha: data.prasenjitSaha.edges
  }

  const Temp = sourceObject[source].map((x: any, index: number) => {
    return <div key={index} className="image-spacing-bottom">
              <Img fluid={x.node.childImageSharp.fluid}></Img>
            </div>
          
  });

  return Temp;
}
export default WidgetProcessor;