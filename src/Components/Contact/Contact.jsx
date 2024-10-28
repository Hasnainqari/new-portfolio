import React from "react";
import themePattern from "../../assets/theme-pattern.svg";
import email from "../../assets/mail_icon.svg";
import call from "../../assets/call_icon.svg";
import location from "../../assets/location_icon.svg";
import "./Contact.css";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "0c7d7d89-2260-4124-af9c-8995d427b91d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      alert("Form Submitted Successfully");
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img width={230} src={themePattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I’m available to take on new projects and would love to hear about
            anything you have in mind. Feel free to reach out at any time!
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={email} alt="email" />
              <a href="mailto:hasnainqari036@gmail.com">
                <p>hasnainqari036@gmail.com</p>
              </a>
            </div>
            <div className="contact-detail">
              <img src={call} alt="call" />
              <a href="tel:+92 3243343 722">
                <p>+92 3243343 722</p>
              </a>
            </div>
            <div className="contact-detail">
              <img src={location} alt="location" />
              <p>KHI, Pakistan</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your name</label>
          <input
            required
            type="text"
            placeholder="Enter your name"
            name="name"
          />
          <label htmlFor="">Your email</label>
          <input
            required
            type="email"
            placeholder="Enter your email"
            name="email"
          />
          <label htmlFor="">Write your message here</label>
          <textarea
            required
            rows="8"
            placeholder="Enter your message"
            name="message"
          />
          <button type="submit" className="contact-submit">
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
