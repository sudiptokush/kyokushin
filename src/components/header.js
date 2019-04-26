import React from "react";
import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby";
import headerStyles from './header.module.scss'

export default () => ( 
    <div className= {headerStyles.headerContainer}>
        <div className={headerStyles.brand}>
            <div>
            <StaticQuery
                query={graphql`
                    query SiteTitleQuery {
                        site {
                        siteMetadata {
                            title
                        }
                    }
                    }
                `}
                render={data =>(<> {data.site.siteMetadata.title} </>)} />
            </div>
        </div>
        <div className={headerStyles.menuBar}>
            <Link to="/">Home</Link>
            <Link to="/founder/">Founder</Link>
            <Link to="/organization/">Organization</Link>
            <Link to="/gurukul/">Gurukul</Link>
            <Link to="/gallery/">Gallery</Link>
            <Link to="/events/">Events</Link>
            <Link to="/dojo-kun/">Dojo Kun</Link>
            <Link to="/contact/">Contact</Link>
        </div>
    </div>
  )