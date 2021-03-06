import React from "react"
import Header from "./header";
import Footer from "./footer";
import LeftWidget from "./left-widget";
import RightWidget from "./right-widget";
import layoutStyles from "./layout.module.scss";


const Layout = (props) => {
  let imageSource;
  props.imageSource ? imageSource = props.imageSource : imageSource = 'masOyama';
  return <div className={layoutStyles.container}>
    <div className={layoutStyles.header}>
      <Header></Header>
    </div>
    <div className={layoutStyles.leftWidget}>
      <LeftWidget></LeftWidget>
    </div>
    <div className={layoutStyles.main}>
      {props.children}
    </div>
    <div className={layoutStyles.rightWidget}>
      <RightWidget source={imageSource}></RightWidget>
    </div>
    <div className={layoutStyles.footer}>
      <Footer></Footer>
    </div>
  </div>
}

export default Layout;