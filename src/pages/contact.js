import React, { useState } from "react"
import Layout from "../components/layout"

const Contact =  () => {
    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const sendEmail = (evt) => {
      evt.preventDefault();
      alert(`${name} /  ${mobile} / ${email} / ${message}`);
    }
    return <Layout>
      <div className="tiles-container-contact">
        <div className="long-tile-contact-map">
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
        <div className="long-tile-contact-form">
        <div className="contact-form-header">Contact Us</div>
        <form onSubmit={sendEmail}>
          <table className="contact-form">
           <tbody>
              <tr>
                <td>
                    <label>Name <span>*</span></label>
                </td>
                <td className="entryColumn">
                    <input type="text" required name="name" value={name} onChange={e => setName(e.target.value)}/>
                </td>
              </tr>
              <tr>
                <td>
                    <label>Mobile <span>*</span></label>
                </td>
                <td className="entryColumn">
                    <input type="text" pattern="[0-9]*" required name="mobile" minLength="10" maxLength="10" value={mobile} onChange={e => setMobile(e.target.value)}/>
                </td>
              </tr>
              <tr>
                <td>
                    <label>Email <span>*</span></label>
                </td>
                <td className="entryColumn">
                    <input type="email" required pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$" name="email" value={email} onChange={e => setEmail(e.target.value)}/>
                </td>
              </tr>
              <tr>
                <td>
                    <label>Message</label>
                </td>
                <td>
                    <textarea rows="6" name="message" value={message} onChange={e => setMessage(e.target.value)}></textarea>
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
        </div>
      </div>
    </Layout>
}

export default Contact;