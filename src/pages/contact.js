import React, { useState } from "react"
import Layout from "../components/layout"
import * as emailjs from 'emailjs-com';
import SEO from "../components/seo";
import seoJson from "../assets/seo.json";

const Contact =  () => {
    
  const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    

    const resetForm = () => {
      setName("");
      setMobile("");
      setEmail("");
      setMessage("");
    }
    
    const sendEmail = (evt) => {
      evt.preventDefault();
      
      const template_params = {
        "name": name,
        "mobile": mobile,
        "email": email,
        "message": message
      }
     
      const service_id = "default_service";
      const template_id = "kyokushin";
      const user_id = 'user_0Duap72E6rc3HeaQGPtKc';
      // emailjs.send(service_id, template_id, template_params, user_id)
      //   .then(function(response) {
      //       alert('Email sent successfully!');
      //     }, function(err) {
      //       console.log('Oops some error occured! Please call us at the provided number. Sorry for the inconvenience');
      //     });
      resetForm();
    }


    return <Layout>
      <SEO title="Kyokushin Contact" description={seoJson["decription"]} keywords={seoJson["keywords"]}/>
      <div className="contact">
        <div className="long-tile-map">
          <ul>
            <li>Tel: +91-33-23373259 (home)</li>
            <li>Mob: +91-9830025132 </li>
            <li>Mob: +91-8902178696 </li>
            <li>Address: BA - 175, Sector 1, Salt Lake City, Kolkata 700 064</li>
            <li>Email: praseniko@yahoo.com</li>
            <li>Website: www.kyokushinkaikanindia.com</li>
          </ul>
          <iframe title="map-location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.750815040541!2d88.39861759300794!3d22.58842131055852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275ab2ef05531%3A0x6d7e5da4a6944350!2sKyokushin+Karate+Gurukul!5e0!3m2!1sen!2sin!4v1555671865675!5m2!1sen!2sin" allowFullScreen></iframe>
        </div>
        <div className="long-tile-form">
        <div className="form-header">Contact Us</div>
        <form onSubmit={sendEmail}>
          <table className="contact-form">
           <tbody>
              <tr>
                <td>
                    <label>Name <span className="highlight">*</span></label>
                </td>
                <td>
                    <input type="text" placeholder="Please enter your name" required name="name" value={name} onChange={e => setName(e.target.value)}/>
                </td>
              </tr>
              <tr>
                <td>
                    <label>Mobile <span className="highlight">*</span></label>
                </td>
                <td>
                    <input type="text" placeholder="Please enter mobile number" pattern="[0-9]*" required name="mobile" minLength="10" maxLength="10" value={mobile} onChange={e => setMobile(e.target.value)}/>
                </td>
              </tr>
              <tr>
                <td>
                    <label>Email <span className="highlight">*</span></label>
                </td>
                <td>
                    <input type="email" placeholder="Please enter your email id" required pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$" name="email" value={email} onChange={e => setEmail(e.target.value)}/>
                </td>
              </tr>
              <tr>
                <td>
                    <label>Message</label>
                </td>
                <td>
                    <textarea rows="6" placeholder="Please enter your message" name="message" value={message} onChange={e => setMessage(e.target.value)}></textarea>
                </td>
              </tr>
              <tr>
                <td colSpan="2">
                    <button type="submit" className="mailButton">Contact</button>
                </td>
              </tr>
            </tbody>  
          </table>
        </form>
        <div className="notes"> Fields marked with <span className="highlight">*</span> are required</div>
        </div>
      </div>
    </Layout>
}

export default Contact;