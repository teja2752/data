import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaUser } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Me</h1>

      <div className="contact-wrapper">
        {/* Left Section - Contact Details */}
        <div className="contact-left">
          <h3>Get in Touch</h3>
          <p>Feel free to reach out to me for any questions or opportunities!</p>

          <div className="contact-info">
            <FaUser className="icon" />
            <div>
              <p>Tejas Gadhave</p>
            </div>
          </div>

          <div className="contact-info">
            <FaMapMarkerAlt className="icon" />
            <div>
              <p>Pune, Maharashtra</p>
            </div>
          </div>

          <div className="contact-info">
            <FaEnvelope className="icon" />
            <div>
              <p>
                <a href="mailto:tejasgadhave979@gmail.com">
                  tejasgadhave979@gmail.com
                </a>
              </p>
            </div>
          </div>

          <div className="contact-info">
            <FaPhone className="icon" />
            <div>
              <p>
                <a href="tel:+919175795041">+91 9175795041</a>
              </p>
            </div>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="contact-right">
          <h3>Send Me a Message</h3>
          <form
            action="https://getform.io/f/anlqzpja" // Replace this
            method="POST"
            className="flex flex-col space-y-4"
          >
            <input
              name="name"
              type="text"
              required
              placeholder="Your Name"
              className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <input
              name="email"
              type="email"
              required
              placeholder="Your Email"
              className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <input
              name="subject"
              type="text"
              required
              placeholder="Subject"
              className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <textarea
              name="message"
              rows="4"
              required
              placeholder="Your Message"
              className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            ></textarea>
            <button
              type="submit"
              className="bg-black hover:bg-slate-700 text-white rounded-xl px-3 py-2 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
