import React from "react";
import Layout from "../components/layout";
import {organizationDetailsConfig} from "../assets/organization-details.config";
import SEO from "../components/seo";
import seoJson from "../assets/seo.json";

const OrganizationDetails = ({location}) => {
    let name;
    location.state ? name = location.state.name : name = 'shokeiMatsui';
    return <Layout imageSource={name}>
            <SEO title="Kyokushin Home" description={seoJson["decription"]} keywords={seoJson["keywords"]}/>
                {organizationDetailsConfig[name]()}
            </Layout>
}

export default OrganizationDetails;