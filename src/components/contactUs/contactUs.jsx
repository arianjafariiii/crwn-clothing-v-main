import './contactUs.css';
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png';
import phone_icon from '../../assets/phone-icon.png';
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

import React from 'react'

const ContactUs = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "a6a3c9d7-c0fa-4071-8010-4423a07afa05");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='contact'>
        <div className='contact-col'>
            <h3>Send us a message <img src={msg_icon} alt="" /> </h3>
            <p>We’d love to hear from you! Whether you have questions about our programs, need support, or just want to learn more about our university, our team is here to help.
Fill out the form below or reach out through our email — we’ll get back to you as soon as possible.</p>
            <ul> 
                <li><img src={mail_icon} alt="" />arian.jafari2233@gmail.com</li>
                <li><img src={phone_icon} alt="" />0903-898-7723</li>
                <li><img src={location_icon} alt="" />Iran shiraz tachara st. rmfgpp ...</li>
            </ul>
        </div>
        <div className='contact-col'>
            <form onSubmit={onSubmit} >
                <label>Name:</label>
                <input name='name' type='text' placeholder='Enter your name here' required />
                <label>Phone Number</label>
                <input type='tel' name='phone' placeholder='Enter your mobile number' required />
                <label>Write tour message</label>
                <textarea name='message' rows="6" placeholder='Enter your message' required ></textarea>
                <button type='submit' className='btn dark-btn'>Submit now<img src={white_arrow} /></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default ContactUs;