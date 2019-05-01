import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import galleryJson from '../assets/gallery.json';

function GalleryProcessor() {
    const gql = graphql`{
        gallery:
        allFile(filter:{sourceInstanceName: {eq:"gallery"}, extension:{ne:"json"}}) {
          edges {
            node {
              name
              childImageSharp {
                fixed(width:300) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
    }`;
    const data = useStaticQuery(gql);
    const allImages = {} 
    data["gallery"].edges.forEach(x => {
        allImages[x.node.name] = x.node.childImageSharp.fixed;
    });
    const temp = galleryJson.map((j: any, index: number) => {
        return <div key={index} className="image-tile">
            <Img fixed={allImages[j.image]}></Img>
            <div className="desc">{j.descr}</div>
        </div>
    });
    return <div className="gallery">{temp}</div>
}
export default GalleryProcessor;